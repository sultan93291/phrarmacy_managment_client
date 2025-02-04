import CommonBtn from "../Common/CommonBtn";
import ArrowIcon from "../../assets/images/icon/arrow-up-white.svg";
import personalizedImg from "../../assets/images/personalied-healthcare.png";
import { Link } from "react-router-dom";

function PersonalizedSection() {
  return (
    <section className="px-4 xl:px-[47px]">
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="py-10 sm:py-[73px] bg-headerBg rounded-2xl sm:rounded-[40px]"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-20 xl:gap-[162px]">
            <div data-aos="zoom-up"
              data-aos-duration="2000" className="ps-3">
              <h3
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="text-2xl sm:text-3xl md:text-4xl opacity-1 text-[#0ca6fc] font-bold lg:text--xl"
              >
                Personalized Healthcare, Just a Click Away
              </h3>
              <p
                data-aos="zoom-up"
                data-aos-duration="3000"
                className="text-lg sm:text-[24px] font-medium text-categoryBtnColor mt-6"
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
                  width="35px"
                  height="35px"
                  type="gradient"
                  size="small"
                />
              </Link>
            </div>
            <div>
              <img
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="object-cover"
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
