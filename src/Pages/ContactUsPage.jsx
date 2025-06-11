import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const onSubmit = async data => {
    setLoading(true);
    try {
      const response = await axios.post(`${SiteURl}/api/contact`, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error sending message:", error.response || error.message);
      toast.error(error.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-10  flex flex-col justify-center items-center ">
      <div className="container w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        <div className="pb-4 text-center">
          <h3
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-3xl sm:text-4xl font-bold pb-2 text-[#232323]"
          >
            Contact Us
          </h3>
          <p
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-[#696969] text-sm sm:text-base"
          >
            Reach out to MY Health Needs London with your questions or feedback
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="bg-white pt-4 space-y-6">
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
              <input
                type="text"
                id="name"
                name="name"
                className="peer bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none text-sm sm:text-base"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              <label
                htmlFor="name"
                className="absolute cursor-text left-0 -top-3 text-xs sm:text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-xs sm:peer-focus:text-sm transition-all"
              >
                Full Name
              </label>
              {errors.name && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
              <input
                type="email"
                id="email"
                name="email"
                className="peer bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none text-sm sm:text-base"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <label
                htmlFor="email"
                className="absolute cursor-text left-0 -top-3 text-xs sm:text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-xs sm:peer-focus:text-sm transition-all"
              >
                Email
              </label>
              {errors.email && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
              <input
                type="text"
                id="subject"
                name="subject"
                className="peer bg-transparent h-12 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 ring-gray-300 focus:ring-[#367AFF] focus:outline-none text-sm sm:text-base"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              <label
                htmlFor="subject"
                className="absolute cursor-text left-0 -top-3 text-xs sm:text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-xs sm:peer-focus:text-sm transition-all"
              >
                Subject
              </label>
              {errors.subject && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="relative bg-inherit"
            >
              <textarea
                id="message"
                name="message"
                className="peer bg-transparent h-32 w-full rounded-md text-[#232323] placeholder-transparent ring-1 px-4 py-3 ring-gray-300 focus:ring-[#367AFF] focus:outline-none text-sm sm:text-base"
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long",
                  },
                })}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute cursor-text left-0 -top-3 text-xs sm:text-sm text-[#232323] bg-inherit mx-1 px-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#367AFF] peer-focus:text-xs sm:peer-focus:text-sm transition-all"
              >
                Message
              </label>
              {errors.message && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <div data-aos="zoom-up" data-aos-duration="2000" className="pt-6">
            <button className="bg-primary text-white font-semibold w-full py-4 rounded-lg text-sm sm:text-base">
              {loading ? (
                <ClipLoader color="#fff" loading={loading} size={25} />
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
