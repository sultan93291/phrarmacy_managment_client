/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
const SubscriptionModal = ({ setOpen }) => {
  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins "></DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full mt-4">
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Your current plan</p>
                <p className="text-lg  text-[#000000CC]">
                  Your active plan is €340
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Billing Cycle</p>
                <p className="text-lg  text-[#000000CC]">
                  You will be charged €340 on Dec 2024
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Payment Information</p>
                <p className="text-lg  text-[#000000CC]">
                  You will be charged €340 on Dec 2024
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold py-4 border-b borer-[#000000CC]">
                <p className="text-[#00000066]">Card Information</p>
                <p className="text-lg  text-[#000000CC]">
                  Visa ending with 2891
                </p>
              </div>
            </div>
            {/* Cancel Btn */}
            <div className="w-full flex items-center justify-center mt-10">
              <button
                onClick={() => setOpen(false)}
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
