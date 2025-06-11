import React from "react";

function TeamCard({ item }) {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="team-card relative bg-teamCardColor rounded-[10px] overflow-hidden max-w-[300px] aspect-square"
    >
      <img
        className="w-full h-full object-cover"
        src={`${SiteURl}/${item?.avatar}`}
        alt={item.name}
      />
      <div className="py-2 mt-4 px-4 xl:py-3 xl:px-7 rounded-[10px] bg-primary absolute bottom-[14px] left-7 right-7 text-white">
        <h4 className="text-xl xl:text-[24px] font-semibold capitalize">
          {item.name}
        </h4>
        <p className="text-[12px] font-semibold uppercase mt-1">
          {item.depertment}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
