import Breadcrumb from "./Breadcrumb";

function InnerSection({ bgImg, service }) {
  return (
    <section className="px-5 mt-10">
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className=" bg-no-repeat py-20 sm:py-40 lg:py-[218px] rounded-xl sm:rounded-[20px] bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h1 className="text-3xl sm:text-5xl lg:text-[76px] font-bold leading-normal text-white text-center">
            {service}
          </h1>
          <div data-aos="zoom-left"
            data-aos-duration="2000" className="text-center">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerSection;
