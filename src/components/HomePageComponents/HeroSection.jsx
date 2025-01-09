import DoctorImg from '../../assets/images/hero-doctor.png';
import CommonBtn from '../Common/CommonBtn';
import ArrowIconBlack from '../../assets/images/icon/arrow-up-black.svg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="px-5 xl:px-[47px] xl:pt-20 hidden xl:block">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="bg-primary rounded-2xl xl:rounded-[40px]"
      >
        <div className="container">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[320px] font-bold text-white text-center hidden 2xl:block"
          >
            Pharmacy
          </h1>
          <div className="flex  items-end justify-between mt-[-200px]">
            <p
              data-aos="zoom-left"
              data-aos-duration="3000"
              className="w-[510px] text-[24px] text-white pb-[85px]"
            >
              Operational bottlenecks, frequent billing errors, and mismanaged
              schedules can lead to revenue loss and frustrated patients.
            </p>
            <img
              data-aos="zoom-up"
              data-aos-duration="2000"
              className=""
              src={DoctorImg}
              alt="DoctorImg"
            />
            <Link
              data-aos="zoom-in"
              data-aos-duration="2000"
              to={'/service'}
              className="pb-[85px]"
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
