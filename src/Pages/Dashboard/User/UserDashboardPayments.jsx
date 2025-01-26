import React, { useState } from "react";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import PaymentCard from "./PaymentCard";
import { AddIconSvg } from "@/components/SvgContainer/SvgContainer";
import { Modal } from "@/components/Modals/Modal";
import AddPaymentModal from "@/components/Modals/AddPaymentModal";
import AddPaymentModalWrapper from "@/components/Modals/AddPaymentModal";
import {
  useCreateAddCardIntentMutation,
  useGetCardDataIntentQuery,
} from "@/Redux/features/api/apiSlice";

const UserDashboardPayments = () => {
  const [open, setOpen] = useState(false);
  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();

  console.log(cardData, isLoading, error, isError);

  return (
    <div className="bg-white rounded-md px-16 py-10">
      <DashboardTitle title="My Payments" />

      {/* cards */}
      <div className="mt-10 grid grid-cols-3 gap-12">
        {/* card */}
        {cardData?.data?.map((item, index) => {
          console.log(item);
          return <PaymentCard key={index} data={item} />;
        })}
       

        <div className="h-72 bg-cover bg-center border border-black/20 bg-no-repeat font-dmsans rounded-2xl p-5 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <AddIconSvg />
            </div>
            <p className="font-nunito font-semibold text-lg">
              Add Payment Method
            </p>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal open={open} setOpen={setOpen}>
        <AddPaymentModalWrapper setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default UserDashboardPayments;
