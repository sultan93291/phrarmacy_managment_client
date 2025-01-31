import {
  DashboardNotification,
  DashboardNotificationIndicatorSvg,
} from "@/components/SvgContainer/SvgContainer";
import { useRef, useState } from "react";
import DashboardNotificationsContainer from "./DashboardNotificationsContainer";
import user from "@/assets/images/user.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuth from "@/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "hamburger-react";
import SideDashboard from "@/shared/SideDashboard";
import { FaBars } from "react-icons/fa6";

const DashboardHeader = ({ dashboardNavLinks }) => {
  const [isOpen, setOpen] = useState(false);
  const { role, setRole } = useAuth();
  const navigate = useNavigate();

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  const [showNotifications, setShowNotifications] = useState(false);
  const showNotificationsRef = useRef(null);

  useState(() => {
    const handleClickOutside = e => {
      if (
        showNotificationsRef.current &&
        !showNotificationsRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  console.log(loggedInUser);

  return (
    <div className="py-8 px-5 sm:px-10 min-h-[88px] max-h-[88px] w-full flex items-center justify-between">
      {/* user information */}
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="size-10 md:size-12 ">
          <img
            className="w-full h-full object-cover rounded-full"
            src={
              loggedInUser?.avatar
                ? `https://aamairk.softvencefsd.xyz/${loggedInUser?.avatar}`
                : user
            }
            alt=""
          />
        </div>
        <div className="md:space-y-2">
          <h3 className="sm:text-lg md:text-xl font-medium">
            Welcome back, <br className="sm:hidden" /> {loggedInUser?.name ? loggedInUser?.name : "Hawkins"}{" "}
          </h3>
          <p className="hidden sm:block text-[#404A60] text-sm">
            Happy to see you again on your dashboard.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-5">
        {/* temporary role switch */}
        {/* Hamburger */}
        <div className="min-[1200px]:hidden">
          <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
        </div>
        {/* Notification */}
        <div
          ref={showNotificationsRef}
          className="relative"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <div className="cursor-pointer p-2 sm:p-4 rounded-full bg-[#5D69F40D] relative">
            {/* dot */}
            <div className="absolute top-[14px] right-[14px]">
              <DashboardNotificationIndicatorSvg />
            </div>
            <DashboardNotification />
          </div>

          <DashboardNotificationsContainer
            showNotifications={showNotifications}
          />
        </div>

      </div>
      {/* sidebar */}
      <SideDashboard isOpen={isOpen} setOpen={setOpen} dashboardNavLinks={dashboardNavLinks} />
    </div>
  );
};

export default DashboardHeader;
