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
    <div className="flex justify-center sm:justify-start items-center sm:items-start flex-col md:flex-row gap-5 sm:gap-10  font-nunito">
      <div className="h-4/5 flex flex-col md:flex-row gap-7 xl:gap-10  ">
        <div className="sm:flex-shrink-0 sm:size-52 xl:size-60">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={review?.image ? review.image : medicine}
            alt=""
          />
        </div>
        <div className="space-y-5 text-center sm:text-left md:w-2/3">
          <h3 className="text-xl xl:text-3xl font-semibold">{`Order id : #${review?.order_uuid}`}</h3>
          <p>{review?.review?.review}</p>
        </div>
      </div>
      <div className="h-1/5 flex flex-col md:flex-row flex-shrink-0 items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(fullStars)].map((_, idx) => (
            <StarSvg key={idx} />
          ))}
          {[...Array(emptyStars)].map((_, idx) => (
            <EmptyStarSvg key={idx} />
          ))}
        </div>
        <p className="text-[#404A60] font-medium">
          {formatDate(review?.review?.created_at)}
        </p>
      </div>
    </div>
  );
};

export default UserReviewCard;
