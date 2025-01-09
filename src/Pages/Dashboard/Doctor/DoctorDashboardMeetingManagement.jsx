import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import { DeleteSvg } from '@/components/SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DoctorDashboardMeetingManagement = () => {
  const tableHead = [
    'Meeting Date',
    'Meeting Time',
    'Meeting URL',
    'User Name',
    'Meeting status',
    'Action',
  ];

  const tableData = [
    {
      meetingDate: '12/11/24',
      meetingTime: '12:00AM',
      meetingUrl: 'https://zoom.us/i/1983475281',
      userName: 'Cody Fisher',
      meetingStatus: 'Pending',
    },
    {
      meetingDate: '12/12/24',
      meetingTime: '1:00PM',
      meetingUrl: 'https://zoom.us/i/1983475282',
      userName: 'Amelia Rose',
      meetingStatus: 'Scheduled',
    },
    {
      meetingDate: '12/13/24',
      meetingTime: '2:00PM',
      meetingUrl: 'https://zoom.us/i/1983475283',
      userName: 'Liam Carter',
      meetingStatus: 'Completed',
    },
    {
      meetingDate: '12/14/24',
      meetingTime: '3:00AM',
      meetingUrl: 'https://zoom.us/i/1983475284',
      userName: 'Emma Lewis',
      meetingStatus: 'Pending',
    },
    {
      meetingDate: '12/15/24',
      meetingTime: '4:00PM',
      meetingUrl: 'https://zoom.us/i/1983475285',
      userName: 'Jack Smith',
      meetingStatus: 'Scheduled',
    },
    {
      meetingDate: '12/16/24',
      meetingTime: '5:00AM',
      meetingUrl: 'https://zoom.us/i/1983475286',
      userName: 'Sophia Johnson',
      meetingStatus: 'Completed',
    },
    {
      meetingDate: '12/17/24',
      meetingTime: '6:00PM',
      meetingUrl: 'https://zoom.us/i/1983475287',
      userName: 'James Davis',
      meetingStatus: 'Pending',
    },
    {
      meetingDate: '12/18/24',
      meetingTime: '7:00AM',
      meetingUrl: 'https://zoom.us/i/1983475288',
      userName: 'Mia Robinson',
      meetingStatus: 'Scheduled',
    },
    {
      meetingDate: '12/19/24',
      meetingTime: '8:00PM',
      meetingUrl: 'https://zoom.us/i/1983475289',
      userName: 'Benjamin Lee',
      meetingStatus: 'Completed',
    },
    {
      meetingDate: '12/20/24',
      meetingTime: '9:00AM',
      meetingUrl: 'https://zoom.us/i/1983475290',
      userName: 'Isabella Clark',
      meetingStatus: 'Pending',
    },
  ];

  return (
    <div>
      <div className=" bg-white rounded-md px-16 py-10">
        <DashboardTitle title="Meeting Management" />

        {/* Table */}
        <div className="rounded-lg bg-white  md:rounded-xl lg:rounded-2xl">
          <div className="overflow-x-auto">
            <table className="  w-full font-inter md:mt-10">
              <thead>
                <tr className="bg-[#F2F3F4] text-sm font-bold text-[#222E48CC] md:text-base lg:text-lg">
                  {tableHead.map((item) => (
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
                {tableData?.map((data, idx) => (
                  <tr
                    key={idx}
                    className="border-y hover:bg-primary/20 transition duration-300 text-sm md:text-base text-[#052D4C] font-medium"
                  >
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      {data?.meetingDate}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      {data?.meetingTime}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <Link
                        target="_blank"
                        to={data?.meetingUrl}
                        className="text-[#1E40AF] rounded-lg bg-[#DBEAFE] px-2 py-1 border border-[#93C5FD]"
                      >
                        Join Now
                      </Link>
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      {data?.userName}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <Select>
                        <SelectTrigger className="border h-10 w-32 rounded-xl px-4 py-1 text-base text-[#6B7280] font-md">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className={'font-medium'}>
                          <SelectItem value="Select" disabled>Select</SelectItem>
                          <SelectItem value="Scheduled">Scheduled</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-[#898989] md:px-5 md:py-4`}
                    >
                      <div className="cursor-pointer">
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
