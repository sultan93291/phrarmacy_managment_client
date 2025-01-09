import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';

const UserDashboardOrder = () => {
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
      status: 'delivered',
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
      status: 'delivered',
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
      status: 'delivered',
    },
    {
      orderId: '#110',
      orderDate: '06/11/24',
      deliveryDate: '11/11/24',
      price: 700,
      status: 'delivered',
    },
  ];

  return (
    <div>
      <div className=" bg-white rounded-md px-16 py-10">
        <DashboardTitle title="My Order" />

        <DashboardTable orders={orders} />
      </div>
    </div>
  );
};

export default UserDashboardOrder;
