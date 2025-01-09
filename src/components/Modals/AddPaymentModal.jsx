/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const AddPaymentModal = ({ setOpen }) => {
  const { register, handleSubmit } = useForm();

  // functions:
  const onSubmit = (data) => {
    console.log(data);
    toast.success('Your payment added successfully');
    setOpen(false);
  };
  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins leading-[1.4] mb-2">
            Add New Payment
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full mt-4">
              {/* Message */}
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  className="mt-5 space-y-5"
                >
                  <div className="space-y-2">
                    <label className="#0A0D13 font-medium" htmlFor="card-type">
                      Select Card Type
                    </label>

                    <Select>
                      <SelectTrigger className="w-full border h-12">
                        <SelectValue placeholder="Debit Card" />
                      </SelectTrigger>
                      <SelectContent className={'font-medium'}>
                        <SelectItem value="Master Card">Master Card</SelectItem>
                        <SelectItem value="Credit Card">Credit Card</SelectItem>
                        <SelectItem value="Debit Card">Debit Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 ">
                    <label className="#0A0D13 font-medium" htmlFor="cardNumber">
                      Card Number
                    </label>

                    <div className="w-full">
                      <input
                        {...register('cardNumber', { required: true })}
                        className="text w-full border rounded-md px-5 focus:outline-none py-3"
                        placeholder="1234  5678  9101  1121"
                        type="number"
                        name="cardNumber"
                        id="cardNumber"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      className="#0A0D13 font-medium"
                      htmlFor="expirationDate"
                    >
                      Expiration Date
                    </label>

                    <div className="w-full">
                      <input
                       {...register('expirationDate', { required: true })}
                        className="text w-full border rounded-md px-5 focus:outline-none py-3"
                        placeholder="1234  5678  9101  1121"
                        type="number"
                        name="expirationDate"
                        id="expirationDate"
                      />
                    </div>
                  </div>
                  {/* Submit button */}
                  <div className="mt-6 w-full">
                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="bg-[#0CA6FC] text-base text-white font-bold py-3 px-12 rounded-full"
                    >
                      Save Card
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

export default AddPaymentModal;
