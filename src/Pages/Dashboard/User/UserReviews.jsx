import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import medicine from "@/assets/images/medicine_img.png";
import UserReviewCard from "@/components/Dashboard/User/UserReviewCard";
import { useGetUserReviewIntentQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const allReviews = [
  {
    image: medicine,
    title: "Product Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    date: "April 25, 2024",
    rating: 5,
  },
  {
    image: medicine,
    title: "Product Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    date: "April 25, 2024",
    rating: 4,
  },
  {
    image: medicine,
    title: "Product Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    date: "April 25, 2024",
    rating: 3,
  },
];

const UserReviews = () => {
  const [allReveiwData, setallReveiwData] = useState([]);

  const {
    data: reviewData,
    isLoading,
    isError,
    error,
  } = useGetUserReviewIntentQuery();

  console.log(reviewData, isLoading, error, isError);

  useEffect(() => {
    if (reviewData) {
      setallReveiwData(reviewData.data);
    }

    if (isLoading) {
      return;
    }
  }, []);

  return (
    <div className=" bg-white rounded-md px-16 py-10">
      <DashboardTitle title="My Review" />

      {/* all Reviews */}
      <div className="mt-10 space-y-7">
        {allReviews?.map((review, idx) => (
          <UserReviewCard key={idx} review={review} />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
