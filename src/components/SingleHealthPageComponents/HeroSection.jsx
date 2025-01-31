import { Link } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection(data) {
  console.log("hero section data", data.data?.data?.detail?.avatar);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  const id = data.data?.data?.treatment_id;


  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* left */}
          <div className="max-w-[580px]">
            <h1 className="xl:text--xl text-primary font-bold md:text-4xl text-2xl sm:text-3xl"> {data.data?.data?.detail?.title} </h1>
            <ul className="health-feature sm:pl-10 mt-10 mb-10">
              {data?.data?.data?.items.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3 sm:gap-5 mt-5 sm:mt-7 first:mt-0">
                    <img src={checkImg} alt="checkImg" />
                    <p className="sm:text-[22px] md:text-[24px] font-medium capitalize">{item?.title}</p>
                  </li>
                );
              })}
            </ul>
            <div>
              <Link
                to={`/treatment/consultation/${data.data?.data?.treatment_id}`}
                className="flex items-center gap-[10px] sm:text-[24px] py-2 px-4 sm:py-2 sm:px-4 md:py-5 md:px-[30px] bg-primary rounded-[40px] font-semibold w-fit text-white border-[2px] border-white duration-200 ease-in-out hover:bg-transparent hover:text-black hover:border-primary"
              >
                Start Consultation
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          {/* right  */}
          <div>
            <img
              className="xl:max-w-[632px] xl:max-h-[632px] object-cover"
              src={`${SiteURl}/${data.data?.data?.detail?.avatar}`}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
