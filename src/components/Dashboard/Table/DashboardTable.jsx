/* eslint-disable react/prop-types */

import TableHead from './TableHead';
import TableBody from './TableBody';

const DashboardTable = ({ orders, status, doctor, pharmacist }) => {
  const headers = Object.keys(orders[0]);
  return (
    <div className="rounded-lg bg-white  md:rounded-xl lg:rounded-2xl">
      <div className="overflow-x-auto">
        <table className="  w-full font-inter md:mt-10">
          <thead>
            <TableHead titles={headers} status={status} />
          </thead>

          <tbody>
            <TableBody
              columns={headers}
              items={orders}
              status={status}
              doctor={doctor}
              pharmacist={pharmacist}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
