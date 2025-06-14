/* eslint-disable react/prop-types */

import { EmptyStarSvg, StarSvg } from "@/components/SvgContainer/SvgContainer";
import { formatDate } from "date-fns";
const SiteURl = import.meta.env.VITE_SITE_URL;
import medicine from "../../../../src/assets/images/medicine_img.png";

const UserReviewCard = ({ review }) => {
  console.log(review.review.rating, "got this review");

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const rating = parseInt(review?.review?.rating);
  const emptyStars = 5 - rating;
  const fullStars = 5 - emptyStars;
  return (
    <div className="flex justify-center sm:justify-between items-center sm:items-start flex-col md:gap-2 shadow-xl rounded-xl p-3 lg:p-6 font-nunito">
    <div className="flex flex-col  items-center w-full gap-3">
  {/* Image Section */}
  <div className="w-full sm:w-52 sm:h-52 xl:w-60 xl:h-60 flex-shrink-0">
    <img
      className="w-full h-full object-cover rounded-lg"
      src={review?.image ? review.image || `${SiteURl}/${item?.icon}` : medicine}
      alt="Review Image"
    />
  </div>

  {/* Text Content */}
  <div className="w-full sm:flex-1 space-y-3  text-center sm:text-left">
    <h3 className="text-xl  xl:text-2xl font-semibold">{`Order id : #${review?.order_uuid}`}</h3>
    <p className="text-sm sm:text-base xl:text-lg">{review?.review?.review}</p>
  </div>
</div>

      <div className="flex flex-col mt-3  gap-2">
        <div className="flex items-center w-[100px] gap-1">
          {[...Array(fullStars)].map((_, idx) => (
            <StarSvg key={idx} />
          ))}
          {[...Array(emptyStars)].map((_, idx) => (
            <EmptyStarSvg key={idx} />
          ))}
        </div>
        <p className="text-[#404A60] text-xs lg:text-sm font-medium">
          {formatDate(review?.review?.created_at)}
        </p>
      </div>
    </div>
  );
};

export default UserReviewCard;
