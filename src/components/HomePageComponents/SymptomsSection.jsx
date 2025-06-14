import { Link } from "react-router-dom";
import SymptomCard from "./SymptomCard";

const symptomsData = [
  {
    id: 1,
    title: "Weight Loss",
    imgUrl: "https://i.ibb.co.com/ww6TjPD/Specialty-Card-1.png",
    buttonLink: "/service/140",
  },
  {
    id: 2,
    title: "Erectile dysfunction",
    imgUrl: "https://i.ibb.co.com/W64gw4d/Specialty-Card-2.png",
    buttonLink: "/service/144",
  },
  {
    id: 3,
    title: "Sexual Health",
    imgUrl: "https://i.ibb.co.com/gTq87VJ/Specialty-Card-3.png",
    buttonLink: "/service/116",
  },
  {
    id: 4,
    title: "Hair Loss",
    imgUrl: "https://i.ibb.co.com/Yts3rnx/Specialty-Card.png",
    buttonLink: "/service/143",
  },
];

function SymptomsSection() {
  return (
    <section className="mb-14 sm:my-20">
      <div className="container">
        {/* section-title  */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-5"
        >
          <h2 className="text-2xl 2xl:text--xl text-center sm:text-left font-bold text-primary leading-normal">
            25+ Symptoms Specialities
          </h2>
          <Link
            to={"/service"}
            className="text-xl 2xl:text-[24px] font-semibold text-[#01548B]"
          >
            See All Specialties
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {symptomsData.map(item => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={item.id}
              className="lg:mt-10"
            >
              <SymptomCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SymptomsSection;
