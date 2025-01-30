import { useEffect, useState } from "react";
import TestKitProductCard from "./TestKitProductCard";
import axios from "axios";


function TestKitOptions() {
  // const treatmentMedicine = [
  //   {
  //     id: 10,
  //     imgUrl: "https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
  //     category: "Medical Supplies",
  //     title: "Company Vitamin C by Nature’s Bounty for Immune Support",
  //     price: "40.50",
  //     rating: 4,
  //   },
  //   {
  //     id: 11,
  //     imgUrl: "https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
  //     category: "Medical Supplies",
  //     title: "Company Vitamin C by Nature’s Bounty for Immune Support",
  //     price: "40.50",
  //     rating: 4,
  //   },
  //   {
  //     id: 12,
  //     imgUrl: "https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
  //     category: "Medical Supplies",
  //     title: "Company Vitamin C by Nature’s Bounty for Immune Support",
  //     price: "40.50",
  //     rating: 5,
  //   },
  //   {
  //     id: 13,
  //     imgUrl: "https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
  //     category: "Medical Supplies",
  //     title: "Company Vitamin C by Nature’s Bounty for Immune Support",
  //     price: "40.50",
  //     rating: 4,
  //   },
  // ];

  const [treatmentMedicine, settreatmentMedicine] = useState([])
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicines`,
    })
      .then(res => {
        console.log('test kti', res.data.data);
        settreatmentMedicine(res?.data?.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="mt-20">
      <div className="container">
        {/* section title  */}
        <div className="mb-[30px]">
          <h3 className="text-2xl text-center sm:text-left sm:text-3xl md:text-4xl opacity-1 text-[#0ca6fc] font-bold lg:text--xl">Our Test Kit</h3>
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
