"use client";
import DoctorImg from "../../assets/images/hero-doctor.png";
import CommonBtn from "../Common/CommonBtn";
import ArrowIconBlack from "../../assets/images/icon/arrow-up-black.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HeroSection() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [avatar, setavatar] = useState();
  const [heroData, setheroData] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SiteURl}/api/cms/get-banner-page-data`,
    })
      .then(res => {
        setavatar(res.data.data.avatar);
        setheroData(res?.data?.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

;

  return (
    <section className="px-4 xl:px-[47px] mt-10 mb-14 lg:my-20">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="bg-primary pt-5 sm:pt-0 rounded-2xl xl:rounded-[40px]"
      >
        <div className="container">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[40px] sm:text-[100px] md:text-[130px] lg:text-[180px] xl:text-[250px] 2xl:text-[320px] font-bold text-white sm:text-center"
          >
            {heroData?.title}
          </h1>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:mt-[-150px] xl:mt-[-200px] lg:items-end lg:justify-between ">
            <div className="">
              <p
                data-aos="zoom-left"
                data-aos-duration="3000"
                className="max-w-[510px] text-lg sm:text-xl xl:text-[24px] text-white pb-8 sm:pb-14 2xl:pb-[85px]"
              >
                {heroData?.sub_title}
              </p>
              <Link
                data-aos="zoom-in"
                data-aos-duration="2000"
                to={"/service"}
                className="pb-[85px] inline-block mb-2 2xl:hidden"
              >
                <CommonBtn
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  text="Order Now"
                  arrowIcon={ArrowIconBlack}
                />
              </Link>
            </div>

            <img
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="sm:max-h-[550px] -mt-20 lg:mt-auto sm:max-w-[450px] object-cover"
              src={`${SiteURl}/${avatar}`}
              // src={DoctorImg}
              alt="DoctorImg"
            />
            <Link
              data-aos="zoom-in"
              data-aos-duration="2000"
              to={"/service"}
              className="pb-[85px] hidden 2xl:block"
            >
              <CommonBtn
                data-aos="zoom-up"
                data-aos-duration="2000"
                text="Order Now"
                arrowIcon={ArrowIconBlack}
                height="60px"
                width="60px"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
