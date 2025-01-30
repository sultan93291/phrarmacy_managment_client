import CommonQuestionBox from "@/components/AssessmentPageComponents/CommonQuestionBox";
import FormHeader from "@/components/AssessmentPageComponents/FormHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import InnerSection from "@/components/Common/InnerSection";
import assesmentBg from "../assets/images/assesment-bg.png";
import { useEffect, useState } from "react";
import axios from "axios";

function AssessmentPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { id } = useParams();
  const [healthQuestion, sethealthQuestion] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SiteURl}/api/treatment/${id}/consultation`,
    })
      .then(res => {
        console.log(res.data.data.assessments);
        sethealthQuestion(res.data.data.assessments);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    // navigate("/medicine-details");
  };

  return (
    <div className="font-dmsans">
      <InnerSection bgImg={assesmentBg} service="Treatment" />
      <div data-aos="zoom-up" data-aos-duration="2000" className="container ">
        <FormHeader></FormHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="py-14 space-y-2.5">
          {healthQuestion.map((item, index) => {
            return (
              <CommonQuestionBox
                key={index}
                question={`${item.id}. ${item.question}`}
              >
                <div
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="flex flex-col space-y-5"
                >
                  <div className="flex items-center flex-wrap gap-5">
                    {item.options.map((option, optionIndex) => {
                      return (
                        <div key={option?.id}>
                          <input
                            className="peer hidden"
                            type="radio"
                            name={`${item.id}-${option?.name}`} // Make the name unique per question
                            id={`${item?.id}-${option?.name}-${option?.id}`}
                            {...register(`${item.id}-${option?.name}`, {
                              required: true,
                            })}
                          />
                          <label
                            className="px-3 text-xs sm:text-base sm:px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 sm:py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                            htmlFor={`${item?.id}-${option?.name}-${option?.id}`}
                          >
                            {option.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  {item.note && (
                    <div className="flex flex-col gap-2">
                      <label className="text-subtitleText" htmlFor="">
                        {item?.note}
                      </label>
                      <textarea
                        className="rounded-xl h-20 resize-none border border-borderLight p-4 text-sm "
                        placeholder="Write here.."
                        name={`${item.id}-note`} // Make this unique per question too
                        id=""
                        {...register(`${item.id}-note`, {
                          required: true,
                        })}
                      ></textarea>
                    </div>
                  )}
                </div>
              </CommonQuestionBox>
            );
          })}

          <div className="flex items-center gap-4 pt-10">
            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              type="submit"
              className="px-12 py-3.5 rounded-full text-white bg-[#FF6D2E]"
            >
              Proceed
            </button>
            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="px-12 py-3.5 rounded-full text-primary  bg-[#EFF8FF]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssessmentPage;
