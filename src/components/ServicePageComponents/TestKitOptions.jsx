import TestKitProductCard from "./TestKitProductCard";


function TestKitOptions() {
  const treatmentMedicine = [
    {
      id:10,
      imgUrl:"https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
      category:"Medical Supplies",
      title:"Company Vitamin C by Nature’s Bounty for Immune Support",
      price:"40.50",
      rating:4,
    },
    {
      id:11,
      imgUrl:"https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
      category:"Medical Supplies",
      title:"Company Vitamin C by Nature’s Bounty for Immune Support",
      price:"40.50",
      rating:4,
    },
    {
      id:12,
      imgUrl:"https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
      category:"Medical Supplies",
      title:"Company Vitamin C by Nature’s Bounty for Immune Support",
      price:"40.50",
      rating:5,
    },
    {
      id:13,
      imgUrl:"https://i.ibb.co.com/NLZJ9Pf/Product-Image.png",
      category:"Medical Supplies",
      title:"Company Vitamin C by Nature’s Bounty for Immune Support",
      price:"40.50",
      rating:4,
    },

  ]
  return (
    <section className="pt-24">
      <div className="container">
        {/* section title  */}
        <div className="mb-[30px]">
          <h3 className="text--xl">Our Test Kit</h3>
        </div>
        <div className="product-row grid grid-cols-4 gap-5">
           {
            treatmentMedicine.map((item) => (
              <TestKitProductCard key={item.id} item={item} />
            ))
           }
        </div>
      </div>
    </section>
  );
}

export default TestKitOptions;
