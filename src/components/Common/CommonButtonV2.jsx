function CommonButtonV2({ type = "fill", text, size, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`duration-200 ease-in-out text-[18px] font-medium ${
        type === "fill"
          ? "border border-primary bg-primary text-white hover:bg-transparent hover:text-primary"
          : "border bg-transparent text-primary hover:bg-primary hover:text-white"
    } lg:py-[10px] sm:py-2 py-1 lg:px-5 px-4 rounded-[40px]`}
    >
      {text}
    </button>
  );
}

export default CommonButtonV2;
