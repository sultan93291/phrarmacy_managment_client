

function CommonButtonV2({type="fill", text, size}) {
  return (
    <button className={`duration-200 ease-in-out text-[18px] font-medium ${type === 'fill' ? 'border border-primary bg-primary text-white hover:bg-transparent hover:text-primary' : 'border bg-transparent text-primary hover:bg-primary hover:text-white'} py-[10px] px-5 rounded-[40px]`}>
        {text}
    </button>
  )
}

export default CommonButtonV2