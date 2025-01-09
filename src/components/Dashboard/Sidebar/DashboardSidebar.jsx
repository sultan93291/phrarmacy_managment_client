/* eslint-disable react/prop-types */
import {
  DashboardLogoutSvg,
  LogoSvg,
} from '@/components/SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
import DashboardSidebarNavLinks from './DashboardSidebarNavLinks/DashboardSidebarNavLinks';

const DashboardSidebar = ({ dashboardNavLinks }) => {
  return (
    <div className="min-h-screen max-h-screen w-[350px] p-8">
      {/* logo */}
      <div className="w-full flex items-center justify-center">
        <Link to="/">
          <LogoSvg />
        </Link>
      </div>

      {/* dash */}
      <div className="w-full border-dashed border-t border-[#5D69F4]/30 my-6" />

      {/* dashboard navLinks */}
      <DashboardSidebarNavLinks dashboardNavLinks={dashboardNavLinks} />

      {/* logout */}
      <div className="mt-4 w-full flex gap-3 items-center px-6 py-3 rounded-2xl group duration-500 transition hover:bg-[#0CA6FC] cursor-pointer">
        <DashboardLogoutSvg />
        <span
          className={`text-lg group-hover:text-white transition duration-500 text-textColor`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
