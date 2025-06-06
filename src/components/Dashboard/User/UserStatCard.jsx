/* eslint-disable react/prop-types */

const UserStatCard = ({ stat }) => {
  return (
    <div className="flex items-center gap-5 xl:gap-8 bg-white p-4 xl:p-6 rounded-lg">
      {/* icon */}
      <div
        className={`p-4 xl:p-5 rounded-md flex items-center justify-center ${
          stat?.title == "Consultation Completed"
            ? "bg-[#DCFFFC]"
            : stat?.title == "Order Placed"
            ? "bg-[#FFF1D3]"
            : "bg-[#CFD3FF]"
        }`}
      >
        {stat?.svg}
      </div>

      {/* title */}
      <div className="text-[#074673] text-lg sm:text-xl xl:text-2xl font-semibold space-y-1">
        {/* count */}
        <p>{stat?.count}</p>
        <h3 className="text-base sm:text-xl">{stat?.title}</h3>
      </div>
    </div>
  );
};

export default UserStatCard;
