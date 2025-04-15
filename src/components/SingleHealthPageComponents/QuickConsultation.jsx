import { Link, useParams } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import CommonButtonV2 from "../Common/CommonButtonV2";
import consulttionImg from "../../assets/images/consultation.png";
import axios from "axios";
import { useEffect, useState } from "react";

function QuickConsultation() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [consultationData, setconsultationData] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SiteURl}/api/get-consultation-data`,
    })
      .then(res => {
        console.log(res.data.data, "consultation data");
        setconsultationData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="mb-14 sm:mb-[140px]">
      <div className="container">
        <div className="sm:py-[50px] py-8 px-5 sm:px-10 lg:pl-20 lg:pr-[33px] bg-primaryLight rounded-[20px]">
          <div className="flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-between">
            {/* text wrapper  */}
            <div className="lg:max-w-[513px]">
              <h3 className="xl:text--xl text-primary font-bold md:text-4xl text-2xl sm:text-3xl">
                {consultationData?.title}
              </h3>
              <p className="sm:text-[20px] mt-[10px] leading-[164%]">
                {consultationData?.sub_description}
              </p>
              {/* feature  */}
              <ul className="quick-consultation-feature mt-5">
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p className="sm:text-[18px] leading-[164%]">
                    {consultationData?.features.feature1}
                  </p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p className="sm:text-[18px] leading-[164%]">
                    {consultationData?.features.feature2}
                  </p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p className="sm:text-[18px] leading-[164%]">
                    {<p>{consultationData?.features.feature3}</p>}
                  </p>
                </li>
              </ul>
              {/* btn  */}
              <div className="mt-9">
                <Link to={`/treatment/consultation/${id}`}>
                  <CommonButtonV2
                    type="fill"
                    text={consultationData?.button?.name}
                  />
                </Link>
              </div>
            </div>
            {/* image wrapper  */}
            <div className="max-w-[620px]">
              <img
                src={
                  consultationData?.image
                    ? `${SiteURl}/${consultationData?.image}`
                    : checkImg
                }
                alt="consulttionImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickConsultation;
