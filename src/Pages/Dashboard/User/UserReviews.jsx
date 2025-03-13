import { useEffect, useState } from "react";
import UserReviewCard from "@/components/Dashboard/User/UserReviewCard";
import { useGetUserReviewIntentQuery } from "@/Redux/features/api/apiSlice";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";

const UserReviews = () => {
  const [allReview, setallReview] = useState([]);
  const {
    data: reviewData,
    isLoading,
    isError,
    error,
  } = useGetUserReviewIntentQuery();

  useEffect(() => {
    setallReview(reviewData?.data);
  }, [reviewData]);

  console.log(allReview);

  if (isLoading) return <div>Loading reviews...</div>;

  return (
    <div className="bg-white rounded-md px-5 py-8 sm:px-7 xl:px-16 lg:py-10">
      <DashboardTitle title="My Review" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
        {allReview?.length > 0 ? (
          allReview?.map((review, idx) => (
            <UserReviewCard review={review} key={idx} />
          ))
        ) : (
          <p className="text-black">No review founds</p>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
