import TableStatusButton from '@/components/Common/TableStatusButton';
import { Modal } from '@/components/Modals/Modal';
import SubscriptionModal from '@/components/Modals/SubscriptionModal';
import { ViewSvg } from '@/components/SvgContainer/SvgContainer';
import useAuth from '@/Hooks/useAuth';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/* eslint-disable react/prop-types */
const TableBody = ({ items, columns, status }) => {
  const { role } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getDetailsRoute = () => {
    if (role == 'doctor') return '/dashboard/doctor/order-details';
    if (role == 'pharmacist') return '/dashboard/pharmacist/order-details';
    if (role == 'user') return '/dashboard/user/order-details';
  };

  const handleRowClick = () => {
    const detailsRoute = getDetailsRoute();

    // Check if we're already on the details page for the current user type
    const isAlreadyOnDetailsPage = location.pathname === detailsRoute;

    if (!isAlreadyOnDetailsPage) {
      navigate(detailsRoute);
    }
  };

  return (
    <>
      {items?.map((item, idx) => (
        <tr
          onClick={!status && handleRowClick}
          key={idx}
          className="border-y hover:bg-primary/20 transition duration-300 text-sm md:text-base text-[#052D4C] font-medium cursor-pointer"
        >
          {columns.map((column, colIdx) => (
            <td
              key={colIdx}
              className={`whitespace-nowrap px-4 py-2 ${
                colIdx === 0 ? 'text-[#898989]' : 'text-[#404A60]'
              } md:px-5 md:py-4`}
            >
              {column === 'status' ? (
                <TableStatusButton title={item[column]} />
              ) : column === 'price' || column == 'CurrentPlan' ? (
                `$${item[column]}`
              ) : (
                item[column]
              )}
            </td>
          ))}

          <td>
            {status && (
              <div
                onClick={() => setOpen(true)}
                className="cursor-pointer ml-6"
              >
                <ViewSvg />
              </div>
            )}
          </td>
        </tr>
      ))}

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <SubscriptionModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default TableBody;
