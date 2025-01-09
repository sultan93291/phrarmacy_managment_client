import { Link } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import CommonButtonV2 from "../Common/CommonButtonV2";
import consulttionImg from "../../assets/images/consultation.png";

function QuickConsultation() {
  return (
    <section className="mb-[140px]">
      <div className="container">
        <div className="py-[50px] pl-20 pr-[33px] bg-primaryLight rounded-[20px]">
          <div className="flex items-center justify-between">
            {/* text wrapper  */}
            <div className="w-[513px]">
              <h3 className="text--xl">
                Start Your Quick
                <br />
                Consultation
              </h3>
              <p className="text-[20px] mt-[10px]">
                it’s 100% online and takes 2 minutes
              </p>
              {/* feature  */}
              <ul className="quick-consultation-feature mt-5">
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>
                    Take our online questionnaire to see suitable treatments and
                    prices
                  </p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>Choose your preferred ED treatment</p>
                </li>
                <li>
                  <img src={checkImg} alt="checkImg" />
                  <p>
                    We'll deliver your order in discreet packaging as quickly as
                    tomorrow
                  </p>
                </li>
              </ul>
              {/* btn  */}
              <div className="mt-9">
                <Link to={"/consultation"}>
                  <CommonButtonV2 type="fill" text="Get Started" />
                </Link>
              </div>
            </div>
            {/* image wrapper  */}
            <div className="w-[620px]">
              <img src={consulttionImg} alt="consulttionImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickConsultation;
