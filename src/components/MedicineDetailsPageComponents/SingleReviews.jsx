import { Rating, Star } from "@smastrom/react-rating";

function SingleReviews({ data }) {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC700",
    inactiveFillColor: "",
    itemStrokeWidth: 2,
    activeStrokeColor: "#FFC700",
    inactiveStrokeColor: "#222E48",
  };

  console.log(data, "this is the single revie data");
  const SiteURl = import.meta.env.VITE_SITE_URL;

  return (
    <div
      data-aos="zoom-up"
      data-aos-duration="2000"
      className="bg-[#EFF8FF] rounded-xl border p-6"
    >
      <div className="flex items-center gap-8 pb-4 border-b border-[#C1C4CC] border-dashed">
        <h4 className="text-[#222E48] ">Mar 03, 2024</h4>
        <h4 className="text-[#222E48]">09:01 am</h4>
      </div>
      <div className="py-6 flex flex-col gap-2 border-b border-dashed border-[#C1C4CC]">
        <Rating
          className="h-6 gap-1 flex"
          style={{ maxWidth: 120 }}
          value={Math.round(data.rating)}
          readOnly={true}
          itemStyles={myStyles}
        />
        <p className="text-[#222E48]">{data.review}</p>
      </div>
      <div className="flex items-center gap-4 py-6 border-b border-dashed border-[#C1C4CC]">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover "
            src={`${SiteURl}/${data?.user?.avatar}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#222E48] font-semibold "> {data.user.name} </h3>
          <h4 className="text-[#222E48] text-sm">
            {" "}
            {data.user.sub_title
              ? data.user.sub_title
              : "Software Developer"}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SingleReviews;
