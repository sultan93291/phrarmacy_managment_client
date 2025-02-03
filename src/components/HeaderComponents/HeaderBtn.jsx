import React from "react";
import userIcon from "../../assets/images/icon/User-rounded.svg";
import { useSelector } from "react-redux";

function HeaderBtn({ text }) {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  console.log("logged in user", loggedInUser);

  return (
    <div className="xl:py-[7px] justify-center py-[5px] px-3 btn-gradient rounded flex items-center gap-3 xl:gap-[18px]">
      <p className="xl:text-[18px] font-semibold text-white">{text}</p>
      <div className="h-7 w-7 xl:h-9 xl:w-9 relative bg-white rounded-full ring-2 flex items-center justify-center">
        <img
          className={
            loggedInUser.avatar && "h-full w-full object-cover rounded-full"
          }
          src={
            loggedInUser.avatar ? `${SiteURl}/${loggedInUser.avatar}` : userIcon
          }
          alt="userIcon"
        />
      </div>
    </div>
  );
}

export default HeaderBtn;
