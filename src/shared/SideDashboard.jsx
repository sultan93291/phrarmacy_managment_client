/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import Logo from '@/assets/images/logo/logo.svg';
import userIcon from '@/assets/images/icon/User-rounded.svg';
import { RxCross2 } from "react-icons/rx";
import dashboardLogo from "../assets/images/logo/dashboard_upper_logo.png"

import {
    DashboardLogoutSvg,
    LogoSvg,
} from '@/components/SvgContainer/SvgContainer';
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import DashboardSidebarNavLinks from '@/components/Dashboard/Sidebar/DashboardSidebarNavLinks/DashboardSidebarNavLinks';

const SideDashboard = ({ isOpen, setOpen, dashboardNavLinks }) => {
    const { handleLogout } = useContext(AuthContext);
    return (
        <>
            {/* Blur Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 xl:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* Sidebar */}
            <div
                className={`fixed overflow-y-scroll left-0 top-0 z-[60] h-full w-[300px] sm:w-[350px] p-5 transform shadow-lg bg-white transition-transform duration-500 px-5 py-8 xl:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* min-h-screen maFx-h-screen w-[350px] p-8 hidden min-[1200px]:block */}
                <div className="">
                    {/* logo */}
                    <div className="w-full flex items-center justify-center">
                        <Link to="/">
                            <img src={dashboardLogo} alt="logo" />
                        </Link>
                    </div>

                    {/* dash */}
                    <div className="w-full border-dashed border-t border-[#5D69F4]/30 my-6" />

                    {/* dashboard navLinks */}

                    <DashboardSidebarNavLinks setOpen={setOpen} dashboardNavLinks={dashboardNavLinks} />

                    {/* logout */}
                    <div onClick={() => { handleLogout() }} className="mt-4 w-full flex gap-3 items-center px-6 py-3 rounded-2xl group duration-500 transition hover:bg-[#0CA6FC] cursor-pointer">
                        <DashboardLogoutSvg />
                        <span
                            className={`text-lg group-hover:text-white transition duration-500 text-textColor`}
                        >
                            Logout
                        </span>
                    </div>

                    {/* Close btn */}
                    <button onClick={() => setOpen(false)} className='absolute top-5 right-5'><RxCross2 className='text-2xl'></RxCross2></button>
                </div>
            </div>
        </>
    );
};

export default SideDashboard;