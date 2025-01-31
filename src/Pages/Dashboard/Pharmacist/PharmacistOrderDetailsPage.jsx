import { RightArrowSvg } from "@/components/SvgContainer/SvgContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetPharmaCistSingelOrderDetailsIntentQuery,
  useUpdateMedicineStatusDataIntentMutation,
} from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PharmacistOrderDetailsPage = () => {
  const medicineInfo = [
    {
      name: "Paracetamol",
      quantity: 5,
      price: 900,
      totalPrice: 4500,
    },
    {
      name: "Ibuprofen",
      quantity: 3,
      price: 700,
      totalPrice: 2100,
    },
  ];

  const [
    updateStatus,
    { isLoading: updateLoading, isSuccess, isError, error: updateError },
  ] = useUpdateMedicineStatusDataIntentMutation();

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice?.loggedInUserData
  );

  const [selectedValue, setSelectedValue] = useState("Select");

  const [MedicindeInfo, setMedicindeInfo] = useState();

  const { id } = useParams();

  const { data, error, isLoading } =
    useGetPharmaCistSingelOrderDetailsIntentQuery({ id });

  useEffect(() => {
    setMedicindeInfo(data?.data);
  }, [data]);

  console.log(MedicindeInfo, "medicine info");

  const formatDate = isoDateStr => {
    const date = new Date(isoDateStr);

    return date.toLocaleDateString("en-US", {
      weekday: "long", // Optional: Adds day of the week
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleUpdateStatus = async newStatus => {
    try {
      const response = await updateStatus({ id, status: newStatus }).unwrap();
      if (response.code === 200) {
        toast.success(response?.message);
      }
      // Additional success handling (e.g., display a success message)
    } catch (err) {
      console.error("Update failed:", err);
      // Additional error handling (e.g., display an error message)
      toast.error(
        `Update failed: ${err.message || "An unexpected error occurred"}`
      );
    }
  };

  return (
    <div>
      {/* top title */}
      <div className="text-[#052D4C] flex items-center font-semibold text-lg gap-2">
        <h2>Order Management</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Details */}
      <div className="mt-5 flex gap-10 font-nunito w-full">
        {/* left content */}
        <div className="w-3/5">
          <div className="bg-white rounded-lg px-12 py-16">
            {/* title */}
            <h2 className="text-3xl font-bold text-[#052D4C]">Order Details</h2>

            {/* description */}
            <div className="text-[#052D4C] mt-7 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Order ID :</p>
                <span className="font-medium">
                  {" "}
                  #{MedicindeInfo?.order?.details?.order_id}{" "}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Name :</p>
                <span className="font-medium">
                  {MedicindeInfo?.order?.details?.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Email :</p>
                <span className="font-medium">
                  {MedicindeInfo?.order?.details?.email}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Date of Birth :</p>
                <span className="font-medium">
                  {formatDate(MedicindeInfo?.order?.details?.date_of_birth)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Gender :</p>
                <span className="font-medium">
                  {loggedInUser?.gender
                    ? loggedInUser.gender
                    : "not selected yet"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Phone :</p>
                <span className="font-medium">
                  {" "}
                  {MedicindeInfo?.order?.details?.phone}{" "}
                </span>
              </div>
            </div>

            {/* order information */}
            <div className="mt-12">
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
                {MedicindeInfo?.order?.order_items?.map(med => (
                  <div
                    key={med.medicine}
                    className="w-full flex items-center py-2 border-b border-[#E7EBF4]"
                  >
                    <div className="w-1/2 text-start space-y-2">
                      <h2 className="font-bold text-base">{med?.medicine}</h2>
                      <p className="text-sm">
                        {med?.quantity} Medicine included{" "}
                      </p>
                    </div>
                    <div className="w-1/2 font-bold text-center text-base flex items-center justify-between pl-5">
                      <h2>{med?.quantity}</h2>
                      <h2>$ {med?.unit_price}</h2>
                      <h2>$ {med?.total_price}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Orders */}
          <div className="rounded-lg py-16">
            <h2 className="text-3xl font-bold text-[#052D4C]">Past Order</h2>

            {/* orders */}
            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {MedicindeInfo?.past_orders?.map((item, index) => {
                return (
                  <AccordionItem
                    key={item?.details?.order_id}
                    value={item?.details?.order_id}
                    className="border-b-0 bg-white px-5 rounded-lg"
                  >
                    <AccordionTrigger>
                      {/* Header */}
                      <div className="flex items-center gap-10 text-[#052D4C] ">
                        <h2 className="text-lg font-semibold">Order ID :</h2>
                        <p className="font-medium">
                          #{item?.details?.order_id}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-white rounded-lg py-6">
                        {/* title */}
                        <h2 className="text-2xl font-bold text-[#052D4C]">
                          Order Details
                        </h2>

                        {/* description */}
                        <div className="text-[#052D4C] mt-7 space-y-3">
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">Order ID :</p>
                            <span className="font-medium">
                              #{item?.details?.order_id}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">Name :</p>
                            <span className="font-medium">
                              {item?.details?.name}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">Email :</p>
                            <span className="font-medium">
                              {item?.details?.email}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">
                              Date of Birth :
                            </p>
                            <span className="font-medium">
                              {formatDate(item?.details?.date_of_birth)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">Gender :</p>
                            <span className="font-medium">
                              {loggedInUser.gender
                                ? loggedInUser.gender
                                : "gender not selected"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold ">Phone :</p>
                            <span className="font-medium">
                              {item?.details?.email}
                            </span>
                          </div>
                        </div>

                        {/* order information */}
                        <div className="mt-12">
                          <div className="mt-12">
                            {/* table title */}
                            <div className="w-full flex items-center pb-4 border-b border-[#E7EBF4]">
                              <div className="w-1/2 text-start">
                                <h2 className="font-bold text-lg">
                                  Description
                                </h2>
                              </div>
                              <div className="w-1/2 font-bold text-lg flex items-center justify-between">
                                <h2>Quantity</h2>
                                <h2 className="mr-8">Price</h2>
                                <h2>Amount</h2>
                              </div>
                            </div>

                            {/* table body */}
                            {item?.order_items?.map(med => (
                              <div
                                key={med.medicine}
                                className="w-full flex items-center py-2 border-b border-[#E7EBF4]"
                              >
                                <div className="w-1/2 text-start space-y-2">
                                  <h2 className="font-bold text-base">
                                    {med?.medicine}
                                  </h2>
                                  <p className="text-sm">
                                    {med?.quantity} Medicine included{" "}
                                  </p>
                                </div>
                                <div className="w-1/2 font-bold text-center text-base flex items-center justify-between pl-5">
                                  <h2>{med?.quantity}</h2>
                                  <h2>$ {med?.unit_price}</h2>
                                  <h2>$ {med?.total_price}</h2>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        {/* right content */}
        <div className="px-12 py-16 w-2/5 bg-white rounded-lg h-fit">
          <div>
            {/* title */}
            <h3 className="text-xl font-bold text-[#052D4C] text-center">
              Manage the order
            </h3>

            {/* filter */}
            <div className="mt-6 flex items-center gap-10 justify-center">
              <div>
                <Select
                  onValueChange={value => {
                    setSelectedValue(value);
                    handleUpdateStatus(value);
                  }}
                >
                  <SelectTrigger className="w-40 border font-semibold text-base h-12 rounded-xl px-8 font-nunito">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Select" disabled>
                      Select
                    </SelectItem>
                    <SelectItem value="processing">processing</SelectItem>
                    <SelectItem value="shipped">shipped</SelectItem>
                    <SelectItem value="delivered">delivered</SelectItem>
                    <SelectItem value="cancelled">cancelled</SelectItem>
                    <SelectItem value="failed">failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistOrderDetailsPage;
