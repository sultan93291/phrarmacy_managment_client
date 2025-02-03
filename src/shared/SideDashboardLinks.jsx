/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";

const SideDashboardLinks = ({ dashboardNavLinks, setOpen }) => {
    const currentPath = useLocation().pathname;
    return (
        <div className="w-full space-y-3 sm:space-y-4">
            {dashboardNavLinks?.map(navLink => (
                <NavLink
                    onClick={() => setOpen(false)}
                    key={navLink?.path}
                    to={navLink?.path}
                    className={({ isActive }) =>
                        `w-full flex gap-3 items-center px-6 py-3 rounded-2xl group duration-500 transition hover:bg-[#0CA6FC] ${isActive
                            ? "bg-[#0CA6FC] shadow-[0px_6px_30px_0px_rgba(93,105,244,0.40)]"
                            : ""
                        }`
                    }
                // Close sidebar on click
                >
                    <navLink.icon light={currentPath === navLink?.path} />
                    <span
                        className={`sm:text-lg group-hover:text-white transition duration-500 ${currentPath === navLink?.path ? "text-white" : "text-textColor"
                            }`}
                    >
                        {navLink?.title}
                    </span>
                </NavLink>
            ))}
        </div>
    );
};

export default SideDashboardLinks;