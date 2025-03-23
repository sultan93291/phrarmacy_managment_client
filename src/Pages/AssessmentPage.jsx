import CommonQuestionBox from "@/components/AssessmentPageComponents/CommonQuestionBox";
import FormHeader from "@/components/AssessmentPageComponents/FormHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import InnerSection from "@/components/Common/InnerSection";
import assesmentBg from "../assets/images/assesment-bg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAssesmentData } from "@/Redux/features/assesmentSlice";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { setAssesmentRedirect } from "@/Redux/features/loggedInUserSlice";
import toast from "react-hot-toast";

function AssessmentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [healthQuestion, sethealthQuestion] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [selectedValues, setSelectedValues] = useState({});

  const { isAuthenticated } = useContext(AuthContext);
  const medicineId = useSelector(state => state.assesmentSlice.medicineId);
  const assesMentId = useSelector(state => state.assesmentSlice.assesMentId);

  const loggedInUser = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  const dispatch = useDispatch();

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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    // const filteredData = Object.fromEntries(
    //   Object.entries(data).filter(
    //     ([_, value]) => value !== null && value !== ""
    //   )
    // );
    // console.log(filteredData);
    // const medicineData = { ...filteredData, id };

    const fieldkeys = Object.keys(data);

    let storeQuestion = [
      {
        assetment_id: "2",
        selected_option: null,
        notes: null,
      },
    ];

    const dataValue = fieldkeys.map(item => {
      const assetementId = item.split("_")[2];

      return {
        assetment_id: item.split("_")[2],
        selected_option: item.includes("radio_input") ? data[item] : null,
        notes: item.includes("note_input") ? data[item] : null,
      };
    });

    console.log("raw data", dataValue);

    const combinedData = [];

    dataValue.forEach(item => {
      const existingItem = combinedData.find(
        combinedItem => combinedItem.assetment_id === item.assetment_id
      );

      if (existingItem) {
        // Merge the properties
        if (item.selected_option !== null) {
          existingItem.selected_option = item.selected_option;
        }
        if (item.notes !== null) {
          existingItem.notes = item.notes;
        }
      } else {
        // Add the item to the combinedData array
        combinedData.push({ ...item });
      }
    });

    console.log("refined", dataValue);

    const finalData = combinedData.map((item, index) => {
      return {
        ...item,
        result: healthQuestion[index].answer,
      };
    });

    const AssesmentData = { id, finalData };

    console.log(AssesmentData);

    dispatch(setAssesmentData(AssesmentData));

    if (!isAuthenticated) {
      toast.success("Assesment saved successfully");
      dispatch(setAssesmentRedirect(`${`/treatment/consultation/${id}`}`));
      navigate("/auth/login");
    } else if (medicineId && assesMentId && isAuthenticated) {
      toast.success("Assesment saved successfully");
      window.location.href = `/medicine-details/${medicineId}/consultation/${assesMentId}`;
    } else {
      toast.success("Assesment saved successfully ");
      window.location.href = `/service/${id}`;
    }

    console.log("final", finalData);
  };

  useEffect(() => {
    const subscription = watch(value => {
      setSelectedValues(value); // Store watched values in state
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  console.log(selectedValues);

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
                question={`${item.id}. ${item.question}`}
              >
                <div
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="flex flex-col space-y-5"
                >
                  {/* radio buttons */}
                  <div className="flex items-center flex-wrap gap-5">
                    {item.options.map(option => (
                      <div key={option?.id}>
                        <input
                          className="peer hidden"
                          type="radio"
                          name={item.name} // Ensure consistency
                          id={`${item.id}-${option?.id}`} // Unique per option
                          {...register(`radio_input_${item.id}`, {
                            required: true,
                          })} // Register using item.name
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

                  {/* notes */}
                  {item.note && (
                    <div className="flex flex-col gap-2">
                      <label className="text-subtitleText">{item?.note}</label>
                      <textarea
                        className="rounded-xl h-20 resize-none border border-borderLight p-3 sm:p-4 text-sm"
                        placeholder="Write here.."
                        {...register(`note_input_${item.id}`, {
                          required: !!item.note,
                        })} // Register only if note exists
                      ></textarea>
                    </div>
                  )}

                  {/* hiddent input */}
                  {/* <input
                    type="text"
                    {...register("result")}
                    defaultValue={item.answer}
                  /> */}
                  {/* Error message if selected value matches condition */}
                  {console.log(item)}
                  {selectedValue === item.condition && (
                    <div className="py-2">
                      <span className="text-lg sm:text-xl  text-red-400">
                        {item?.condition_message}
                      </span>
                    </div>
                  )}
                </div>
              </CommonQuestionBox>
            );
          })}

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
