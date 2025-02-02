"use client";
import { useEffect, useState } from "react";
import TeamCard from "../HomePageComponents/TeamCard";
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

function OurMission() {
  const [DoctorData, setDoctorData] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;
  console.log(`${SiteURl}/api/doctores`);
  console.log("hello world");

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/doctores`,
    })
      .then((res) => {
        console.log("mission data", res.data.data.cards);
        setDoctorData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("this is doctor data", DoctorData);

  return (
    <section className="pb-14 lg:pb-[140px]">
      <div className="container">
        <div className="max-w-[692px] text-center mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text--xl text-primary">
            Our mission provide medical equipment in order to.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DoctorData.map((item, index) => (
            <TeamCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMission;
