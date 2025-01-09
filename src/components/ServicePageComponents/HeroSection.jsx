import serviceHeroBg from "../../assets/images/service-hero-bg.png";
import Breadcrumb from "../Common/Breadcrumb";

function HeroSection() {
  return (
    <section className="px-9 mt-10">
        <div className="bg-[100%_100%] bg-no-repeat py-[218px] rounded-[20px]" style={{backgroundImage:`url(${serviceHeroBg})`}}>
            <div className="container">
                <h1 className="text-[76px] font-bold leading-normal text-menuLinkColor text-center">HealthCare Services</h1>
                <div className="text-center">
                  <Breadcrumb />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection