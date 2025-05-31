"use client";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";

const teamData = [
  {
    id: 1,
    imgUrl: "https://i.ibb.co.com/zfxR5Wm/Team-Member-Image-1.png",
    name: "Willimas Jonshon",
    designation: "Customer service",
  },
  {
    id: 2,
    imgUrl: "https://i.ibb.co.com/g4QBSxQ/Team-Member-Image-2.png",
    name: "Tomas Murphy",
    designation: "Customer service",
  },
  {
    id: 3,
    imgUrl: "https://i.ibb.co.com/HVrdvpR/Team-Member-Image-3.png",
    name: "Robert Fox",
    designation: "Contract Tracer",
  },
  {
    id: 4,
    imgUrl: "https://i.ibb.co.com/TvVhnVw/Team-Member-Image-4.png",
    name: "Amalia nichole",
    designation: "Nurse Aide",
  },
];

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
            Expert care from certified doctors - Convenient care at your
            fingertips.
          </h3>
        </div>
        {/* Grid with centering */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5  items-center max-w-7xl w-full">
          {DoctorData.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex justify-center w-full"
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
