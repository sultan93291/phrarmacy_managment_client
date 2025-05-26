import { useEffect, useState } from "react";
import HealthCard from "./HealthCard";
import axios from "axios";

function HealthcareSection() {
  const [heroData, setheroData] = useState();
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "POST",
      url: `${SiteURl}/api/section/data?type=healthcare`,
    })
      .then(res => {
        setheroData(res?.data?.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);




  return (
    <section className="px-4 xl:px-[47px] mt-10">
      <div className="py-10 sm:py-20 lg:py-32 bg-primryDark rounded-2xl sm:rounded-[40px]">
        <div className="container">
          {/* section title  */}
          <div
            data-aos="zoom-up"
            data-aos-duration="1000"
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl opacity-1 font-bold text--xl text-white md:w-[60%] mx-auto">
              Quick, Confidential, and Reliable Healthcare
            </h3>
          </div>
          <div className="mt-10 sm:mt-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {heroData?.cards?.map(item => (
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                key={item.id}
                className=""
              >
                <HealthCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthcareSection;
