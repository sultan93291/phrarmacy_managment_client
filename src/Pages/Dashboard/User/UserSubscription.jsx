import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import { useGetSubsCreptionDetailsIntentQuery } from "@/Redux/features/api/apiSlice";

import { useEffect, useState } from "react";

const UserSubscription = () => {

  const [allSubscreptionData, setallSubscreptionData] = useState([]);
  const [allActionData, setallActionData] = useState([]);

  const { data, isLoading, isError, isSuccess } =
    useGetSubsCreptionDetailsIntentQuery();

  console.log(data?.data, "all subscriptions data");

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  };

  useEffect(() => {
    if (data?.data) {
      const formattedData = data.data.map(sub => ({
        orderId: `#${sub.metadata.order_id}`,
        orderDate: formatDate(sub.metadata.order_data),
        currentPlan: `£${sub.plan.amount.toFixed(2)}`,
      }));
      setallSubscreptionData(formattedData);
    }
  }, [data]);

  console.log(allSubscreptionData, "all subscreption data");

  return (
    <div>
      <div className="sm:hidden mb-5">
        <DashboardTitle title="Subscription" />
      </div>
      <div className=" bg-white rounded-md border sm:border-none sm:px-7 xl:px-16 sm:py-10">
        <div className="hidden sm:block">
          <DashboardTitle title="Subscription" />
        </div>
        <DashboardTable orders={allSubscreptionData} status={true} />
      </div>
    </div>
  );
};

export default UserSubscription;
