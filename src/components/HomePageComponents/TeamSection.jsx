"use client";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";

function TeamSection() {
  const [DoctorData, setDoctorData] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/doctores`,
    })
      .then(res => {
        setDoctorData(res?.data?.data || teamData);
      })
      .catch(err => {
        console.log(err);
        setDoctorData(teamData);
      });
  }, []);

  return (
    <section className="my-14 sm:my-20">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center  justify-center  ">
        {/* Section title */}
        <div className="mb-5 sm:mb-10">
          <h3
            data-aos="zoom-up"
            data-aos-duration="1000"
            className="max-w-[650px] text-center mx-auto text-2xl sm:text-3xl md:text-4xl text-[#0ca6fc] font-bold"
          >
            Meet Our Trusted Healthcare Pharmacists
          </h3>
        </div>
        <div className="mb-5 sm:mb-10">
          <span
            data-aos="zoom-up"
            data-aos-duration="1000"
            className="block max-w-[650px] mx-auto text-center text-base sm:text-lg md:text-xl text-black font-medium"
          >
            All our pharmacists are fully licensed and approved by the General
            Pharmaceutical Council (GPhC).
          </span>
        </div>
        {/* Grid with centering */}
        <div className=" flex flex-row items-center justify-center flex-wrap   gap-5 max-w-7xl w-full">
          {DoctorData.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex justify-center max-w-[365px] w-full"
            >
              <TeamCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
