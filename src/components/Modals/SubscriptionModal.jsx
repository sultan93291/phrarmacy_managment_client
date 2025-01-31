import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  useDeleteCardIntentMutation,
  useGetSubsCreptionDetailsIntentQuery,
} from "@/Redux/features/api/apiSlice";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Car } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SubscriptionModal = ({ setOpen, id }) => {
  const [allSubscreptionData, setallSubscreptionData] = useState([]);

  const [deleteSubscription] = useDeleteCardIntentMutation();

  const { data, isLoading, isError, isSuccess } =
    useGetSubsCreptionDetailsIntentQuery();

  const formatDate = dateString => {
    const date = new Date(dateString);

    // Get the month (in 3-letter format) and year
    const month = date.toLocaleString("en-US", { month: "short" }); // "Dec"
    const year = date.getFullYear(); // "2024"

    return `${month} ${year}`;
  };

  // Safely log and check if data is available before accessing it
  useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      const subscription = data.data.find(
        sub => `#${sub.metadata.order_id}` === id
      );
      // Find the subscription based on the id
      if (subscription) {
        const formattedData = {
          cardBrand: subscription.payment_method.card_brand,
          card_last4: subscription.payment_method.card_last4,
          current_period_start: formatDate(subscription.current_period_start),
          current_period_end: formatDate(subscription.current_period_end), // Fixed the typo here
          currentPlan: subscription.plan.amount.toFixed(2),
          id: subscription?.id,
        };
        setallSubscreptionData(formattedData); // Set the formatted data
      }
    }
  }, [data, id]); // Make sure to watch `id` for changes

  console.log(allSubscreptionData, "all subscription data from modal");

  const handleSubscriptionDelete = async id => {
    try {
      console.log(id, "this id is gonna be deleted");

      // Trigger the mutation
      const response = await deleteSubscription(id);

      // Handle success
      if (response?.data) {
        console.log(response);
        toast.success("Subscription deleted successfully!");
      }
    } catch (err) {
      // Handle error
      toast.error("Failed to delete subscription!");
    }
  };

  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins "></DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full mt-4">
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Your current plan</p>
                <p className="text-lg  text-[#000000CC]">
                  Your active plan is €{allSubscreptionData.currentPlan}
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Billing Cycle</p>
                <p className="text-lg  text-[#000000CC]">
                  You will be charged €{allSubscreptionData.currentPlan}{" "}
                  {allSubscreptionData.current_period_end}
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Payment Information</p>
                <p className="text-lg  text-[#000000CC]">
                  You will be charged €{allSubscreptionData.currentPlan}{" "}
                  {allSubscreptionData.current_period_end}
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Card Information</p>
                <p className="text-lg  text-[#000000CC]">
                  {allSubscreptionData.cardBrand} ending with{" "}
                  {allSubscreptionData.card_last4}
                </p>
              </div>
            </div>
            {/* Cancel Btn */}
            <div className="w-full flex items-center justify-center mt-10">
              <button
                onClick={() => {
                  setOpen(false),
                    handleSubscriptionDelete(allSubscreptionData?.id);
                }}
                className="py-2.5 px-8 border font-semibold text-[#EA4335] border-[#EA4335] rounded-lg"
              >
                Cancel Subscription
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default SubscriptionModal;
