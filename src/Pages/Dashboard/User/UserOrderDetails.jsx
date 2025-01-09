import FeedbackModal from '@/components/Modals/FeedbackModal';
import { Modal } from '@/components/Modals/Modal';
import {
  FeedbackSvg,
  PrintSvg,
  RightArrowSvg,
} from '@/components/SvgContainer/SvgContainer';
import { useState } from 'react';

const UserOrderDetails = () => {
  const [open, setOpen] = useState(false);
  const medicineInfo = [
    {
      name: 'Paracetamol',
      quantity: 5,
      price: 900,
      totalPrice: 4500,
    },
    {
      name: 'Ibuprofen',
      quantity: 3,
      price: 700,
      totalPrice: 2100,
    },
  ];
  return (
    <section className="font-nunito text-[#333333]">
      {/* top title */}
      <div className="text-[#052D4C99] flex items-center font-semibold text-lg gap-2">
        <h2>Order History</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Details */}
      <div className="px-12 py-16 bg-white rounded-lg mt-5">
        {/* title */}
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[#052D4C] text-3xl font-semibold">
            Order History
          </h2>

          {/* buttons */}
          <div className="flex items-center gap-5">
            {/* print btn */}
            <button className="px-8 py-3 rounded-full bg-primary text-white flex items-center justify-center gap-2">
              <PrintSvg /> <span>Download Invoice</span>
            </button>

            {/* feedback btn */}
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 rounded-full bg-[#FF963A] text-white flex items-center justify-center gap-2"
            >
              <FeedbackSvg /> <span>Give a Feedback</span>
            </button>
          </div>
        </div>

        {/* description */}
        <div className="mt-12">
          {/* user information */}
          <div className="w-full flex items-start justify-start mb-6 text-start">
            <div className="w-1/2 pr-4 ">
              <h3 className="font-bold text-xl mb-2">Billed To</h3>
              <div className="space-y-2 text-base mt-5">
                <p className="font-bold text-base">Din Djarin</p>
                <p className="font-bold">dindjarin@gmail.com</p>
                <p>9029 Salt Lake, Mandalor</p>
                <p>(+254) 724-453-233</p>
              </div>
            </div>
            <div className="w-1/2 pl-4 ">
              <h3 className="font-bold text-xl mb-2">Shipping To</h3>
              <div className="space-y-2 text-base mt-5">
                <p className="font-bold text-base">Din Djarin</p>
                <p className="font-bold">dindjarin@gmail.com</p>
                <p>9029 Salt Lake, Mandalor</p>
                <p>(+254) 724-453-233</p>
              </div>
            </div>
          </div>

          {/* order information */}
          <div className="mt-12">
            {/* table title */}
            <div className="w-full flex items-center pb-4 border-b border-[#E7EBF4]">
              <div className="w-1/2 text-start">
                <h2 className="font-bold text-lg">Description</h2>
              </div>
              <div className="w-1/2 font-bold text-lg flex items-center justify-between">
                <h2>Quantity</h2>
                <h2 className="mr-8">Price</h2>
                <h2>Amount</h2>
              </div>
            </div>

            {/* table body */}
            {medicineInfo?.map((med) => (
              <div
                key={med.name}
                className="w-full flex items-center py-2 border-b border-[#E7EBF4]"
              >
                <div className="w-1/2 text-start space-y-2">
                  <h2 className="font-bold text-base">{med?.name}</h2>
                  <p className="text-sm">{med?.quantity} Medicine included </p>
                </div>
                <div className="w-1/2 font-bold text-center text-base flex items-center justify-between pl-5">
                  <h2>{med?.quantity}</h2>
                  <h2>$ {med?.price}</h2>
                  <h2>$ {med?.totalPrice}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* doctor notes */}
        <div className="mt-12 w-1/2">
          {/* title */}
          <h2 className="font-bold text-lg">Doctor Notes</h2>
          {/* note */}
          <div className="mt-3">
            <p className="p-5 rounded-xl border border-black/20 text-black/60">
              Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt
              dignissim sed nulla proin dignissim a varius in. Tortor massa
              pharetra orci purus at amet tortor nisl diam. Massa ut ut nibh
              felis fringilla dignissim fusce lobortis. Fringilla arcu commodo
              vel eget ut in.
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
