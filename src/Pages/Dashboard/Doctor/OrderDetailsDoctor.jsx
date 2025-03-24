import MeetingScheduleModal from "@/components/Modals/MeetingScheduleModal";
import { Modal } from "@/components/Modals/Modal";
import {
  MeetingSvg,
  RightArrowSvg,
} from "@/components/SvgContainer/SvgContainer";
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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const OrderDetailsDoctor = () => {
  const [open, setOpen] = useState(false);

  const [
    updateStatus,
    { isLoading: updateLoading, isSuccess, isError, error: updateError },
  ] = useUpdateMedicineStatusDataIntentMutation();

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice?.loggedInUserData
  );

  const [Note, setNote] = useState("");

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

  const handleUpdateStatus = async e => {
    e.preventDefault();
    try {
      const response = await updateStatus({
        id,
        status: selectedValue,
        note: Note,
      }).unwrap();
      if (response.code === 200) {
        toast.success(response?.message);
      }
      console.log(response);
    } catch (err) {
      console.error("Update failed:", err);
      toast.error(
        `Update failed: ${err.message || "An unexpected error occurred"}`
      );
    }
  };

  return (
    <div>

      {/* Details */}
      <div className="mt-5 flex flex-col lg:flex-row gap-10 font-nunito w-full">
        {/* left content */}
        <div className="w-full order-2 lg:order-1 lg:w-3/5">
          <div className="bg-white rounded-lg px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 w-full">
            {/* title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#052D4C] text-center sm:text-left">
              Order Details
            </h2>

            {/* description */}
            <div className="text-[#052D4C] mt-5 sm:mt-7 space-y-4">
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
                  value: loggedInUser?.gender || "Not selected yet",
                },
                { label: "Phone", value: MedicindeInfo?.order?.details?.phone },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between"
                >
                  <p className="text-base sm:text-lg font-bold">
                    {item.label} :
                  </p>
                  <span className="font-medium text-sm sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Information */}
            <div className="mt-10 sm:mt-12">
              {/* Table Wrapper */}
              <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 pb-3 sm:pb-4 border-b border-[#E7EBF4] text-xs sm:text-lg font-bold text-[#052D4C]">
                  <h2 className="text-left">Description</h2>
                  <h2 className="text-end">Qty</h2>
                  <h2 className="text-end">Price</h2>
                  <h2 className="text-end ">Amount</h2>
                </div>

                {/* Table Body */}
                {MedicindeInfo?.order?.order_items?.map(med => (
                  <div
                    key={med.medicine}
                    className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 py-2 border-b border-[#E7EBF4] text-xs sm:text-base items-center"
                  >
                    <div className="text-left">
                      <h2 className="font-bold">{med?.medicine}</h2>
                      <p className="text-[10px] sm:text-sm text-gray-500">
                        {med?.quantity} Medicine included
                      </p>
                    </div>
                    <h2 className="text-end font-bold">{med?.quantity}</h2>
                    <h2 className="text-end font-bold">$ {med?.unit_price}</h2>
                    <h2 className="text-end font-bold ">
                      $ {med?.total_price}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Orders */}
          <div className="rounded-lg py-10 sm:py-16 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#052D4C] text-center sm:text-left">
              Past Orders
            </h2>

            {/* Orders */}
            <Accordion
              type="single"
              collapsible
              className="mt-6 sm:mt-10 space-y-3"
            >
              {MedicindeInfo?.past_orders?.map(item => (
                <AccordionItem
                  key={item?.details?.order_id}
                  value={item?.details?.order_id}
                  className="border-b-0 bg-white px-3 sm:px-0 sm:p-5 rounded-lg"
                >
                  <AccordionTrigger>
                    {/* Header */}
                    <div className="flex font-extrabold   gap-3 items-center text-[#052D4C]">
                      <h2 className="text-sm sm:text-lg ">Order ID :</h2>
                      <p className=" text-sm sm:text-base">
                        #{item?.details?.order_id}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-white rounded-lg py-6 px-1 sm:px-6">
                      {/* Title */}
                      <h2 className="text-lg sm:text-2xl font-bold text-[#052D4C]">
                        Order Details
                      </h2>

                      {/* Description */}
                      <div className="text-[#052D4C] mt-5 sm:mt-7 space-y-3 sm:space-y-4">
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
                        ].map((info, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col sm:flex-row justify-between"
                          >
                            <p className="text-[10px] sm:text-lg font-bold">
                              {info.label} :
                            </p>
                            <span className="font-medium text-sm sm:text-base">
                              {info.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Order Information */}
                      <div className="mt-8 sm:mt-12">
                        <div className="overflow-x-auto">
                          {/* Table Header */}
                          <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 pb-3 sm:pb-4 border-b border-[#E7EBF4] text-xs sm:text-lg font-bold text-[#052D4C]">
                            <h2 className="text-left">Description</h2>
                            <h2 className="text-end">Qty</h2>
                            <h2 className="text-end">Price</h2>
                            <h2 className="text-end ">Amount</h2>
                          </div>

                          {/* Table Body */}
                          {item?.order_items?.map(med => (
                            <div
                              key={med.medicine}
                              className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 py-2 border-b border-[#E7EBF4] text-xs sm:text-base items-center"
                            >
                              <div className="text-left">
                                <h2 className="font-bold">{med?.medicine}</h2>
                                <p className="text-[10px] sm:text-sm text-gray-500">
                                  {med?.quantity} Medicine included
                                </p>
                              </div>
                              <h2 className="text-end font-bold">
                                {med?.quantity}
                              </h2>
                              <h2 className="text-end font-bold">
                                $ {med?.unit_price}
                              </h2>
                              <h2 className="text-end font-bold ">
                                $ {med?.total_price}
                              </h2>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* right content */}
        <div className="px-4 sm:px-6 py-8 sm:py-10 w-full lg:w-2/5 order-1 lg:order-2 bg-white rounded-lg h-fit">
          <div>
            {/* title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#052D4C] text-center sm:text-left">
              Manage the order
            </h3>

            {/* filter */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 ">
              <div className="w-full ">
                <Select onValueChange={value => setSelectedValue(value)}>
                  <SelectTrigger className="w-full  border font-semibold text-sm sm:text-base h-10 sm:h-12 rounded-xl px-6">
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

              <div className="w-full">
                <button
                  onClick={() => setOpen(true)}
                  className="flex w-full items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 text-primary border border-primary rounded-lg text-sm sm:text-base font-semibold  "
                >
                  Create a New Meeting <MeetingSvg />
                </button>
              </div>
            </div>

            {/* Add Note */}
            <div className="mt-8 sm:mt-10">
              <h4 className="text-lg sm:text-xl font-bold text-[#052D4C]">
                Add a Note
              </h4>

              <form className="w-full mt-3">
                <textarea
                  rows={4}
                  onChange={e => setNote(e.target.value)}
                  className="p-4 rounded-lg border border-[#00000033] w-full resize-none focus:outline-none text-sm sm:text-base"
                  placeholder="Write your notes..."
                  name="note"
                  id="note"
                ></textarea>

                <button
                  onClick={e => handleUpdateStatus(e)}
                  type="submit"
                  className="mt-4 sm:mt-5 text-sm md:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-primary text-white w-full sm:w-auto"
                >
                  Update order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <MeetingScheduleModal setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default OrderDetailsDoctor;
