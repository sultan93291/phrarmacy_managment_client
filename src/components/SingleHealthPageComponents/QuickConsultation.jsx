import { Link } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import CommonButtonV2 from "../Common/CommonButtonV2";
import consulttionImg from "../../assets/images/consultation.png";
import axios from "axios";
import { useEffect, useState } from "react";

function QuickConsultation() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [consultationData, setconsultationData] = useState();

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
    <section className="mb-[140px]">
      <div className="container">
        <div className="py-[50px] pl-20 pr-[33px] bg-primaryLight rounded-[20px]">
          <div className="flex items-center justify-between">
            {/* text wrapper  */}
            <div className="w-[513px]">
              <h3 className="text--xl">{consultationData?.title}</h3>
              <p className="text-[20px] mt-[10px]">
                {consultationData?.sub_description}
              </p>
              {/* feature  */}
              <ul className="quick-consultation-feature mt-5">
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>{consultationData?.features.feature1}</p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>{consultationData?.features.feature2}</p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>{<p>{consultationData?.features.feature3}</p>}</p>
                </li>
              </ul>
              {/* btn  */}
              <div className="mt-9">
                <Link to={"/consultation"}>
                  <CommonButtonV2
                    type="fill"
                    text={consultationData?.button?.name}
                  />
                </Link>
              </div>
            </div>
            {/* image wrapper  */}
            <div className="w-[620px]">
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
