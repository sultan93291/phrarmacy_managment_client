/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LinkSvg, ZoomSvg } from "../SvgContainer/SvgContainer";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreateMeetingIntentMutation } from "@/Redux/features/api/apiSlice";

const MeetingScheduleModal = ({ setOpen }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();

  const [createMeeting, { isLoading, isError, error, isSuccess }] =
    useCreateMeetingIntentMutation();

  const onSubmit = async data => {
    console.log(data);
    try {
      const response = await createMeeting({
        id: id,
        data: {
          title: data?.title,
          description: data?.description,
          date: data?.date,
          time: `${data?.time}:00`,
        },
      }).unwrap();

      if (response.code === 201) {
        toast.success(response?.message);
      }
      console.log("Response:", response);
    } catch (err) {
      console.error("Error creating meeting:", err);
      toast.error(
        `Error: ${
          err.message || err.data.message || "An unexpected error occurred"
        }`
      );
    } finally {
      reset();
      setOpen(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins leading-[1.4] mb-2">
            Meeting Schedule
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full">
              <div>
                {/* title */}
                <h2 className="text-lg font-bold ">Details</h2>

                {/* form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  className="mt-3 space-y-5"
                >
                  <fieldset className="border border-gray-300 rounded-md p-2">
                    <legend className="text-sm font-medium text-gray-500 px-2">
                      Title *
                    </legend>
                    <input
                      {...register("title", { required: true })}
                      type="text"
                      placeholder="Enter Topic"
                      name="title"
                      className="w-full border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>
                  <fieldset className="border border-gray-300 rounded-md p-2">
                    <legend className="text-sm font-medium text-gray-500 px-2">
                      Description
                    </legend>
                    <textarea
                      rows={3}
                      {...register("description", { required: true })}
                      type="text"
                      placeholder="Enter Description"
                      name="description"
                      className="w-full resize-none border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>

                  {/* Date field */}
                  <fieldset className="border border-gray-300 rounded-md p-2">
                    <legend className="text-sm font-medium text-gray-500 px-2">
                      Date *
                    </legend>
                    <input
                      {...register("date", { required: true })}
                      type="date"
                      name="date"
                      className="w-full border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>

                  {/* Time field */}
                  <fieldset className="border border-gray-300 rounded-md p-2">
                    <legend className="text-sm font-medium text-gray-500 px-2">
                      Time *
                    </legend>
                    <input
                      {...register("time", { required: true })}
                      type="time"
                      name="time"
                      className="w-full border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>

                  <div className="w-full space-y-3">
                    <button
                      type="submit"
                      className="w-full text-center py-3 rounded-md bg-primary text-white font-semibold"
                    >
                      Next
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full text-center py-3 rounded-md bg-[#E8E8E8] text-black font-semibold"
                    >
                      Cancel
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

export default MeetingScheduleModal;
