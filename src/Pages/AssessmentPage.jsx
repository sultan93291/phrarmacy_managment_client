import CommonQuestionBox from "@/components/AssessmentPageComponents/CommonQuestionBox";
import FormHeader from "@/components/AssessmentPageComponents/FormHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import InnerSection from "@/components/Common/InnerSection";
import assesmentBg from "../assets/images/assesment-bg.png";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAssesmentData } from "@/Redux/features/assesmentSlice";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { setAssesmentRedirect } from "@/Redux/features/loggedInUserSlice";
import toast from "react-hot-toast";

function AssessmentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [healthQuestion, sethealthQuestion] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [selectedValues, setSelectedValues] = useState({});
  const [isDisabled, setisDisabled] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
  const medicineId = useSelector(state => state.assesmentSlice.medicineId);
  const assesMentId = useSelector(state => state.assesmentSlice.assesMentId);
  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );
  const dispatch = useDispatch();

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = e => {
    setTermsAccepted(e.target.checked);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SiteURl}/api/treatment/${id}/consultation`,
    })
      .then(res => {
        sethealthQuestion(res.data.data.assessments);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (isDisabled === true) {
      return toast.error(
        "Assessment indicates you're not eligible to purchase this medicine."
      );
    } else if (!termsAccepted) {
      return toast.error("Please accept the terms and conidtion to continue ");
    }

    const fieldkeys = Object.keys(data);
    const dataValue = fieldkeys.map(item => {
      const assetementId = item.split("_")[2];

      return {
        assetment_id: assetementId,
        selected_option: item.includes("radio_input") ? data[item] : null,
        notes: item.includes("note_input") ? data[item] : null,
      };
    });

    const combinedData = [];
    dataValue.forEach(item => {
      const existingItem = combinedData.find(
        combinedItem => combinedItem.assetment_id === item.assetment_id
      );
      if (existingItem) {
        if (item.selected_option !== null) {
          existingItem.selected_option = item.selected_option;
        }
        if (item.notes !== null) {
          existingItem.notes = item.notes;
        }
      } else {
        combinedData.push({ ...item });
      }
    });

    const finalData = combinedData.map((item, index) => ({
      ...item,
      result: healthQuestion[index].answer,
    }));

    const AssesmentData = { id, finalData };
    dispatch(setAssesmentData(AssesmentData));

    const redirectPath =
      medicineId && assesMentId
        ? `/medicine-details/${medicineId}/consultation/${assesMentId}`
        : `/service/${id}`;

    if (!isAuthenticated) {
      toast.success("Assessment saved successfully");
      localStorage.setItem("AssesMentRedirectPath", redirectPath);
      localStorage.setItem("AssesMentRedirectId", id);
      dispatch(setAssesmentRedirect(redirectPath));
      navigate("/auth/login");
    } else {
      toast.success("Assessment saved successfully");
      navigate(redirectPath);
    }
  };

  useEffect(() => {
    const subscription = watch(value => {
      setSelectedValues(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const watchedValues = watch();
  const isConditionMatched = healthQuestion.some(item => {
    const selectedValue = watchedValues[`radio_input_${item.id}`];
    return selectedValue === item.condition;
  });

  useEffect(() => {
    setisDisabled(isConditionMatched);
  }, [isConditionMatched]);

  return (
    <div className="font-dmsans">
      <InnerSection bgImg={assesmentBg} service="Treatment" />
      <div data-aos="zoom-up" data-aos-duration="2000" className="container ">
        <FormHeader></FormHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-8 sm:py-14 space-y-2.5"
        >
          {healthQuestion.map((item, index) => {
            const selectedValue = watch(`radio_input_${item.id}`);
            return (
              <CommonQuestionBox
                key={index}
                question={`${index + 1}. ${item.question}`}
              >
                <div
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="flex flex-col space-y-5"
                >
                  {/* radio buttons */}
                  <div className="flex items-center flex-wrap gap-5">
                    {item.options.map((option, idx) => (
                      <div key={option?.id}>
                        <input
                          className="peer hidden"
                          type="radio"
                          name={item.name}
                          id={`${item.id}-${option?.id}`}
                          {...register(`radio_input_${item.id}`, {
                            required: true,
                          })}
                          value={option.value}
                        />
                        <label
                          className="px-4 text-xs sm:text-base sm:px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 sm:py-1.5 text-primary rounded-full bg-[#DEF0FF]"
                          htmlFor={`${item.id}-${option?.id}`}
                        >
                          {option.value}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* radio error */}
                  {errors[`radio_input_${item.id}`] && (
                    <p className="text-sm text-red-500">
                      This question is required.
                    </p>
                  )}

                  {/* notes */}
                  {item.note && (
                    <div className="flex flex-col gap-2">
                      <label className="text-subtitleText">{item?.note}</label>
                      {item?.note?.toLowerCase() === "kilograms" ||
                      item?.note?.toLowerCase() === "kg" ? (
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            inputMode="decimal"
                            className="rounded-xl h-12 border border-borderLight p-3 sm:p-4 text-sm"
                            placeholder="Write here..."
                            {...register(`note_input_${item.id}`, {
                              required: "This field is required",
                              validate: value =>
                                /^(\d+(\.\d+)?|\.\d+)$/.test(value.trim()) ||
                                "Please enter a valid decimal number",
                            })}
                            onKeyDown={e => {
                              const allowedKeys = [
                                "Backspace",
                                "Tab",
                                "ArrowLeft",
                                "ArrowRight",
                                "Delete",
                                "Home",
                                "End",
                              ];
                              const isNumber = /^[0-9.]$/.test(e.key);
                              if (!isNumber && !allowedKeys.includes(e.key)) {
                                e.preventDefault();
                              }
                              if (
                                e.key === "." &&
                                e.currentTarget.value.includes(".")
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {/* note error */}
                          {errors[`note_input_${item.id}`] && (
                            <p className="text-sm text-red-500">
                              {errors[`note_input_${item.id}`]?.message ||
                                "This field is required"}
                            </p>
                          )}
                        </div>
                      ) : (
                        <>
                          <textarea
                            className="rounded-xl h-20 resize-none border border-borderLight p-3 sm:p-4 text-sm"
                            placeholder="Write here.."
                            {...register(`note_input_${item.id}`, {
                              required: !!item.note,
                            })}
                          ></textarea>
                          {errors[`note_input_${item.id}`] && (
                            <p className="text-sm text-red-500">
                              This field is required.
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {/* condition message */}
                  {selectedValue === item.condition && (
                    <div className="py-2">
                      <span className="text-lg sm:text-xl text-red-400">
                        {item?.condition_message}
                      </span>
                    </div>
                  )}
                </div>
              </CommonQuestionBox>
            );
          })}

          <div className="flex flex-col gap-y-6">
            <div className="flex items-center pt-6 gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={handleTermsChange}
              />
              <label
                htmlFor="terms"
                className="text-lg sm:text-xl text-subtitleText "
              >
                I confirm that{" "}
                <span className="text-primary">I am over 18 </span> and{" "}
                <span className="text-primary" >agree to the following </span>: *
              </label>
            </div>
            <ul className="flex flex-col gap-y-3  text-black list-disc pl-5 text-sm sm:text-lg text-subtitleText ">
              <li>
                I will read the patient information leaflet supplied with my
                medication.
              </li>
              <li>
                I will contact you and inform my GP if I experience any side
                effects, start new medication, or if my medical conditions
                change during treatment.
              </li>
              <li>The treatment is solely for my own use.</li>
              <li>
                I have answered all questions accurately and truthfully, and I
                understand that your prescribers rely on my answers to make
                informed decisions. I understand that providing incorrect
                information may be harmful to my health.
              </li>
              <li>I agree to the Terms and Conditions.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-5 sm:pt-10">
            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              type="submit"
              className="px-8 sm:px-12 py-3.5 rounded-full text-white bg-[#FF6D2E]"
            >
              Proceed
            </button>
            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="px-10 sm:px-14 py-3.5 rounded-full text-primary bg-[#EFF8FF] max-w-[157px]"
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
