import CommonBtn from "../Common/CommonBtn";
import ArrowIcon from "../../assets/images/icon/arrow-up-white.svg";
import personalizedImg from "../../assets/images/personalied-healthcare.png";
import { Link } from "react-router-dom";

function PersonalizedSection() {
  return (
    <section className="px-[50px]">
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="py-[73px] bg-headerBg rounded-[40px]"
      >
        <div className="container">
          <div className="flex items-center gap-[162px]">
            <div    data-aos="zoom-up"
                  data-aos-duration="2000" className="w-[737px]">
              <h3
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="text--xl"
              >
                Personalized Healthcare, Just a Click Away
              </h3>
              <p
                data-aos="zoom-up"
                data-aos-duration="3000"
                className="text-[24px] font-medium text-categoryBtnColor mt-6"
              >
                Experience healthcare that's designed around your needs. Access
                safe, approved treatments without the hassle of waiting rooms.
                Get genuine prescriptions delivered discreetly to your door, so
                you can focus on what matters most — your health.
              </p>
              <Link to={"/service"} className="inline-block mt-10">
                <CommonBtn
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  text="Learn more"
                  arrowIcon={ArrowIcon}
                  width="45px"
                  height="45px"
                  type="gradient"
                  size="small"
                />
              </Link>
            </div>
            <div>
              <img
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="w-[626px] h-[585px]"
                src={personalizedImg}
                alt="personalizedImg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalizedSection;
