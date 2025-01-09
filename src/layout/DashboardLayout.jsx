import {
  AssessmentSvg,
  DashboardHomeSvg,
  DashboardOrderSvg,
  DashboardPaymentSvg,
  DashboardStarSvg,
  ReviewSvg,
} from '@/components/SvgContainer/SvgContainer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import {
  DashboardUserSvg,
  SubscriptionSvg,
} from './../components/SvgContainer/SvgContainer';
import DashboardHeader from '@/components/Dashboard/Header/DashboardHeader';
import DashboardSidebar from '@/components/Dashboard/Sidebar/DashboardSidebar';
import AosProvider from '@/provider/Aos/AosProvider';
import useAuth from '@/Hooks/useAuth';

const DashboardLayout = () => {
  const { role } = useAuth();

  const userDashboardNavLinks = [
    {
      title: 'Homepage',
      path: '/dashboard/user/user-homepage',
      icon: DashboardHomeSvg,
    },
    {
      title: 'Order History',
      path: '/dashboard/user/user-order-history',
      icon: DashboardOrderSvg,
    },
    {
      title: 'Assessment Result',
      path: '/dashboard/user/user-assessment-result',
      icon: AssessmentSvg,
    },
    {
      title: 'My Payments',
      path: '/dashboard/user/user-payments',
      icon: DashboardPaymentSvg,
    },
    {
      title: 'My Subscription',
      path: '/dashboard/user/user-subscription',
      icon: SubscriptionSvg,
    },
    {
      title: 'My Review',
      path: '/dashboard/user/user-review',
      icon: ReviewSvg,
    },
    {
      title: 'My Profile',
      path: '/dashboard/user/user-profile',
      icon: DashboardUserSvg,
    },
  ];
  const doctorDashboardNavLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard/doctor/homepage',
      icon: DashboardHomeSvg,
    },
    {
      title: 'Order Management',
      path: '/dashboard/doctor/order-management',
      icon: DashboardOrderSvg,
    },
    {
      title: 'Meeting Management',
      path: '/dashboard/doctor/meeting-management',
      icon: DashboardStarSvg,
    },
  ];
  const pharmacistDashboardNavLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard/pharmacist/homepage',
      icon: DashboardHomeSvg,
    },
    {
      title: 'Order Management',
      path: '/dashboard/pharmacist/order-management',
      icon: DashboardOrderSvg,
    },
  ];

  return (
    <AosProvider>
      <ScrollRestoration></ScrollRestoration>
      <div className="min-h-screen max-h-screen flex overflow-hidden font-nunito">
        {/* sidebar */}
        <DashboardSidebar
          dashboardNavLinks={
            role === 'user'
              ? userDashboardNavLinks
              : role == 'doctor'
              ? doctorDashboardNavLinks
              : pharmacistDashboardNavLinks
          }
        />

        {/* dashboard */}
        <div className="w-[calc(100%-350px)] min-h-screen max-h-screen">
          {/* dashboard header */}
          <DashboardHeader />

          {/* dashboard contents */}
          <div className="min-h-[calc(100%-88px)] p-10 max-h-[calc(100%-88px)] overflow-y-auto bg-[#F7F7FE] rounded-md">
            <Outlet />
          </div>
        </div>
      </div>
    </AosProvider>
  );
};

export default DashboardLayout;
