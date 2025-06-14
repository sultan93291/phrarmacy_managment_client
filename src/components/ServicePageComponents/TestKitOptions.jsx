import { useEffect, useState } from "react";
import TestKitProductCard from "./TestKitProductCard";
import axios from "axios";


function TestKitOptions() {

  const [treatmentMedicine, settreatmentMedicine] = useState([])
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicines`,
    })
      .then(res => {
        settreatmentMedicine(res?.data?.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="mt-14 sm:mt-20">
      <div className="container">
        {/* section title  */}
        <div className="mb-[30px]">
          <h3 className="text-[28px] text-center sm:text-left sm:text-3xl md:text-4xl opacity-1 text-[#0ca6fc] font-bold lg:text--xl">
            Popular Treatments
          </h3>
        </div>
        <div className="product-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {treatmentMedicine.map(item => (
            <TestKitProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestKitOptions;
