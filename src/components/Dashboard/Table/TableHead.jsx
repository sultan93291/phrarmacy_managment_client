/* eslint-disable react/prop-types */
const TableHead = ({ titles, status }) => {
  return (
    <tr className="bg-[#F2F3F4] text-sm font-bold text-[#222E48CC] md:text-base lg:text-lg">
      {titles.map((title, idx) => (
        <th
          key={idx}
          className="px-4 py-2 text-left md:px-5 md:py-4 capitalize"
        >
          {title.replace(/([A-Z])/g, ' $1')}
        </th>
      ))}
      {status && (
        <th className="px-4 py-2 text-left md:px-5 md:py-4 capitalize">
          Status
        </th>
      )}
    </tr>
  );
};

export default TableHead;
