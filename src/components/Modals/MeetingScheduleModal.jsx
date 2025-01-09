/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LinkSvg, ZoomSvg } from '../SvgContainer/SvgContainer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MeetingScheduleModal = ({ setOpen }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
      toast.success("Meeting Scheduled successfully!"); 
      navigate('/dashboard/doctor/meeting-management');
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
                      {...register('topic', { required: true })}
                      type="text"
                      placeholder="Enter Topic"
                      name="topic"
                      className="w-full border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>
                  <fieldset className="border border-gray-300 rounded-md p-2">
                    <legend className="text-sm font-medium text-gray-500 px-2">
                      Description
                    </legend>
                    <textarea
                      rows={3}
                      {...register('description', { required: true })}
                      type="text"
                      placeholder="Enter Description"
                      name="description"
                      className="w-full resize-none border-0 outline-none px-2 py-1 text-gray-700"
                    />
                  </fieldset>

                  {/* zoom meeting link */}
                  <div>
                    <div className="flex items-center gap-4">
                      <div>
                        <LinkSvg />
                      </div>
                      <div className="bg-[#F6F6F6] px-4 py-2 w-full rounded-lg">
                        <div className="flex items-center gap-3">
                          <ZoomSvg />
                          <span className="text-xl font-semibold">Zoom</span>
                        </div>
                      </div>
                    </div>

                    <fieldset className="border border-gray-300 rounded-md p-2 mt-4">
                      <legend className="text-sm font-medium text-gray-500 px-2">
                        Meeting Link *
                      </legend>
                      <input
                        {...register('meetingLink', { required: true })}
                        type="text"
                        defaultValue="https://zoom.us/i/1983475281"
                        name="meetingLink"
                        className="w-full border-0 outline-none px-2 py-1 text-gray-700"
                      />
                    </fieldset>
                  </div>

                  <div className="w-full space-y-3">
                    <button
                      onClick={() => setOpen(false)}
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
