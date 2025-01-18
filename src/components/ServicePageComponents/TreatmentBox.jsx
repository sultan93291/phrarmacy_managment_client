/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function TreatmentBox({ item }) {
  const SiteURl = import.meta.env.VITE_SITE_URL;

  return (
    <div className="px-10 pt-5 pb-8 bg-headerBg rounded-[10px]">
      <h3 className="text-[32px] font-semibold text-primary">{item.name}</h3>
      <div className="flex flex-wrap treatment--row">
        {item.services.map((treatment, idx) => (
          <div key={idx} className="treatment-wrap mt-5">
            <Link
              to={`/service/${treatment.id}`}
              className="treatment outline outline-[white] duration-200 ease-in-out bg-white py-3 px-[22px] rounded-[10px] flex items-center gap-5 hover:outline-primary"
            >
              <img src={`${SiteURl}/${treatment.icon}`} alt={treatment.title} />
              <p className="text-[24px] font-semibold text-menuLinkColor">
                {treatment.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreatmentBox;
