import { useGetNotificationsIntentQuery } from "@/Redux/features/api/apiSlice";
import DashboardNotification from "./DashboardNotification";
import user from "@/assets/images/user.png";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const DashboardNotificationsContainer = ({ showNotifications }) => {
  const allNotifications = [
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
    {
      image: user,
      title: "New Medicine Added.Check your order",
      link: "",
      time: "10 Minutes ago",
    },
  ];

  const { data, isLoading, isError, error } = useGetNotificationsIntentQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);


  return (
    <div
      className={`absolute right-[1%] md:right-[2%] sm:top-[65%] font-nunito  mx-5 rounded-xl bg-[#f7f7ff] p-4 shadow-[-7px_14px_9px_7px_rgba(0,0,0,0.15)] duration-500 transition-all md:top-[75%] lg:bg-white lg:px-8 lg:py-6 xl:top-[80%] 2xl:right-[5%] w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] ${showNotifications
        ? "opacity-100 translate-y-2 z-10"
        : "opacity-0 translate-y-4 -z-10"
        }
        `}
    >
      {/* notifications header */}
      <div className="flex items-center justify-between font-inter md:pb-5">
        <h5 className="text-sm md:text-base">Notifications</h5>
        <a href="#" className="text-sm md:text-base">
          Mark All As Read
        </a>
      </div>

      {/* all notifications */}

      <div className="custom_scrollbar flex h-fit max-h-[500px] flex-col gap-5 overflow-y-auto py-5 pl-2 pr-5">
        {allNotifications?.map((notification, index) => (
          <DashboardNotification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default DashboardNotificationsContainer;
