import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import UserStatCard from '@/components/Dashboard/User/UserStatCard';
import {
  ConsultationSvg,
  DeliverySvg,
  OrderSvg,
} from '@/components/SvgContainer/SvgContainer';
import { useGetUserOrderIntentQuery } from '@/Redux/features/api/apiSlice';
import { useEffect, useState } from 'react';

const UserDashboardHome = () => {
  const userStats = [
    {
      title: 'Consultation Completed',
      count: 5,
      svg: <ConsultationSvg />,
    },
    {
      title: 'Order Placed',
      count: 10,
      svg: <OrderSvg />,
    },
    {
      title: 'Delivered orders',
      count: 4,
      svg: <DeliverySvg />,
    },
  ];

  const orders = [
    {
      orderId: '#101',
      orderDate: '12/11/24',
      deliveryDate: '18/11/24',
      price: 450,
      status: 'delivered',
    },
    {
      orderId: '#102',
      orderDate: '13/11/24',
      deliveryDate: '20/11/24',
      price: 250,
      status: 'pending',
    },
    {
      orderId: '#103',
      orderDate: '10/11/24',
      deliveryDate: '15/11/24',
      price: 550,
      status: 'delivered',
    },
    {
      orderId: '#104',
      orderDate: '09/11/24',
      deliveryDate: '14/11/24',
      price: 300,
      status: 'pending',
    },
    {
      orderId: '#105',
      orderDate: '11/11/24',
      deliveryDate: '16/11/24',
      price: 400,
      status: 'delivered',
    },
    {
      orderId: '#106',
      orderDate: '08/11/24',
      deliveryDate: '13/11/24',
      price: 500,
      status: 'delivered',
    },
    {
      orderId: '#107',
      orderDate: '14/11/24',
      deliveryDate: '19/11/24',
      price: 600,
      status: 'delivered',
    },
    {
      orderId: '#108',
      orderDate: '07/11/24',
      deliveryDate: '12/11/24',
      price: 350,
      status: 'delivered',
    },
    {
      orderId: '#109',
      orderDate: '15/11/24',
      deliveryDate: '20/11/24',
      price: 450,
      status: 'pending',
    },
    {
      orderId: '#110',
      orderDate: '06/11/24',
      deliveryDate: '11/11/24',
      price: 700,
      status: 'delivered',
    },
  ];

  const [allOrder, setAllOrder] = useState([]);

  const {
    data: orderdData,
    isLoading,
    isError,
    error,
  } = useGetUserOrderIntentQuery();

  useEffect(() => {
    setAllOrder(orderdData?.data?.orders);
  }, [orderdData]);



  return (
    <div>
      {/* user stats */}
      <div className="grid md:grid-cols-3 xl gap-5 xl:gap-8">
        {userStats?.map((stat, idx) => (
          <UserStatCard key={idx} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="mt-5 sm:mt-7 xl:mt-12 bg-white rounded-md px-5 sm:px-10 xl:px-16 py-7 sm:py-10">
        <DashboardTitle title="My Order" />

        <DashboardTable orders={allOrder} />
      </div>
    </div>
  );
};

export default UserDashboardHome;
