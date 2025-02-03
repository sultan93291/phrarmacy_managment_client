import FeedbackModal from "@/components/Modals/FeedbackModal";
import { Modal } from "@/components/Modals/Modal";
import {
  FeedbackSvg,
  PrintSvg,
  RightArrowSvg,
} from "@/components/SvgContainer/SvgContainer";
import { useGetUserOrderDetailsIntentQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserOrderDetails = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [billingAdress, setBillingAddress] = useState(null);
  const [allMedicne, setAllMedicine] = useState([]);

  const { data, error, isLoading } = useGetUserOrderDetailsIntentQuery({ id });

  useEffect(() => {
    if (data?.data) {
      setBillingAddress(data.data.billing_address);
      setAllMedicine(data.data.order_items);
    }
  }, [data]);

  if (isLoading) return <p>Loading order details...</p>;
  if (error) return <p>Error fetching order details.</p>;

  return (
    <section className="font-nunito text-[#333333]">
      {/* Top title */}
      <div className="text-[#052D4C99] flex items-center font-semibold text-lg gap-2">
        <h2>Order History</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Order Details */}
      <div className="px-3 sm:px-5 xl:px-12 py-10 lg:py-16 bg-white rounded-lg mt-5">
        {/* Title and Buttons */}
        <div className="w-full flex-col md:flex-row gap-5 flex items-center justify-between">
          <h2 className="text-[#052D4C] text-2xl sm:text-3xl font-semibold">
            Order History
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {/* Print Button */}
            <button className="px-5 sm:px-8 py-2 text-sm sm:text-base sm:py-3 rounded-full bg-primary text-white flex items-center justify-center gap-2">
              <PrintSvg /> <span>Download Invoice</span>
            </button>

            {/* Feedback Button */}
            <button
              onClick={() => setOpen(true)}
              className="px-5 sm:px-8 py-2 text-sm sm:text-base sm:py-3 rounded-full bg-[#FF963A] text-white flex items-center justify-center gap-2"
            >
              <FeedbackSvg /> <span>Give a Feedback</span>
            </button>
          </div>
        </div>

        {/* Order Description */}
        <div className="mt-12">
          {/* User Information */}
          <div className="w-full flex flex-col gap-10 sm:flex-row items-start justify-start mb-6 text-start">
            <div className="w-1/2 sm:pr-4">
              <h3 className="font-bold text-xl sm:mb-2">Billed To</h3>
              <div className="space-y-2 text-base mt-3 sm:mt-5">
                <p className="font-bold text-base">{billingAdress?.name}</p>
                <p className="font-bold">{billingAdress?.email}</p>
                <p>
                  {billingAdress?.address}, {billingAdress?.city}
                </p>
                <p>{billingAdress?.contact}</p>
              </div>
            </div>
            <div className="w-1/2 sm:pl-4">
              <h3 className="font-bold text-xl sm:mb-2">Shipping To</h3>
              <div className="space-y-2 text-base mt-3 sm:mt-5">
                <p className="font-bold text-base">{billingAdress?.name}</p>
                <p className="font-bold">{billingAdress?.email}</p>
                <p>
                  {billingAdress?.address}, {billingAdress?.city}
                </p>
                <p>{billingAdress?.contact}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mt-12 overflow-x-auto">
  {/* Table Header */}
  <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 pb-4 border-b border-[#E7EBF4] text-xs sm:text-lg font-bold text-[#052D4C]">
    <h2 className="text-left">Description</h2>
    <h2 className="text-center">Qty</h2>
    <h2 className="text-center">Price</h2>
    <h2 className="text-center ">Amount</h2> 
  </div>

  {/* Table Body */}
  {allMedicne?.map((med) => (
    <div
      key={med.name}
      className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 py-2 border-b border-[#E7EBF4] text-xs sm:text-base items-center"
    >
      <div className="text-left">
        <h2 className="font-bold">{med?.medicine}</h2>
        <p className="text-[10px] sm:text-sm text-gray-500">
          {med?.quantity} Medicine included
        </p>
      </div>
      <h2 className="text-center">{med?.quantity}</h2>
      <h2 className="text-center">$ {med?.unit_price}</h2>
      <h2 className="text-center ">$ {med?.total_price}</h2>
    </div>
  ))}
</div>

        </div>

        {/* Doctor Notes */}
        <div className="mt-12 sm:w-1/2">
          <h2 className="font-bold text-lg">Doctor Notes</h2>
          <div className="mt-3">
            <p className="sm:p-5 px-5 py-2 rounded-xl border border-black/20 text-black/60">
              {data?.data?.note || "No notes available"}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <FeedbackModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default UserOrderDetails;
