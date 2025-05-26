"use client";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import TreatmentBox from "./TreatmentBox";
import axios from "axios";

function AllTreatmentSection() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [treatmentsCategories, setTreatmentCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${SiteURl}/api/treatment/servicess`)
      .then(res => {
        setTreatmentCategories(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Filter treatment categories based on search text
  const filteredCategories = treatmentsCategories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <section className="mt-14 sm:mt-20">
      <div className="container">
        {/* Section title */}
        <div className="text-center">
          <h2
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-[26px] sm:text-3xl md:text-[36px] font-bold leading-normal text-primary"
          >
            Our All Treatments
          </h2>

          {/* Inline search input */}
          <div
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="max-w-[270px] sm:max-w-[350px] md:max-w-[500px] xl:max-w-[638px] mx-auto mt-5"
          >
            <div className="relative">
              <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Search Treatments"
                className="w-full py-2 sm:py-3 md:py-[22px] pl-3 md:pl-[50px] md:pr-[70px] bg-[#F9F9F9] rounded-[10px] border border-[rgba(0,0,0,0.10)] focus:outline-none md:text-[24px]"
              />
              <span className="absolute text-[28px] top-1/2 right-3 sm:right-5 md:right-[70px] translate-y-[-50%] opacity-50">
                <IoSearchOutline />
              </span>
            </div>
          </div>
        </div>

        {/* Treatment cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full relative">
          {filteredCategories.map((category, idx) => (
            <div data-aos="zoom-in" data-aos-duration="2000" key={idx}>
              <TreatmentBox item={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllTreatmentSection;
