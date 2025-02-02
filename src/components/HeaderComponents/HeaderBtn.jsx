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
    <div className="py-[7px] px-3 btn-gradient rounded-[50px] flex items-center gap-[18px]">
      <p className="text-[18px] font-semibold text-white">{text}</p>
      <div className="h-9 w-9 relative bg-white rounded-full ring-2 flex items-center justify-center">
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
