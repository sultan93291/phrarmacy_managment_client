import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import {
  NextSvg,
  PrevSvg,
  SearchSvg,
} from '@/components/SvgContainer/SvgContainer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetUserOrderIntentQuery } from '@/Redux/features/api/apiSlice';
import { useEffect, useState } from 'react';


const PharmacistOrderManagement = () => {
  const totalPages = 8;
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };


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
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10">
        {/* search bar */}
        <form
          action=""
          className="p-2 md:p-4 rounded-xl border border-black/10 w-full flex items-center justify-between max-w-xl bg-white"
        >
          <input
            className="focus:outline-none px-3 md:px-5 py-1 bg-transparent w-full"
            type="text"
            placeholder="Order ID Search"
            name="searchOrder"
            id="searchOrder"
          />
          <button>
            <SearchSvg />
          </button>
        </form>

        {/* select */}
        <div>
          <Select>
            <SelectTrigger className="w-full border h-12 md:h-16 rounded-xl px-8 py-1 text-lg text-[#6B7280] font-md">
              <SelectValue placeholder="All Order" />
            </SelectTrigger>
            <SelectContent className={'font-medium'}>
              <SelectItem value="All Order">All Order</SelectItem>
              <SelectItem value="Recent">Recent</SelectItem>
              <SelectItem value="Old">Old</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Table */}
      <div className="mt-10 sm:hidden">
        <DashboardTitle title="All Order" />
      </div>
      <div className="bg-white border sm:border-none rounded-md sm:px-5 md:px-16 sm:py-10 mt-10">
        <div className="hidden sm:block">
          <DashboardTitle title="All Order" />
        </div>
        <DashboardTable orders={allOrder} pharmacist={true} />
      </div>
      {/* Pagination */}
      <div className="sm:mt-20 mt-10 border-t border-[#E5E7EB] w-full flex flex-col md:flex-row gap-5 items-center justify-between py-6">
        <p className="text-[#374151]">Showing 1 to 10 of 97 results</p>

        {/* pagination btn */}
        <div className="h-10 rounded-md flex gap-1 justify-center sm:justify-start flex-wrap items-center">
          <button
            disabled={activePage === 1}
            onClick={() => handlePageChange(Math.max(1, activePage - 1))}
            className="size-10 flex items-center border border-black/10 justify-center disabled:opacity-50"
          >
            <PrevSvg />
          </button>

          {/* btns */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`
        size-10 text-[#374151] border border-black/10 px-4 py-2
        transition-all duration-200 ease-in-out
        ${activePage === pageNumber
                    ? 'bg-primary !text-white'
                    : 'hover:bg-primary hover:!text-white'
                  }
      `}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            disabled={activePage === totalPages}
            onClick={() =>
              handlePageChange(Math.min(totalPages, activePage + 1))
            }
            className="size-10 flex border border-black/10 items-center justify-center disabled:opacity-50"
          >
            <NextSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmacistOrderManagement;
