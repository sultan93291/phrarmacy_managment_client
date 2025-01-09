/* eslint-disable react/prop-types */

import { EmptyStarSvg, StarSvg } from '@/components/SvgContainer/SvgContainer';

const UserReviewCard = ({ review }) => {
  const rating = parseInt(review?.rating);
  const emptyStars = 5 - rating;
  const fullStars = 5 - emptyStars;
  return (
    <div className="flex gap-5 font-nunito">
      <div className="h-4/5 flex gap-10">
        <div className="flex-shrink-0 size-60">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={review?.image}
            alt=""
          />
        </div>
        <div className="space-y-5 w-2/3">
          <h3 className="text-3xl font-semibold">{review?.title}</h3>
          <p>{review?.description}</p>
        </div>
      </div>
      <div className="h-1/5 flex flex-shrink-0 items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(fullStars)].map((_, idx) => (
            <StarSvg key={idx} />
          ))}
          {[...Array(emptyStars)].map((_, idx) => (
            <EmptyStarSvg key={idx} />
          ))}
            </div>
        <p className="text-[#404A60] font-medium">April 25, 2024</p>
      </div>
    </div>
  );
};

export default UserReviewCard;
