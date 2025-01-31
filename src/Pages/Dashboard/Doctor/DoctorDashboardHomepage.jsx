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
import { useGetPharmaCistOverViewDataIntentQuery, useGetUserOrderIntentQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";


const DoctorDashboardHomepage = () => {
  const orders = [
    {
      orderId: "#101",
      orderDate: "12/11/24",
      deliveryDate: "18/11/24",
      price: 450,
      status: "delivered",
    },
    {
      orderId: "#102",
      orderDate: "13/11/24",
      deliveryDate: "20/11/24",
      price: 250,
      status: "pending",
    },
    {
      orderId: "#103",
      orderDate: "10/11/24",
      deliveryDate: "15/11/24",
      price: 550,
      status: "delivered",
    },
    {
      orderId: "#104",
      orderDate: "09/11/24",
      deliveryDate: "14/11/24",
      price: 300,
      status: "pending",
    },
    {
      orderId: "#105",
      orderDate: "11/11/24",
      deliveryDate: "16/11/24",
      price: 400,
      status: "delivered",
    },
    {
      orderId: "#106",
      orderDate: "08/11/24",
      deliveryDate: "13/11/24",
      price: 500,
      status: "delivered",
    },
    {
      orderId: "#107",
      orderDate: "14/11/24",
      deliveryDate: "19/11/24",
      price: 600,
      status: "delivered",
    },
    {
      orderId: "#108",
      orderDate: "07/11/24",
      deliveryDate: "12/11/24",
      price: 350,
      status: "delivered",
    },
    {
      orderId: "#109",
      orderDate: "15/11/24",
      deliveryDate: "20/11/24",
      price: 450,
      status: "pending",
    },
    {
      orderId: "#110",
      orderDate: "06/11/24",
      deliveryDate: "11/11/24",
      price: 700,
      status: "delivered",
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


   const {
      data: overviewData,
      error: overViewerror,
      isLoading: isOverviewLoading,
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
        console.log(overviewData?.data, "i'm getting overview data");
  
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
  return (
    <div>
      {/* user stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {doctorStats?.map((stat, idx) => (
          <UserStatCard key={idx} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="mt-8 xl:mt-12 bg-white rounded-md px-5 md:px-10 xl:px-16 py-8 xl:py-10">
        <div className="w-full flex flex-col md:flex-row gap-5 mb-8 items-center justify-between">
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

        <DashboardTable orders={allOrder} doctor={true} />
      </div>
    </div>
  );
};

export default DoctorDashboardHomepage;
