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
import DeleteCardModal from "@/components/Modals/DeleteCardModal";

const UserDashboardPayments = () => {
  const [open, setOpen] = useState(false);
  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();

  console.log(cardData, isLoading, error, isError);

  const [demoModalOpen, setdemoModalOpen] = useState(false);
  const [modalData, setmodalData] = useState();

  // handle close function for closing the button
  const handleModalClose = () => {
    setdemoModalOpen(false);
  };


  return (
    <>
      <DeleteCardModal
        isOpen={demoModalOpen}
        setIsOpen={setdemoModalOpen}
        onClose={handleModalClose}
        modalData={modalData}
      />
      <div className="bg-white rounded-md px-5 sm:px-7 xl:px-16 py-10">
        <DashboardTitle title="My Payments" />

        {/* cards */}
        <div className="mt-10 grid md:grid-cols-2 2xl:grid-cols-3 gap-5 2xl:gap-8">
          {cardData?.data?.length > 0 &&
            cardData.data.map((item, index) => {
              console.log(item);
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setdemoModalOpen(true);
                    setmodalData(item);
                  }}
                >
                  <PaymentCard data={item} />
                </div>
              );
            })}

          <div className="h-56 sm:h-72 bg-cover bg-center border border-black/20 bg-no-repeat font-dmsans rounded-2xl sm:px-20 p-5 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div onClick={() => setOpen(true)} className="cursor-pointer">
                <AddIconSvg />
              </div>
              <p className="font-nunito font-semibold text-center sm:text-lg">
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
    </>
  );
};

export default UserDashboardPayments;
