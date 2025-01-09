import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const DashboardNotification = ({ notification }) => {
  return (
    <div className="flex items-center gap-4 border-b border-black/20 pb-3 md:pb-5 lg:gap-8">
      <div>
        <div className="size-8 overflow-hidden rounded-full md:size-12">
          <img
            className="h-full w-full object-cover"
            src={notification?.image}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs md:text-base">
        <Link>{notification?.title}</Link>
        <p className="text-[10px]">{notification?.time}</p>
      </div>
    </div>
  );
};

export default DashboardNotification;
