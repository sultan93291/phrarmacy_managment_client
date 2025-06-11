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
      <div className="text-[#052D4C] flex items-center font-semibold lg:text-lg gap-2">
        <h2>Order Management</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Details */}
      <div className="mt-5 flex flex-col lg:flex-row gap-5 xl:gap-10 font-nunito w-full">
        {/* left content */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <div className="bg-white rounded-lg px-3 sm:px-5 xl:px-12 py-10 xl:py-16">
            {/* Title */}
            <h2 className="text-xl lg:text-3xl font-bold text-[#052D4C]">
              Order Details
            </h2>

            {/* Order Details Section */}
            <div className="text-[#052D4C] mt-7 space-y-3">
              {[
                {
                  label: "Order ID",
                  value: `#${MedicindeInfo?.order?.details?.order_id}`,
                },
                { label: "Name", value: MedicindeInfo?.order?.details?.name },
                { label: "Email", value: MedicindeInfo?.order?.details?.email },
                {
                  label: "Date of Birth",
                  value: formatDate(
                    MedicindeInfo?.order?.details?.date_of_birth
                  ),
                },
                {
                  label: "Gender",
                  value: loggedInUser?.gender
                    ? loggedInUser.gender
                    : "Not selected yet",
                },
                { label: "Phone", value: MedicindeInfo?.order?.details?.phone },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-base lg:text-lg font-bold">
                    {item.label}:
                  </p>
                  <span className="font-medium text-gray-700">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Items Section */}
            <div className="mt-12 w-full">
              {/* Table Title (Hidden on Mobile, Visible on `sm:` and Above) */}
              <div className="hidden sm:grid grid-cols-4 gap-4 pb-4 border-b border-[#E7EBF4] text-lg font-bold">
                <h2 className="text-start">Description</h2>
                <h2 className="text-center">Quantity</h2>
                <h2 className="text-center">Price</h2>
                <h2 className="text-right">Amount</h2>
              </div>

              {/* Table Body */}
              {MedicindeInfo?.order?.order_items?.map(med => (
                <div
                  key={med.medicine}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b border-[#E7EBF4] text-base"
                >
                  {/* Description */}
                  <div className="text-start space-y-1">
                    <h2 className="font-bold">{med?.medicine}</h2>
                    <p className="text-sm text-gray-500">
                      {med?.quantity} Medicine included
                    </p>
                  </div>

                  {/* Mobile-Friendly Layout (Stacked on Small Screens) */}
                  <div className="flex sm:hidden justify-between text-sm font-medium">
                    <span>Quantity:</span> <span>{med?.quantity}</span>
                  </div>
                  <div className="flex sm:hidden justify-between text-sm font-medium">
                    <span>Price:</span> <span>£ {med?.unit_price}</span>
                  </div>
                  <div className="flex sm:hidden justify-between text-sm font-medium">
                    <span>Amount:</span> <span>£ {med?.total_price}</span>
                  </div>

                  {/* Desktop View (Only Shown on `sm:` and Larger) */}
                  <h2 className="hidden sm:block text-center">
                    {med?.quantity}
                  </h2>
                  <h2 className="hidden sm:block text-center">
                    £ {med?.unit_price}
                  </h2>
                  <h2 className="hidden sm:block text-right">
                    £ {med?.total_price}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Past Orders */}
          <div className="rounded-lg py-16  sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#052D4C]">
              Past Orders
            </h2>

            {/* Orders */}
            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {MedicindeInfo?.past_orders?.map(item => (
                <AccordionItem
                  key={item?.details?.order_id}
                  value={item?.details?.order_id}
                  className="border-b-0 bg-white px-3 sm:px-5 xl:px-12 rounded-lg"
                >
                  <AccordionTrigger>
                    {/* Header */}
                    <div className="flex font-extrabold  sm:items-center gap-3  text-[#052D4C]">
                      <h2 className="text-base sm:text-lg ">Order ID :</h2>
                      <p className="text-sm sm:text-base">
                        #{item?.details?.order_id}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-white rounded-lg py-6 px-4">
                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-[#052D4C]">
                        Order Details
                      </h2>

                      {/* Description */}
                      <div className="text-[#052D4C] mt-5 space-y-3">
                        {[
                          {
                            label: "Order ID",
                            value: `#${item?.details?.order_id}`,
                          },
                          { label: "Name", value: item?.details?.name },
                          { label: "Email", value: item?.details?.email },
                          {
                            label: "Date of Birth",
                            value: formatDate(item?.details?.date_of_birth),
                          },
                          {
                            label: "Gender",
                            value:
                              loggedInUser?.gender || "Gender not selected",
                          },
                          { label: "Phone", value: item?.details?.phone },
                        ].map((info, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                          >
                            <p className="text-sm sm:text-lg font-bold">
                              {info.label}:
                            </p>
                            <span className="font-medium text-gray-700">
                              {info.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Order Items */}
                      <div className="mt-10 w-full">
                        {/* Table Header (Hidden on Mobile) */}
                        <div className="hidden sm:grid grid-cols-4 gap-4 pb-4 border-b border-[#E7EBF4] text-lg font-bold">
                          <h2 className="text-start">Description</h2>
                          <h2 className="text-center">Quantity</h2>
                          <h2 className="text-center">Price</h2>
                          <h2 className="text-right">Amount</h2>
                        </div>

                        {/* Table Body */}
                        {item?.order_items?.map(med => (
                          <div
                            key={med.medicine}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b border-[#E7EBF4] text-base"
                          >
                            {/* Description */}
                            <div className="text-start space-y-1">
                              <h2 className="font-bold">{med?.medicine}</h2>
                              <p className="text-sm text-gray-500">
                                {med?.quantity} Medicine included
                              </p>
                            </div>

                            {/* Mobile-Friendly Layout (Stacked) */}
                            <div className="flex sm:hidden justify-between text-sm font-medium">
                              <span>Quantity:</span>{" "}
                              <span>{med?.quantity}</span>
                            </div>
                            <div className="flex sm:hidden justify-between text-sm font-medium">
                              <span>Price:</span>{" "}
                              <span>£ {med?.unit_price}</span>
                            </div>
                            <div className="flex sm:hidden justify-between text-sm font-medium">
                              <span>Amount:</span>{" "}
                              <span>£ {med?.total_price}</span>
                            </div>

                            {/* Desktop View */}
                            <h2 className="hidden sm:block font-bold text-center">
                              {med?.quantity}
                            </h2>
                            <h2 className="hidden sm:block font-bold text-center">
                              £ {med?.unit_price}
                            </h2>
                            <h2 className="hidden sm:block font-bold text-right">
                              £ {med?.total_price}
                            </h2>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* right content */}
        <div className="px-6 order-1 lg:order-2 sm:px-12 py-4 lg:py-12  w-full lg:w-2/5 bg-white rounded-lg h-fit">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#052D4C] text-center">
            Manage the order
          </h3>

          {/* Filter */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 justify-center">
            <Select
              onValueChange={value => {
                setSelectedValue(value);
                handleUpdateStatus(value);
              }}
            >
              <SelectTrigger className="w-full  border font-semibold text-base h-12 rounded-xl font-nunito">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Select" disabled>
                  Select
                </SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistOrderDetailsPage;
