import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import UserStatCard from '@/components/Dashboard/User/UserStatCard';
import {
  ConsultationSvg,
  DeliverySvg,
  OrderSvg,
} from '@/components/SvgContainer/SvgContainer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DoctorDashboardHomepage = () => {
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
  const doctorStats = [
    {
      title: 'Consultation Completed',
      count: 40,
      svg: <ConsultationSvg />,
    },
    {
      title: 'Order Placed',
      count: 10,
      svg: <OrderSvg />,
    },
    {
      title: 'Delivered orders',
      count: 80,
      svg: <DeliverySvg />,
    },
  ];
  return (
    <div>
      {/* user stats */}
      <div className="grid grid-cols-3 gap-8">
        {doctorStats?.map((stat, idx) => (
          <UserStatCard key={idx} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="mt-12 bg-white rounded-md px-16 py-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-semibold text-3xl text-categoryBtnColor">
            All order
          </h2>
          <div>
            <Select>
              <SelectTrigger className="w-40 border font-semibold text-base h-12 rounded-full px-8 font-nunito">
                <SelectValue placeholder="All Order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Order">All Order</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DashboardTable orders={orders} doctor={true} />
      </div>
    </div>
  );
};

export default DoctorDashboardHomepage;
