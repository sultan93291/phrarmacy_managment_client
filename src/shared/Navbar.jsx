import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import CartIcon from "../assets/images/icon/cart.svg";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import HeaderBtn from "../components/HeaderComponents/HeaderBtn";
import useAuth from "@/Hooks/useAuth";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SideBarNav from "./SideBarNav";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { useSelector } from "react-redux";

function Navbar() {
  const { role } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isOpen, setOpen] = useState(false);
  const onSubmit = data => {
    console.log(data);
  };
  const { isAuthenticated } = useContext(AuthContext);

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  const location = useLocation();

  const navLinks = [
    {
      path: "/service",
      title: "All treatment",
    },
    {
      path: "/howitworks",
      title: "How it works",
    },
    {
      path: "/faq",
      title: "FAQ",
    },
    {
      path: "/auth/login",
      title: "Login",
    },
  ];

  const SiteURl = import.meta.env.VITE_SITE_URL;

  return (
    <>
      <header className="py-[13px] px-3 md:px-9 flex justify-between bg-headerBg sticky top-0 left-0 w-full z-[50] h-[75px] xl:h-auto">
        <div className="flex items-center justify-between">
          {/* header left  */}
          <div className="flex items-center gap-10">
            {/* logo  */}
            <div>
              <Link to={"/"}>
                <div className="size-12 md:size-[70px]">
                  <img
                    data-aos="zoom-up"
                    data-aos-duration="2000"
                    className="w-full h-full object-cover"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
              </Link>
            </div>
            {/* menus  */}
            <ul className="xl:flex items-center gap-[30px] hidden ">
              {navLinks?.map(navLink => {
                if (navLink.title === "Login" && isAuthenticated) {
                  return null; // Don't render the "Login" link if the user is authenticated
                }

                // Otherwise, render the navigation link
                return (
                  <NavLink
                    key={navLink.title}
                    className="menu-item"
                    to={navLink.path}
                  >
                    {" "}
                    {navLink.title}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        {/* header right  */}
        <div
          data-aos="zoom-left"
          data-aos-duration="2000"
          className="flex items-center gap-2 sm:gap-[18px]"
        >
          {/* search  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full md:w-[350px]"
          >
            <input
              {...register("search")}
              type="text"
              name="search"
              placeholder="Search your treatments"
              className="sm:py-[13px] placeholder:text-[11px] sm:placeholder:text-base  py-2 px-3 sm:px-6 bg-white w-full text-sm rounded-[40px] text-black focus:outline-none font-semibold"
            />
            <button
              type="submit"
              className="absolute top-[50%] right-1 sm:right-[20px] h-6 w-6 translate-y-[-50%] sm:text-[20px] text-headerSearchbarPlaceHolder"
            >
              <GoSearch />
            </button>
          </form>
          {/* cart  */}
          <div data-aos="zoom-left" data-aos-duration="2000"></div>
          {/* header btn  */}
          <div
            data-aos="zoom-left"
            data-aos-duration="2000"
            className="hidden xl:block"
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

          {/* Hamburger */}
          <div className="xl:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
      {/* sidebar */}
      <SideBarNav isOpen={isOpen} setOpen={setOpen} navLinks={navLinks} />
    </>
  );
}

export default Navbar;
