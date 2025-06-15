import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import { useGetUserOrderIntentQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const UserDashboardOrder = () => {

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



  console.log(orderdData?.data?.orders, "all oreders");

  return (
    <div>
      <div className="mb-5 sm:hidden">
        <DashboardTitle title="My Order" />
      </div>
      <div className=" bg-white border sm:border-none rounded-md sm:px-10 xl:px-16 sm:py-10">
        <div className="hidden sm:block">
          <DashboardTitle title="My Order" />
        </div>

        <DashboardTable orders={allOrder} />
      </div>
    </div>
  );
};

export default UserDashboardOrder;
