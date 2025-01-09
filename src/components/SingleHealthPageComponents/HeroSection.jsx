import { Link } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <section className="pt-[120px] pb-[140px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="w-[580px]">
            <h1 className="text--xl">Hair Loss Prevention Treatment</h1>
            <ul className="health-feature pl-10 mt-10 mb-10">
              <li>
                <img src={checkImg} alt="checkImg" />
                <p>Clinically proven treatments for effective hair regrowth</p>
              </li>
              <li>
                <img src={checkImg} alt="checkImg" />
                <p>Discreet, next-day delivery to your door</p>
              </li>
              <li>
                <img src={checkImg} alt="checkImg" />
                <p>
                  Answer a few quick questions to find the best hair loss
                  solution for your needs
                </p>
              </li>
            </ul>
            <div>
              <Link to={"/consultation"} className="flex items-center gap-[10px] text-[24px] py-5 px-[30px] bg-primary rounded-[40px] font-semibold w-fit text-white border-[2px] border-white duration-200 ease-in-out hover:bg-transparent hover:text-black hover:border-primary">
                Start Consultation
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          {/* right  */}
          <div>
            <img className="w-[632px] h-[632px] object-cover" src="https://i.ibb.co/ft1TKqj/image-128.png" alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
