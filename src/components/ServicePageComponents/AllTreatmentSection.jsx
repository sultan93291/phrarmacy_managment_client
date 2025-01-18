"use client";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import TreatmentBox from "./TreatmentBox";
import axios from "axios";



function AllTreatmentSection() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [treatmentsCategories, setTreamentCategories] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/treatment/servicess`,
    })
      .then(res => {
        console.log(res.data , "all data is here");
        
        setTreamentCategories(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <section className="pt-[140px]">
      <div className="container">
        {/* section title  */}
        <div className="text-center">
          <h2
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-[36px] font-bold leading-normal text-primary"
          >
            Our All Treatments
          </h2>
          <div
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="w-[638px] mx-auto mt-5"
          >
            <Searchbar />
          </div>
        </div>
        <div>
          {treatmentsCategories.map((category, idx) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={idx}
              className="mt-10"
            >
              <TreatmentBox item={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllTreatmentSection;
