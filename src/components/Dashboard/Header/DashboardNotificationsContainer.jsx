import { useGetNotificationsIntentQuery } from "@/Redux/features/api/apiSlice";
import DashboardNotification from "./DashboardNotification";
import user from "@/assets/images/user.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const DashboardNotificationsContainer = ({ showNotifications }) => {
  const SiteURl = import.meta.env.VITE_SITE_URL;
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

  const [notificiationData, setNotificationData] = useState([]);

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  const { data, isLoading, isError, error } = useGetNotificationsIntentQuery();

  useEffect(() => {
    if (data?.data && loggedInUser?.avatar && SiteURl) {
      // Map through each item in the data and add the avatar
      const formattedData = data.data.map(item => ({
        ...item, // Spread the existing item data
        avatar: `${SiteURl}/${loggedInUser.avatar}`,
        timeAgo: getTimeAgo(item.created_at),
      }));

      setNotificationData(formattedData); // Update the notification data with the formatted items
    }
  }, [data, loggedInUser, SiteURl]); // Added dependencies to ensure the effect runs when these values change

  function getTimeAgo(createdAt) {
    // Parse the created_at date
    const createdDate = new Date(createdAt);

    // Get the current time
    const now = new Date();

    // Calculate the difference in milliseconds
    const timeDiff = now - createdDate;

    // Convert the difference to a more readable format
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Display the time difference in a human-readable format
    if (days > 0) {
      return `${days} day(s) ago`;
    } else if (hours > 0) {
      return `${hours} hour(s) ago`;
    } else if (minutes > 0) {
      return `${minutes} minute(s) ago`;
    } else {
      return `${seconds} second(s) ago`;
    }
  }


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
        {notificiationData?.map((notification, index) => (
          <DashboardNotification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default DashboardNotificationsContainer;
