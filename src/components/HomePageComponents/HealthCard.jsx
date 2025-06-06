import React from 'react'

function HealthCard({ item }) {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="py-9 px-5 sm:px-[44px] bg-healthcareCardBg text-white rounded-[20px] text-center"
    >
      <img
        className="w-[94px] h-[94px] mx-auto"
        src={`${SiteURl}/${item.avatar}`}
        alt={item?.title}
      />
      <div>
        <h4 className="text-xl lg:text-[24px] font-bold mt-5">{item.title}</h4>
        <p className="lg:text-[18px] font-medium leading-[27px] mt-2">
          {item?.sub_title}
        </p>
      </div>
    </div>
  );
}

export default HealthCard