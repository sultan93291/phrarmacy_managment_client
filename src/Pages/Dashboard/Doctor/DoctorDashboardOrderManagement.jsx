import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
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
import { useState } from 'react';
const DoctorDashboardOrderManagement = () => {
  const totalPages = 8;
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <div>
      {/* filter*/}
      <div className="w-full flex items-center gap-10">
        {/* search bar */}
        <form
          action=""
          className="p-4 rounded-xl border border-black/10 w-full flex items-center justify-between max-w-xl bg-white"
        >
          <input
            className="focus:outline-none px-5 py-1 bg-transparent w-full"
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
            <SelectTrigger className="w-full border h-16 rounded-xl px-8 py-1 text-lg text-[#6B7280] font-md">
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

      {/* order table */}
      <div className="mt-12 bg-white rounded-md px-16 py-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-semibold text-3xl text-categoryBtnColor">
            All Order
          </h2>
        </div>

        <DashboardTable orders={orders} pharmacist={true} />

        {/* Pagination */}
        <div className="mt-20 border-t border-[#E5E7EB] w-full flex items-center justify-between py-6">
          <p className="text-[#374151]">Showing 1 to 10 of 97 results</p>

          {/* pagination btn */}
          <div className="h-10 border border-black/10 rounded-md flex items-center">
            <button
              disabled={activePage === 1}
              onClick={() => handlePageChange(Math.max(1, activePage - 1))}
              className="size-10 flex items-center justify-center border-r border-black/10 disabled:opacity-50"
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
                size-10 text-[#374151] border-r border-black/10 px-4 py-2
                transition-all duration-200 ease-in-out
                ${
                  activePage === pageNumber
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
              className="size-10 flex items-center justify-center disabled:opacity-50"
            >
              <NextSvg />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardOrderManagement;
