import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SignupPage() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [date, setDate] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({...data, date});

  return (
    <div className="min-h-[800px] flex justify-center items-center">
      <div className="container w-4/12">
        <div className="pb-4">
          <h3 data-aos="zoom-up" data-aos-duration="2000" className="text-4xl font-bold pb-2 text-[#232323]">Sign Up</h3>
          <p data-aos="zoom-up" data-aos-duration="2000" className="text-[#969696]">
            Sign up to enjoy the feature of MyLondonPharmacy
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* input */}
          <div className="bg-white pt-4 space-y-6 rounded-lg">
            <div data-aos="zoom-up" data-aos-duration="2000" className="relative bg-inherit">
              <input
                type="text"
                id="name"
                name="name"
                className="peer bg-transparent h-12  w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none "
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <label
                htmlFor="name"
                className="absolute cursor-text left-0 -top-3 text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-sm transition-all"
              >
                Your Name
              </label>
            </div>
            <div data-aos="zoom-up" data-aos-duration="2000" className="relative bg-inherit">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start py-6 border-none ring-1 ring-gray-300 text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div data-aos="zoom-up" data-aos-duration="2000" className="relative bg-inherit">
              <input
                type="email"
                id="email"
                name="email"
                className="peer bg-transparent h-12  w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none "
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <label
                htmlFor="email"
                className="absolute cursor-text left-0 -top-3 text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-sm transition-all"
              >
                Email
              </label>
            </div>
            <div data-aos="zoom-up" data-aos-duration="2000" className="relative bg-inherit">
              <input
                type={toggle ? "password" : "text"}
                id="password"
                name="password"
                className="peer  bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none "
                placeholder="******"
                {...register("password", { required: true })}
              />
              <label
                htmlFor="password"
                className="absolute cursor-text left-0 -top-3 text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-sm transition-all"
              >
                Password
              </label>
              {toggle ? (
                <AiOutlineEyeInvisible
                  onClick={() => setToggle(false)}
                  size={24}
                  className="absolute cursor-pointer text-gray-400 top-0 right-5 translate-y-1/2"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setToggle(true)}
                  size={24}
                  className="absolute text-gray-400 top-0 cursor-pointer right-5 translate-y-1/2"
                />
              )}
            </div>
            <div data-aos="zoom-up" data-aos-duration="2000" className="relative bg-inherit">
              <input
                type={toggle2 ? "password" : "text"}
                id="confirm_password"
                name="confirm_password"
                className="peer  bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none "
                placeholder="******"
                {...register("confirm_password", { required: true })}
              />
              <label
                htmlFor="confirm_password"
                className="absolute cursor-text left-0 -top-3 text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-sm transition-all"
              >
                Confirm Password
              </label>
              {toggle2 ? (
                <AiOutlineEyeInvisible
                  onClick={() => setToggle2(false)}
                  size={24}
                  className="absolute cursor-pointer text-gray-400 top-0 right-5 translate-y-1/2"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setToggle2(true)}
                  size={24}
                  className="absolute text-gray-400 top-0 cursor-pointer right-5 translate-y-1/2"
                />
              )}
            </div>
          </div>
          {/* button */}
          <div data-aos="zoom-up" data-aos-duration="2000" className="pt-6">
            <button className="bg-primary text-white font-semibold w-full py-4 rounded-lg">
            Sign up
            </button>
          </div>
        </form>

        <div data-aos="zoom-up" data-aos-duration="2000" className="flex items-center py-5 gap-2 w-full">
          <div className="flex-1 border-[0.5px] border-[#D9D9D9]"></div>
          <span className="text-[#6E6E6E]">or</span>
          <div className="flex-1 border-[0.5px] border-[#D9D9D9]"></div>
        </div>

        <div data-aos="zoom-up" data-aos-duration="2000" className=" w-full">
          <button className="flex w-full justify-center py-4 border rounded-lg items-center gap-3">
            <h4 className="text-lg font-semibold text-[#232323]">
              Sign in with Google
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.16 9.19323C17.16 8.5905 17.1059 8.01095 17.0055 7.45459H9V10.7425H13.5746C13.3775 11.8051 12.7786 12.7053 11.8784 13.308V15.4407H14.6255C16.2327 13.961 17.16 11.7819 17.16 9.19323Z"
                fill="#4285F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.00217 17.5C11.2972 17.5 13.2213 16.7389 14.6276 15.4407L11.8806 13.308C11.1194 13.818 10.1458 14.1193 9.00217 14.1193C6.7883 14.1193 4.91444 12.6241 4.24603 10.615H1.40625V12.8173C2.80489 15.5953 5.67944 17.5 9.00217 17.5Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.24387 10.6151C4.07387 10.105 3.97728 9.56028 3.97728 9.00005C3.97728 8.43982 4.07387 7.89505 4.24387 7.38505V5.18277H1.40409C0.82841 6.33027 0.5 7.62846 0.5 9.00005C0.5 10.3716 0.82841 11.6698 1.40409 12.8173L4.24387 10.6151Z"
                fill="#FBBC05"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.00217 3.88072C10.2501 3.88072 11.3706 4.30958 12.2515 5.15186L14.6895 2.7139C13.2174 1.3423 11.2933 0.500031 9.00217 0.500031C5.67944 0.500031 2.80489 2.40481 1.40625 5.18277L4.24603 7.38504C4.91444 5.37595 6.7883 3.88072 9.00217 3.88072Z"
                fill="#EA4335"
              />
            </svg>
          </button>
        </div>

        <div data-aos="zoom-up" data-aos-duration="2000" className="flex justify-center items-center pt-5">
          <h4 className="text-[#6C6C6C]">
          Already have an account?{" "}
            <Link to={"/auth/login"} className="text-[#367AFF] font-medium">
            Sign in
            </Link>
          </h4>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-duration="2000" className="w-7/12 p-20">
        <img
          className="w-full"
          src="https://i.ibb.co.com/1RHw2mj/aa0ada24ef439cbe3b561d248f33efd6.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SignupPage;
