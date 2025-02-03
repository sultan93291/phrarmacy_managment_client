/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo/logo.svg";
import userIcon from "@/assets/images/icon/User-rounded.svg";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { useContext } from "react";
import HeaderBtn from "@/components/HeaderComponents/HeaderBtn";
import useAuth from "@/Hooks/useAuth";
import { useSelector } from "react-redux";

const SideBarNav = ({ isOpen, navLinks, setOpen }) => {
  const { role } = useAuth();
  const { isAuthenticated } = useContext(AuthContext);
  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );
  const SiteURl = import.meta.env.VITE_SITE_URL;
  return (
    <>
      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 xl:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-[60] h-full w-60 transform shadow-lg bg-white transition-transform duration-500 lg:w-64 px-5 py-8 xl:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div>
          <Link to="/" className="text-xl font-primaryRegular">
            <img src={Logo} alt="" />
          </Link>
        </div>

        {/* links */}
        <ul className="flex flex-col w-full gap-4 mt-8">
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
        </ul>

        {/* header btn  */}
        <div
          className="mt-5 inline-block"
          data-aos="zoom-left"
          data-aos-duration="2000"
        >
          {isAuthenticated ? (
            <Link
              to={
                role == "user"
                  ? "/dashboard/user/user-homepage"
                  : role == "doctor"
                    ? "/dashboard/doctor/homepage"
                    : role == "pharmacist"
                      ? "/dashboard/pharmacist/homepage"
                      : "/"
              }
            >
              <HeaderBtn
                text={loggedInUser?.name ? loggedInUser?.name : "user name"}
              />
            </Link>
          ) : (
            <Link to={"/auth/signup"}>
              <HeaderBtn
                text="Sign Up"
                imgSrc={`${SiteURl}/${loggedInUser?.avatar}`}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBarNav;
