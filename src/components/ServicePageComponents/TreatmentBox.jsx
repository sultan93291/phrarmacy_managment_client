/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function TreatmentBox({ item }) {
  const SiteURl = import.meta.env.VITE_SITE_URL;

  return (
    <div className="px-10 pt-5 w-full pb-8 bg-headerBg  rounded-[10px]">
      <h3 className="text-2xl sm:text-[32px] font-semibold text-primary">
        {item.name}
      </h3>
      <div className=" w-full treatment--row">
        {item.services.map((treatment, idx) => {
          return (
            <div key={idx} className="mt-5">
              <Link
                to={`/service/${item.id}`}
                className="treatment outline outline-[white] duration-200 ease-in-out bg-white py-3 px-[22px] rounded-[10px] flex items-center gap-5 hover:outline-primary"
              >
                <img
                  src={`${SiteURl}/${treatment.icon}`}
                  className="w-[50px] h-[50px] object-cover "
                  alt={treatment.title}
                />
                <p className="text-lg sm:text-[24px] font-semibold text-menuLinkColor">
                  {treatment.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TreatmentBox;
