function ProcessCard({ item }) {
  console.log(item);
  const siteUrl = import.meta.env.VITE_SITE_URL;

  return (
    <div>
      <img
        className="max-w-[158px] lg:h-[134px] h-[60px] mx-auto"
        src={`${siteUrl}/${item.avatar}`}
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
