import React, { useState } from "react";
import PaymentCard from "@/Pages/Dashboard/User/PaymentCard";
import { useGetCardDataIntentQuery } from "@/Redux/features/api/apiSlice";
import { Link } from "react-router-dom";

const Receipt = ({ OrderData }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const receiptData = {
    receiptNumber: "#343043432",
    date: "20/11/2024",
    items: [
      { name: "Item name", qty: 2, price: 30.0 },
      { name: "Item name", qty: 1, price: 30.0 },
      { name: "Item name", qty: 3, price: 30.0 },
    ],
    totalAmount: 30.0,
  };

  console.log(OrderData, "this is the order data");

  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();


  return (
    <>
      <div className="mx-auto mb-4  pt-10 lg:pt-0 lg:p-6">
        <h2 className="text-center text-3xl lg:text-[64px] mb-12 font-semibold text-primryDark">
          My Health Needs London
        </h2>

        <div className="flex justify-between text-sm lg:text-2xl font-bold font-nunito text-primryDark mt-2">
          <span>Receipt: #{OrderData?.uuid}</span>
          <span>Date: {OrderData?.order_date}</span>
        </div>

        <hr className="my-4 border-gray-300 border-dashed" />

        <h3 className="text-center text-2xl lg:text-3xl font-bold font-nunito text-primryDark">
          Summary
        </h3>
        <div className="mt-8 ">
          <div className="w-full grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-xl font-semibold font-nunito text-primryDark">
            {/* Header */}
            <div className="py-2 font-medium text-xl">Item</div>
            <div className="py-2 font-medium text-center text-xl">Qty</div>
            <div className="py-2 font-medium text-right text-xl">Price</div>

            {/* Body - Dynamically Rendered */}
            {OrderData?.order_items?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="py-2 border-t border-gray-300">
                  {item.title}
                </div>
                <div className="py-2 border-t border-gray-300 text-center">
                  {item.quantity}
                </div>
                <div className="py-2 border-t border-gray-300 text-right">
                  £ {item.total_price}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <hr className="my-4 border-gray-300 border-dashed" />
        <div className="flex justify-between text-[13px] lg:text-[17px]  font-semibold font-nunito text-primryDark">
          <span>Sub total amount:</span>
          <span>£ {OrderData?.sub_total}</span>
        </div>
        <hr className="my-4 border-gray-300 border-dashed" />
        {OrderData?.discount && (
          <>
            <div className="flex justify-between text-[13px] lg:text-[17px] font-semibold font-nunito text-primryDark">
              <span>Discount amount:</span>
              <span>£ {OrderData?.discount}</span>
            </div>
          </>
        )}
        <hr className="my-4 border-gray-300 border-dashed" />
        <div className="flex justify-between text-[13px] lg:text-[17px] font-semibold font-nunito text-primryDark">
          <span>Sub total amount:</span>
          <span>£ {OrderData?.sub_total}</span>
        </div>
        <hr className="my-4 border-gray-300 border-dashed" />
        <div className="flex justify-between text-[13px] lg:text-[17px] font-semibold font-nunito text-primryDark">
          <span>Shipping charge:</span>
          <span>£ {OrderData?.shipping_charge}</span>
        </div>
        <hr className="my-4 border-gray-300 border-dashed" />
        <div className="flex justify-between items-center  lg:text-2xl font-semibold font-nunito text-primryDark">
          <span>Total amount:</span>
          <span>£ {OrderData?.total_price}</span>
        </div>
        <hr className="border-gray-300 border-dashed" />
        <div className="lg:mt-12 flex flex-col gap-y-6 mt-6">
          <p className="text-xl lg:text-2xl text-center font-semibold font-nunito text-primryDark">
            Thank you for Choosing us
          </p>
          <p className="text-sm text-center font-semibold font-nunito text-primryDark">
            Note: Your total amount includes VAT, tax, and shipping charges.
          </p>
        </div>
      </div>
      <Link
        to={"/"}
        className=" pt-6 underline text-sm lg:text-2xl font-bold font-nunito text-primryDark "
      >
        Back to Home
      </Link>
    </>
  );
};

export default Receipt;
