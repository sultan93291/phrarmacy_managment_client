import {
  DashboardNotification,
  DashboardNotificationIndicatorSvg,
} from '@/components/SvgContainer/SvgContainer';
import { useRef, useState } from 'react';
import DashboardNotificationsContainer from './DashboardNotificationsContainer';
import user from '@/assets/images/user.png';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useAuth from '@/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const { role, setRole } = useAuth();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const showNotificationsRef = useRef(null);

  useState(() => {
    const handleClickOutside = (e) => {
      if (
        showNotificationsRef.current &&
        !showNotificationsRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="py-8 px-10 min-h-[88px] max-h-[88px] w-full flex items-center justify-between">
      {/* user information */}
      <div className="flex items-center gap-5">
        <div className="size-12 ">
          <img
            className="w-full h-full object-cover rounded-full"
            src={user}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Welcome back, Hawkins</h3>
          <p className="text-[#404A60] text-sm">
            Happy to see you again on your dashboard.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-10">
        {/* temporary role switch */}
        <div>
          <Select
            value={role}
            onValueChange={(selectedRole) => {
              setRole(selectedRole);

              // navigate to dashboard according to role
              switch (selectedRole) {
                case 'user':
                  navigate('/dashboard/user/user-homepage');
                  break;
                case 'doctor':
                  navigate('/dashboard/doctor/homepage');
                  break;
                case 'pharmacist':
                  navigate('/dashboard/pharmacist/homepage');
                  break;
                default:
                  break;
              }
            }}
          >
            <SelectTrigger className="w-36 border rounded-md px-4 py-1 text-sm text-[#6B7280] font-md">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent className="font-medium">
              <SelectItem value="Select Role" disabled>
                Select Role
              </SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="pharmacist">Pharmacist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notification */}
        <div
          ref={showNotificationsRef}
          className="relative"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <div className="cursor-pointer p-4 rounded-full bg-[#5D69F40D] relative">
            {/* dot */}
            <div className="absolute top-[14px] right-[14px]">
              <DashboardNotificationIndicatorSvg />
            </div>
            <DashboardNotification />
          </div>

          <DashboardNotificationsContainer
            showNotifications={showNotifications}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
