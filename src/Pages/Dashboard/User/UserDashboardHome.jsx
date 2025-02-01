import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import UserStatCard from "@/components/Dashboard/User/UserStatCard";
import {
  ConsultationSvg,
  DeliverySvg,
  OrderSvg,
} from "@/components/SvgContainer/SvgContainer";
import {
  useGetUserOverViewDataIntentQuery,
  useGetUserOrderIntentQuery,
} from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const UserDashboardHome = () => {
  const {
    data: overviewData,
    error: overViewerror,
    isLoading: isOverviewLoading,
  } = useGetUserOverViewDataIntentQuery();

  const [delivery, setdelivery] = useState();
  const [placeOrder, setplaceOrder] = useState();
  const [consultation, setconsultation] = useState();

  useEffect(() => {
    if (isOverviewLoading) {
      console.log("Loading user overview data...");
    }

    if (overViewerror) {
      console.error("Error fetching user overview data:", overViewerror);
    }

    if (overviewData) {
      console.log(overviewData.data, "i'm getting overview data");
      setdelivery(overviewData?.data?.delivered_orders);
      setplaceOrder(overviewData?.data?.pending_orders);
      setconsultation(overviewData?.data.total_consultations);
    }
  }, [overviewData, isOverviewLoading, overViewerror]);

  const userStats = [
    {
      title: "Consultation Completed",
      count: consultation,
      svg: <ConsultationSvg />,
    },
    {
      title: "Order Placed",
      count: placeOrder,
      svg: <OrderSvg />,
    },
    {
      title: "Delivered orders",
      count: delivery,
      svg: <DeliverySvg />,
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
        {userStats?.map((stat, idx) => (
          <UserStatCard key={idx} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="py-10 pb-5">
        <DashboardTitle title="My Order" />
      </div>
      <div className=" bg-white border sm:border-none rounded-md  sm:px-10 xl:px-16">
        <DashboardTable orders={allOrder} />
      </div>
    </div>
  );
};

export default UserDashboardHome;
