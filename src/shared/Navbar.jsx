import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
import { useGetSearchedTreatmentQuery } from "@/Redux/features/api/apiSlice";

function Navbar() {
  const { role } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isOpen, setOpen] = useState(false);
  const [activeTreament, setactiveTreament] = useState();

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetSearchedTreatmentQuery(
    activeTreament,
    {
      skip: !activeTreament,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

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
                  return null;
                }
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
          <form className="relative w-full md:w-[350px]">
            <input
              onChange={e => {
                setactiveTreament(e.target.value);
              }}
              type="text"
              name="search"
              placeholder="Search your treatments"
              className="sm:py-[13px] placeholder:text-[11px] sm:placeholder:text-base  py-2 px-3 sm:px-6 bg-white w-full text-sm rounded-[40px] text-black focus:outline-none font-semibold"
              value={activeTreament}
            />
            <button
              type="submit"
              className="absolute top-[50%] right-1 sm:right-[20px] h-6 w-6 translate-y-[-50%] sm:text-[20px] text-headerSearchbarPlaceHolder"
            >
              <GoSearch />
            </button>
            {activeTreament?.length > 0 && (
              <div
                className={`${
                  data?.data?.length > 0
                    ? " w-[250px] md:w-[400px] h-[400px] py-5 px-4 overflow-y-auto"
                    : "w-[250px] md:w-[400px] h-[250px] flex items-center justify-center"
                } ease-in-out duration-300 bg-white shadow-md absolute mt-8 rounded-md`}
              >
                {data?.data?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data?.data?.map((item, index) => (
                      <div
                        onClick={() => {
                          setactiveTreament("");
                          navigate(`/service/${item?.id}`);
                        }}
                        key={item.id}
                        className="flex cursor-pointer items-center gap-3 p-2 border border-gray-200 rounded hover:bg-gray-50 transition"
                      >
                        <img
                          src={`${SiteURl}/${item.avatar}`}
                          alt={item.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="font-medium text-sm text-gray-700">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className=" text-xl md:text-2xl">
                    <span className="text-red-500">*</span>
                    No Treatment found
                  </p>
                )}
              </div>
            )}
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
