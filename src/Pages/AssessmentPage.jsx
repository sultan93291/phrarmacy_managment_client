import CommonQuestionBox from '@/components/AssessmentPageComponents/CommonQuestionBox';
import FormHeader from '@/components/AssessmentPageComponents/FormHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InnerSection from '@/components/Common/InnerSection';
import assesmentBg from '../assets/images/assesment-bg.png';

function AssessmentPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/medicine-details');
  };

  return (
    <div className="font-dmsans">
      <InnerSection bgImg={assesmentBg} service="Treatment" />
      <div data-aos="zoom-up" data-aos-duration="2000" className="container ">
        <FormHeader></FormHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="py-14 space-y-2.5">
          <CommonQuestionBox question={'1. What is your biological sex?'}>
            <div className="flex items-center gap-4">
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'male'}
                  name="sex"
                  id="male"
                  {...register('sex', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="male"
                >
                  Male
                </label>
              </div>
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'female'}
                  name="sex"
                  id="female"
                  {...register('sex', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="female"
                >
                  Female
                </label>
              </div>
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'others'}
                  name="sex"
                  id="others"
                  {...register('sex', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="others"
                >
                  Others
                </label>
              </div>
            </div>
          </CommonQuestionBox>
          <CommonQuestionBox
            question={
              '2. Do you believe you have the ability to make healthcare decisions for yourself?'
            }
          >
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex flex-col space-y-5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'yes'}
                    name="ability"
                    id="ability-yes"
                    {...register('ability', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="ability-yes"
                  >
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'no'}
                    name="ability"
                    id="ability-no"
                    {...register('ability', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="ability-no"
                  >
                    No
                  </label>
                </div>
              </div>
              <div
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="flex flex-col gap-2"
              >
                <label className="text-subtitleText" htmlFor="">
                  Give us additional information please.
                </label>
                <textarea
                  className="rounded-xl h-20 resize-none border border-borderLight p-4 text-sm "
                  placeholder="Write here.."
                  name="abilityAdditionalInfo"
                  id=""
                  {...register('abilityAdditionalInfo', { required: true })}
                ></textarea>
              </div>
            </div>
          </CommonQuestionBox>
          <CommonQuestionBox
            question={
              '3. Are you taking any medications currently? This includes both prescription-only and over-the-counter medications, as well as homoeopathic remedies.'
            }
          >
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex flex-col space-y-5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'yes'}
                    name="currentlyUse"
                    id="currentlyUse-yes"
                    {...register('currentlyUse', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="currentlyUse-yes"
                  >
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'no'}
                    name="currentlyUse"
                    id="currentlyUse-no"
                    {...register('currentlyUse', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="currentlyUse-no"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </CommonQuestionBox>
          <CommonQuestionBox question={'2. How much do you weight?'}>
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-subtitleText" htmlFor="kilograms">
                  Kilograms
                </label>
                <input
                  placeholder="Enter you weight"
                  className="px-3 text-sm py-3 rounded-lg border border-borderLight"
                  type="number"
                  name="kilograms"
                  id="kilograms"
                  {...register('kilograms', { required: true })}
                />
              </div>
            </div>
          </CommonQuestionBox>
          <CommonQuestionBox question={'5. What is your Blood Pressure?'}>
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex items-center gap-4"
            >
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'low'}
                  name="bloodPressure"
                  id="blood-pressure-low"
                  {...register('bloodPressure', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="blood-pressure-low"
                >
                  Low (below 90/60)
                </label>
              </div>
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'normal'}
                  name="bloodPressure"
                  id="blood-pressure-normal"
                  {...register('bloodPressure', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="blood-pressure-normal"
                >
                  Normal (between 90/60 ad 140/90)
                </label>
              </div>
              <div>
                <input
                  className="peer hidden"
                  type="radio"
                  value={'high)'}
                  name="bloodPressure"
                  id="blood-pressure-high"
                  {...register('bloodPressure', { required: true })}
                />
                <label
                  className="px-4 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-2 text-primary rounded-full bg-[#DEF0FF] "
                  htmlFor="blood-pressure-high"
                >
                  High (above 140/90)
                </label>
              </div>
            </div>
          </CommonQuestionBox>
          <CommonQuestionBox
            question={
              '2. Would you like us to inform your GP or doctor about this consultation and any prescribed treatments? (A yes response is required for weight loss medication)'
            }
          >
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="flex flex-col space-y-5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'yes'}
                    name="gpDoctorConsultation"
                    id="gp-doctor-consultation-yes"
                    {...register('gpDoctorConsultation', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="gp-doctor-consultation-yes"
                  >
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    className="peer hidden"
                    type="radio"
                    value={'no'}
                    name="gpDoctorConsultation"
                    id="gp-doctor-consultation-no"
                    {...register('gpDoctorConsultation', { required: true })}
                  />
                  <label
                    className="px-6 cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 text-primary rounded-full bg-[#DEF0FF] "
                    htmlFor="gp-doctor-consultation-no"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-subtitleText" htmlFor="">
                  Give us additional information please
                </label>
                <textarea
                  className="rounded-xl h-20 resize-none border border-borderLight p-4 text-sm "
                  placeholder="Write here.."
                  name="gpDoctorConsultationAdditionalInfo"
                  id=""
                  {...register('gpDoctorConsultationAdditionalInfo', {
                    required: true,
                  })}
                ></textarea>
              </div>
            </div>
          </CommonQuestionBox>
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
