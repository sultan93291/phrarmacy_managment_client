import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';

const UserSubscription = () => {
  const subscriptions = [
    {
      orderId: '#101',
      orderDate: '12/11/24',
      CurrentPlan: 450,
    },
    {
      orderId: '#101',
      orderDate: '12/11/24',
      CurrentPlan: 450,
    },
    {
      orderId: '#101',
      orderDate: '12/11/24',
      CurrentPlan: 450,
    },
    {
      orderId: '#101',
      orderDate: '12/11/24',
      CurrentPlan: 450,
    },
  ];
  return (
    <div>
      <div className=" bg-white rounded-md px-16 py-10">
        <DashboardTitle title="Subscription" />

        <DashboardTable orders={subscriptions} status={true}/>
      </div>
    </div>
  );
};

export default UserSubscription;
