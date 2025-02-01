import React, { useState } from "react";
import PaymentCard from "@/Pages/Dashboard/User/PaymentCard";
import { useGetCardDataIntentQuery } from "@/Redux/features/api/apiSlice";
const Receipt = () => {
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
  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();

  console.log(cardData, isLoading, error, isError);
  return (
    <div className=" mx-auto p-0 lg:p-6 ">
      <h2 className="text-center text-3xl lg:text-[64px] mb-12 font-semibold text-primryDark">
        My Health Needs London
      </h2>

      <div className="flex justify-between text-sm lg:text-2xl font-bold font-nunito text-primryDark mt-2">
        <span>Receipt: {receiptData.receiptNumber}</span>
        <span>Date: {receiptData.date}</span>
      </div>

      <hr className="my-4  border-gray-300 border-dashed" />

      <h3 className="text-center text-2xl lg:text-3xl font-bold font-nunito text-primryDark">Summary</h3>

      <div className="mt-4">
        <table className="w-full text-left text-lg lg:text-xl font-semibold font-nunito text-primryDark">
          <thead>
            <tr className="  border-gray-300">
              <th className="py-2  font-medium">Item</th>
              <th className="py-2 font-medium text-center">Qty</th>
              <th className="py-2 font-medium text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {receiptData.items.map((item, index) => (
              <tr key={index} className="">
                <td className="py-2">{item.name}</td>
                <td className="py-2 text-center">{item.qty}</td>
                <td className="py-2 text-right">€{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="my-4 border-gray-300 border-dashed" />

      <div className="flex justify-between text-xl lg:text-2xl font-semibold font-nunito text-primryDark">
        <span>Total amount:</span>
        <span>€{receiptData.totalAmount.toFixed(2)}</span>
      </div>

      <div className=" flex flex-col items-center justify-center gap-4 mx-auto w-full my-12  ">
        <p className="text-xl lg:text-2xl  font-semibold font-nunito text-primryDark">Payment Method</p>
     
       
        <div className="flex sm:flex-row flex-col justify-between gap-4">
    {cardData?.data?.length > 0 &&
      cardData.data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedCard(index)}
           
          >
            <PaymentCard  className={`h-[200px] bg-left 
              ${
                selectedCard === index
                  ? "border-4 border-blue-500 shadow-2xl"
                  : "border-4 border-transparent"
              }`} data={item} />
          </div>
        );
      })}
  </div>
      </div>
      <hr className=" border-gray-300 border-dashed"/>
      <div className="lg:mt-12 mt-6">
        <p className="text-xl lg:text-2xl text-center font-semibold font-nunito text-primryDark">Thank you for Choosing us</p>
      </div>
    </div>
  );
};

export default Receipt;
