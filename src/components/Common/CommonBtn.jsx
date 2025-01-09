function CommonBtn({ text, arrowIcon, width, height, type, size }) {
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center rounded-[50px] w-fit text-[20px] font-semibold ${
          type === "gradient" ? "btn-gradient" : "bg-white"
        } ${size === "small" ? "py-[8px] px-5 text-white" : "py-4 px-6"}`}
      >
        {text}
      </div>
      <div
        className={`flex items-center justify-center rounded-full w-fit ${
          type === "gradient" ? "btn-gradient" : "bg-white"
        }`}
        style={{ width: width, height: height }}
      >
        <img className="h-[30px] w-[30px]" src={arrowIcon} alt="arrowIcon" />
      </div>
    </div>
  );
}

export default CommonBtn;
