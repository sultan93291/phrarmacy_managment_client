import { setLoggedInUserData } from "@/Redux/features/loggedInUserSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";

function LoginPage() {
  const [toggle, setToggle] = useState(true);
  const loggedInUserData = useSelector(
    state => state.loggedInuserSlice?.loggedInUserData
  );
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  console.log(loggedInUserData);
  const navigate = useNavigate();
  const { fetchData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const medicineId = useSelector(state => state.assesmentSlice.medicineId);
  const assesMentId = useSelector(state => state.assesmentSlice.assesMentId);

  console.log(medicineId, " medicine id");
  console.log("assesement id ,", assesMentId);

  const onSubmit = data => {
    setLoading(true);
    const AssesmentRedirect = localStorage.getItem("AssesMentRedirectid");
    axios
      .post(`${SiteURl}/api/login`, {
        email: data?.email,
        password: data?.password,
      })
      .then(res => {
        console.log(res); // Log response to see the data
        toast.success(res?.data?.message);
        setLoading(false);

        // Dispatch action to store user data in Redux
        dispatch(setLoggedInUserData(res?.data));
        localStorage.setItem("token", res?.data?.token);
        setTimeout(() => {
          if (medicineId) {
            fetchData();
            window.location.href = `/medicine-details/${medicineId}/consultation/${assesMentId}`;
          } else if (AssesmentRedirect) {
            fetchData();
            window.location.href = `/service/${AssesmentRedirect}`;
            setTimeout(() => {
              localStorage.removeItem("AssesmentRedirect");
            }, 3000);
          } else {
            fetchData();
            window.location.href = "/dashboard/user/user-homepage";
          }
        }, 1500);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: response => {
      console.log("Google login success:", response);

      console.log(response);
      
      return
      const token = response?.access_token;

      if (token) {
        console.log(token);

        axios({
          method: "POST",
          url: `${SiteURl}/api/social-login`,
          data: {
            token: token,
            provider: "google",
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => {
            console.log("API Response:", res);
            if (res.data && res.data.token) {
              localStorage.setItem("token", res.data.token);
              toast.success("successfully logged in");
              setTimeout(() => {
                if (medicineId) {
                  fetchData();
                  window.location.href = `/medicine-details/${medicineId}/consultation/${assesMentId}`;
                } else {
                  fetchData();
                  window.location.href = "/dashboard/user/user-homepage";
                }
              }, 3000);
            }
          })
          .catch(error => {
            console.error("Error during API request:", error);
            toast.success(error.data.message);
          });
      } else {
        console.error("No token received from Google login.");
        toast.error("Token not found");
      }
    },
    onError: error => {
      console.error("Google Login Failed:", error);
    },
  });

  return (
    <div className="pt-28 sm:py-10 flex flex-col lg:flex-row justify-center items-center">
      <div className="container lg:w-4/12">
        <div data-aos="zoom-up" data-aos-duration="2000">
          <h3
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-4xl font-bold pb-2 text-[#232323]"
          >
            Sign in
          </h3>
          <p
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-[#969696]"
          >
            Please login to continue to your account.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* input */}
          <div className="bg-white pt-4 space-y-6 rounded-lg">
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
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
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
              <input
                type={toggle ? "password" : "text"}
                id="password"
                name="password"
                className="peer  bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 pe-12 ps-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none "
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
          </div>
          {/* checkbox */}

          {/* button */}
          <div data-aos="zoom-up" data-aos-duration="2000" className="pt-6">
            <button className="bg-primary text-lg text-white font-semibold w-full py-4 rounded-lg">
              {loading ? (
                <ClipLoader color="#fff" loading={loading} size={25} />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <div
          data-aos="zoom-up"
          data-aos-duration="2000"
          className="flex items-center py-5 gap-2 w-full"
        >
          <div className="flex-1 border border-[#D9D9D9]"></div>
          <span className="text-[#6E6E6E]">or</span>
          <div className="flex-1 border border-[#D9D9D9]"></div>
        </div>

        <div
          onClick={() => {
            handleLoginWithGoogle();
          }}
          data-aos="zoom-up"
          data-aos-duration="2000"
          className=" w-full"
        >
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

        <div
          data-aos="zoom-up"
          data-aos-duration="2000"
          className="flex justify-center items-center pt-5"
        >
          <h4 className="text-[#6C6C6C]">
            Need an account?{" "}
            <Link to={"/auth/signup"} className="text-[#367AFF] font-medium">
              Create one
            </Link>
          </h4>
        </div>
      </div>

      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="lg:w-7/12 hidden md:block p-20"
      >
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="w-full"
          src="https://i.ibb.co.com/1RHw2mj/aa0ada24ef439cbe3b561d248f33efd6.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPage;
