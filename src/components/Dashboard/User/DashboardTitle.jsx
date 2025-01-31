/* eslint-disable react/prop-types */
const DashboardTitle = ({ title }) => {
  return (
    <div className="text-categoryBtnColor">
      <h2 className="font-semibold mb-5 text-2xl sm:text-3xl">{title}</h2>
    </div>
  );
};

export default DashboardTitle;
