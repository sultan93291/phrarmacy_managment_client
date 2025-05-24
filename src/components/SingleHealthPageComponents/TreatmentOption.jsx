import ProductCard from "./ProductCard";

function TreatmentOption({ data }) {

  return (
    <section className="mb-14 sm:pb-[140px]">
      <div className="container">
        {/* section title  */}
        <div className="mb-[30px]">
          <h3 className="xl:text--xl text-primary font-bold md:text-4xl text-2xl sm:text-3xl"> {data?.name} Treatment Options</h3>
        </div>
        <div className="product-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.medicines.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentOption;
