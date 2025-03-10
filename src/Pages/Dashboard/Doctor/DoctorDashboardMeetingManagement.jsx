import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import { DeleteSvg } from "@/components/SvgContainer/SvgContainer";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useDeleteMeetingIntentMutation,
  useGetAllMeetingsIntentQuery,
  useUpdateMeetingIntentMutation,
} from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DoctorDashboardMeetingManagement = () => {
  const [allMeetingData, setallMeetingData] = useState([]);

  const { data, error, isLoading, isError } = useGetAllMeetingsIntentQuery();
  const [
    updateMeeting,
    {
      isLoading: isupdateLoading,
      isSuccess,
      isError: isMeetingError,
      error: meeingEror,
    },
  ] = useUpdateMeetingIntentMutation();

  const [deleteMetting, { isLoading: isdeleteLoading, error: deleteError }] =
    useDeleteMeetingIntentMutation();

  const tableHead = [
    "Meeting Date",
    "Meeting Time",
    "Meeting URL",
    "User Name",
    "Meeting status",
    "Action",
  ];

  const [value, setvalue] = useState();

  const handleUpdate = async ({ value, id }) => {
    console.log(value, id);

    try {
      const response = await updateMeeting({
        id: id,
        status: value,
      }).unwrap();

      if (response.code === 200) {
        toast.success(response?.message);
      }
    } catch (err) {
      toast.error(
        `Error: ${
          err.message || err.data.message || "An unexpected error occurred"
        }`
      );
    }
  };

  const handleDelete = async id => {
    try {
      const response = await deleteMetting(id).unwrap();

      if (response.code === 200) {
        toast.success(response?.message);
      }
    } catch (err) {
      toast.error(
        `Error: ${
          err.message || err.data.message || "An unexpected error occurred"
        }`
      );
    }
  };

  useEffect(() => {
    setallMeetingData(data?.data);
  }, [data]);

  if (allMeetingData.length < 1)
    return (
      <h3 className="text-lg text-[#898989] font-semibold ">
        {" "}
        Currently there is no meeting data data
      </h3>
    );
  return (
    <div>
      <div className="mb-5 sm:hidden">
        <DashboardTitle title="Meeting Management" />
      </div>
      <div className=" bg-white rounded-md sm:px-5 xl:px-16 sm:py-7 xl:py-10">
        <div className="mb-5 hidden sm:block">
          <DashboardTitle title="Meeting Management" />
        </div>

        {/* Table */}
        <div className="rounded-lg border sm:border-none bg-white  md:rounded-xl lg:rounded-2xl">
          <div className="overflow-x-auto">
            <table className="  w-full font-inter xl:mt-10">
              <thead>
                <tr className="bg-[#F2F3F4] text-sm font-bold text-[#222E48CC] md:text-base lg:text-lg">
                  {tableHead.map(item => (
                    <th
                      key={item}
                      className="px-4 py-2 text-left md:px-5 md:py-4 capitalize"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {allMeetingData?.map((data, idx) => (
                  <tr
                    key={idx}
                    className="border-y hover:bg-primary/20 transition duration-300 text-sm md:text-base text-[#052D4C] font-medium"
                  >
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      {data?.date}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      {data?.time}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <Link
                        target="_blank"
                        to={data?.link}
                        className="text-[#1E40AF] rounded-lg bg-[#DBEAFE] px-2 py-1 border border-[#93C5FD]"
                      >
                        Join Now
                      </Link>
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] truncate md:px-5 md:py-4`}
                    >
                      {data?.user}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <Select
                        onValueChange={value => {
                          setvalue(value);
                          handleUpdate({ value, id: data?.id });
                        }}
                      >
                        <SelectTrigger className="border h-10 w-32 rounded-xl px-4 py-1 text-base text-[#6B7280] font-md">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className={"font-medium"}>
                          <SelectItem value="Select" disabled>
                            Select
                          </SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="canceled">Canceled</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <div
                        onClick={() => {
                          handleDelete(data?.id);
                        }}
                        className="cursor-pointer"
                      >
                        <DeleteSvg />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardMeetingManagement;
