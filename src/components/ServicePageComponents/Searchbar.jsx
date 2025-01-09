import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

function Searchbar() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="w-full py-[22px] pl-[50px] pr-[70px] bg-[#F9F9F9] rounded-[10px] border border-[rgba(0,0,0,0.10)] focus:outline-none text-[24px]"
        name="treatmentSerach"
        {...register("treatmentSerach")}
        placeholder="Search Treatments"
      />
      <button type="submit" className="absolute text-[28px] top-1/2 right-[70px] translate-y-[-50%] opacity-50">
        <IoSearchOutline />
      </button>
    </form>
  );
}

export default Searchbar;
