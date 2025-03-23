import { useEffect, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateAddCardIntentMutation } from "@/Redux/features/api/apiSlice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const AddPaymentModal = ({ setOpen }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [createAddCardIntent, { isLoading, isError, isSuccess }] =
    useCreateAddCardIntentMutation();

  console.log(isLoading, isError, isSuccess);

  const onSubmit = async data => {
    setLoading(true);
    try {
      // Get payment method from Stripe
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      // Handle paymentMethod.id here (e.g., send to your server)

      if (paymentMethod.id) {
        try {
          // Call the mutation to add the payment method to the customer
          const response = await createAddCardIntent(paymentMethod.id).unwrap();
          console.log(response);

          if (response.code === 200) {
            toast.success("Card added successfully");
            setLoading(false)
          }
        } catch (error) {
          console.error("Error adding card:", error);
        }
      }

      setOpen(false);
    } catch (err) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins leading-[1.4] mb-2">
            Add New Payment
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            <div className="w-full mt-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 space-y-5"
              >
                <div className="space-y-2">
                  <label
                    className="text-[#0A0D13] font-medium"
                    htmlFor="card-type"
                  >
                    Select Card Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full border h-12">
                      <SelectValue placeholder="Debit Card" />
                    </SelectTrigger>
                    <SelectContent className="font-medium">
                      <SelectItem value="Master Card">Master Card</SelectItem>
                      <SelectItem value="Credit Card">Credit Card</SelectItem>
                      <SelectItem value="Debit Card">Debit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* CardElement for the card number, expiration date, and CVC */}
                <div className="space-y-2">
                  <label
                    className="text-[#0A0D13] font-medium"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <CardElement
                    id="cardNumber"
                    className="text w-full border rounded-md px-5 focus:outline-none py-3"
                  />
                </div>


                <div className="mt-6 w-full">
                  <button
                    type="submit"
                    className="bg-[#0CA6FC] text-base text-white font-bold py-3 px-12 rounded-full"
                    disabled={!stripe || loading}
                  >
                    {loading ? "Processing..." : "Save Card"}
                  </button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

const AddPaymentModalWrapper = ({ setOpen }) => {
  return (
    <Elements stripe={stripePromise}>
      <AddPaymentModal setOpen={setOpen} />
    </Elements>
  );
};

export default AddPaymentModalWrapper;
