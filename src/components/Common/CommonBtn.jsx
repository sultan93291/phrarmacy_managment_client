function CommonBtn({ text, arrowIcon, width, height, type, size }) {
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center rounded-[50px] w-fit text-lg sm:text-[20px] font-semibold ${type === "gradient" ? "btn-gradient" : "bg-white"
          } ${size === "small" ? "py-[8px] px-5 text-white" : "sm:py-4 px-3 py-1 sm:px-6"}`}
      >
        {text}
      </div>
      <div
        className={`flex items-center w-9 h-9 sm:w-12 sm:h-12 justify-center rounded-full ${type === "gradient" ? "btn-gradient" : "bg-white"
          }`}
      // style={{ width: width, height: height }}
      >
        <img className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]" src={arrowIcon} alt="arrowIcon" />
      </div>
    </div>
  );
}

export default CommonBtn;
