/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo/logo.svg";
import userIcon from "@/assets/images/icon/User-rounded.svg";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { useContext } from "react";

const SideBarNav = ({ isOpen, navLinks , setOpen }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 xl:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-[60] h-full w-60 transform shadow-lg bg-white transition-transform duration-500 lg:w-64 px-5 py-8 xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <Link
            to="/"
            className="text-xl font-primaryRegular"
          >
            <img src={Logo} alt="" />
          </Link>
        </div>

        {/* links */}
        <ul className="flex flex-col w-full gap-4 mt-8">
<<<<<<< HEAD
          {navLinks?.map((navLink) => (
            <li key={navLink?.path} data-aos="zoom-up" data-aos-duration="2000">
              <NavLink
                onClick={() => setOpen(false)}
                to={navLink?.path}
                className="menu-item text-sm"
              >
                {navLink?.title}
              </NavLink>
            </li>
          ))}
=======

          {navLinks?.map(navLink => {
            if (navLink.title === "Login" && isAuthenticated) {
              return null; // Don't render the "Login" link if the user is authenticated
            }
            return (
              <li
                onClick={() => {
                  setOpen(false);
                }}
                key={navLink?.path}
                data-aos="zoom-up"
                data-aos-duration="2000"
              >
                <NavLink to={navLink?.path} className="menu-item text-sm">
                  {navLink?.title}
                </NavLink>
              </li>
            );
          })}
>>>>>>> 398582082942b05d07aa2d0552aa350a40171996
        </ul>

        {/* btn */}
        {!isAuthenticated && (
<<<<<<< HEAD
          <div className="mt-4 w-fit">
=======
          <div className="mt-4  w-fit">
>>>>>>> 398582082942b05d07aa2d0552aa350a40171996
            <Link to={"/auth/signup"}>
              <div className="px-4 py-2 btn-gradient rounded-full flex items-center gap-2">
                <p className="text-sm font-semibold text-white">Sign Up</p>
                <div className="size-4 bg-white rounded-full flex items-center justify-center">
                  <img src={userIcon} alt="userIcon" />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBarNav;
