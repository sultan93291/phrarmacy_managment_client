// import card1 from "@/assets/images/cards/card-1.png";
// import cardTemplate from "@/assets/images/card_template.png";
import cardTemplate from "@/assets/images/card_template2.png";
import { useSelector } from "react-redux";
import DeleteCardModal from "@/components/Modals/DeleteCardModal";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import chep from "@/assets/images/card_chep.png";

const PaymentCard = ({ data,className }) => {
  const loggeInUserData = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );


  return (
    <>
      <div className={cn("h-72 cursor-pointer max-w-[480px] bg-cover w-full  bg-center object-cover  bg-no-repeat font-dmsans rounded-2xl p-4 flex flex-col items-center justify-center", className)} style={{ backgroundImage: `url(${cardTemplate})` }}
      >
        <div className="flex w-full justify-between">
          <img src={chep} alt="" />
          <h2 className="text-white text-xl lg:text-2xl font-bold uppercase font-mono items-center ">
            {" "}
            {data?.brand}{" "}
          </h2>
        </div>
        <div className="mt-10">
          <p className="text-white text-2xl flex gap-2  items-center ">
            **** **** **** <span className="text-xl lg:text-3xl">{data?.last4}</span>
          </p>
        </div>

        <div className="flex mt-5 items-center justify-between w-full text-white">
          <div className="text-sm fo">
            <p className="text-sm">Card Holder Name</p>
            <p className="font-semibold">{loggeInUserData?.name} </p>
          </div>

          <div className="text-sm fo">
            <p className="text-sm">Expiry Date</p>
            <p className="font-semibold">
              {`${data?.exp_month}/
            ${data.exp_year}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
