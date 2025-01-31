/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreateUserReviewIntentMutation } from "@/Redux/features/api/apiSlice";
import { Rating } from "@smastrom/react-rating";

const FeedbackModal = ({ setOpen }) => {
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  const [createUserReviewIntent, { isLoading, isError, error }] =
    useCreateUserReviewIntentMutation();

  const { id } = useParams();

  const handleRating = value => {
    setRating(value.toString());
  };

  const onSubmit = async data => {
    if (!data.userFeedback || rating === 0) {
      toast.error("Please provide both a rating and a review.");
      return;
    }

    try {
      const response = await createUserReviewIntent({
        rating,
        review: data.userFeedback,
        id,
      }).unwrap();
      console.log("response", response);

      if (response.code === 200) {
        toast.success("Review added successfully!");
        setOpen(false); // Close modal only after success
        navigate("/dashboard/user/user-review");
      } else {
        toast.error(response.message || "Something went wrong");
      }
    } catch (err) {
      setOpen(false);
      toast.error(err?.data?.message);
    }
  };

  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins leading-[1.4] mb-2">
            Give your Feedback
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            <div className="w-full mt-4">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">How are you feeling?</h2>
                <p className="text-lg w-4/5 mx-auto">
                  Your input is valuable in helping us better understand your
                  needs and tailor our service accordingly.
                </p>
              </div>

              {/* Rating */}
              <div className="w-full flex items-center justify-center mt-3 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    className="transition-transform hover:scale-110"
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      size={32}
                      className={`${
                        star <= (hover || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-transparent text-gray-300"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>

              {/* Feedback Form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <textarea
                    {...register("userFeedback", { required: true })}
                    rows={5}
                    name="userFeedback"
                    className="border resize-none border-[#CDBFBF] p-4 focus:outline-none rounded-md w-full"
                    placeholder="Write your feedback here."
                  />

                  {/* Submit Button */}
                  <div className="mt-6 w-full flex items-center justify-center">
                    <button
                      type="submit"
                      className={`bg-[#0CA6FC] text-white font-bold py-3 px-12 rounded-full ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default FeedbackModal;
