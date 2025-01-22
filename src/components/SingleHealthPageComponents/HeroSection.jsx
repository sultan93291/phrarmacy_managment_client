import { Link } from "react-router-dom";
import checkImg from "../../assets/images/icon/check.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection(data) {
  console.log("hero section data", data.data?.data?.detail?.avatar);
  const SiteURl = import.meta.env.VITE_SITE_URL;

 const id = data.data?.data?.treatment_id;


  return (
    <section className="pt-[120px] pb-[140px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="w-[580px]">
            <h1 className="text--xl"> {data.data?.data?.detail?.title} </h1>
            <ul className="health-feature pl-10 mt-10 mb-10">
              {data?.data?.data?.items.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={checkImg} alt="checkImg" />
                    <p>{item?.title}</p>
                  </li>
                );
              })}
            </ul>
            <div>
              <Link
                to={`/treatment/consultation/${data.data?.data?.treatment_id}`}
                className="flex items-center gap-[10px] text-[24px] py-5 px-[30px] bg-primary rounded-[40px] font-semibold w-fit text-white border-[2px] border-white duration-200 ease-in-out hover:bg-transparent hover:text-black hover:border-primary"
              >
                Start Consultation
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          {/* right  */}
          <div>
            <img
              className="w-[632px] h-[632px] object-cover"
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
