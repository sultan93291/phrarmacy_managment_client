/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function TreatmentBox({ item }) {
    const formatUrl = (name) => name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="px-10 pt-5 pb-8 bg-headerBg rounded-[10px]">
      <h3 className="text-[32px] font-semibold text-primary">
        {item.categoryName}
      </h3>
      <div className="flex flex-wrap treatment--row">
        {item.treatments.map((treatment,idx) => (
          <div key={idx} className="treatment-wrap mt-5">
            <Link to={`/service/${formatUrl(treatment.name)}`} className="treatment outline outline-[white] duration-200 ease-in-out bg-white py-3 px-[22px] rounded-[10px] flex items-center gap-5 hover:outline-primary">
              <img src={treatment.image} alt={treatment.name} />
              <p className="text-[24px] font-semibold text-menuLinkColor">{treatment.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreatmentBox;
