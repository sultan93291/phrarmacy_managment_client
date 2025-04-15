import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import UserStatCard from "@/components/Dashboard/User/UserStatCard";
import {
  ConsultationSvg,
  DeliverySvg,
  OrderSvg,
} from "@/components/SvgContainer/SvgContainer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetPharmaCistOverViewDataIntentQuery,
  useGetUserOrderIntentQuery,
} from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const DoctorDashboardHomepage = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [value, setvalue] = useState();

  let data;

  const {
    data: orderdData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUserOrderIntentQuery({
    url: `orders?column=status&value=${
      value ? value : "paid"
    }&sort=&page=&per_page=`,
  });

  useEffect(() => {
    setAllOrder(orderdData?.data?.orders);
  }, [orderdData]);

  const {
    data: overviewData,
    error: overViewerror,
    isLoading: isOverviewLoading,
    isUninitialized,
  } = useGetPharmaCistOverViewDataIntentQuery();

  const [delivery, setDelivery] = useState(null);
  const [placeOrder, setPlaceOrder] = useState(null);
  const [consultation, setConsultation] = useState(null);

  useEffect(() => {
    // Loading state
    if (isOverviewLoading) {
      console.log("Loading user overview data...");
      return;
    }

    // Error state
    if (overViewerror) {
      console.error("Error fetching user overview data:", overViewerror);
      return;
    }

    // Successfully fetched data
    if (overviewData) {
      const { delivered, pending, total } = overviewData?.data || {};

      // Safely set state values
      setDelivery(delivered ?? 0); // Default to 0 if undefined
      setPlaceOrder(pending ?? 0); // Default to 0 if undefined
      setConsultation(total ?? 0); // Default to 0 if undefined
    }
  }, [overviewData, isOverviewLoading, overViewerror]);

  const doctorStats = [
    {
      title: "Consultation Completed",
      count: delivery,
      svg: <ConsultationSvg />,
    },
    {
      title: "Order Placed",
      count: placeOrder,
      svg: <OrderSvg />,
    },
    {
      title: "Delivered orders",
      count: consultation,
      svg: <DeliverySvg />,
    },
  ];

  const handleShowData = value => {
    setvalue(value);
    if (!isUninitialized) {
      refetch(); //
    }
  };
  return (
    <div>
      {/* user stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {doctorStats?.map((stat, idx) => (
          <UserStatCard key={idx} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="mt-8 xl:mt-12 bg-white rounded-md px-3 md:px-10 xl:px-16 py-8 xl:py-10">
        <div className="w-full flex flex-col md:flex-row gap-5 mb-8 md:mb-0 items-center justify-between">
          <h2 className="font-semibold text-2xl sm:text-3xl text-categoryBtnColor">
            All order
          </h2>
          <div>
            <Select
              onValueChange={value => {
                handleShowData(value);
              }}
            >
              <SelectTrigger className="sm:w-40 border font-semibold text-base h-10 sm:h-12 rounded-full px-3 sm:px-8 font-nunito">
                <SelectValue placeholder="All Order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Order">All Order</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border rounded sm:border-none">
          <DashboardTable orders={allOrder} doctor={true} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardHomepage;
