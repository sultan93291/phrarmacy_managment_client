function ProcessCard({ item }) {
  console.log(item);

  return (
    <div>
      <img
        className="max-w-[158px] lg:h-[134px] h-[60px] mx-auto"
        src={`https://aamairk.softvencefsd.xyz/${item.avatar}`}
        alt={item.title}
      />
      <div className="text-center mt-6">
        <h4 className="text-[22px] sm:text-[24px] font-semibold text-black">
          {item.title}
        </h4>
        <p className="sm:text-[18px] text-black">{item.sub_title}</p>
      </div>
    </div>
  );
}

export default ProcessCard;
