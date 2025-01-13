

function ProcessCard({ item }) {
  console.log(item);
  
  return (
    <div>
      <img
        className="w-[158px] h-[134px] mx-auto"
        src={`https://aamairk.softvencefsd.xyz/${item.avatar}`}
        alt={item.title}
      />
      <div className="text-center mt-6">
        <h4 className="text-[24px] font-semibold text-black">{item.title}</h4>
        <p className="text-[18px] text-black">{item.sub_title}</p>
      </div>
    </div>
  );
}

export default ProcessCard