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


  

  if (isLoading) return <div>Loading reviews...</div>;
  if (isError) return <div>Error loading reviews: {error?.message}</div>;

  return (
    <div className="bg-white rounded-md px-16 py-10">
      <DashboardTitle title="My Review" />
      <div className="mt-10 space-y-7">
        {allReview?.map((review, idx) => {
          console.log(review);
          return <UserReviewCard review={review} key={idx} />
        })}
        {/* {allReview?.length > 0 ? (
          
        ) : (
          <div>No reviews found.</div>
        )} */}
      </div>
    </div>
  );
};

export default UserReviews;
