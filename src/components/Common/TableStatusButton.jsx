/* eslint-disable react/prop-types */
// ${title === 'completed' ? 'bg-[#D1FAE5] text-[#065F46] border-[#6EE7B7] border' : ''}
const TableStatusButton = ({ title }) => {
    const buttonClass = `
      rounded-md px-3 font-medium  capitalize w-28
      ${title === 'pending' ? 'bg-[#DBEAFE] text-[#1E40AF] border-[#93C5FD] border' : ''}
      ${title === 'delivered' ? 'bg-[#D1FAE5] text-[#065F46] border-[#6EE7B7] border' : ''}
      ${title === 'cancelled' ? 'bg-[#FCE7F3] text-[#9D174D] border-[#F9A8D4] border' : ''}
    `;

    return <button className={buttonClass.trim()}>{title}</button>;
  };

  export default TableStatusButton;

