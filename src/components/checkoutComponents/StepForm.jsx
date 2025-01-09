import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import PaypalIcon from "../../assets/images/logo/paypal.svg";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { UploadButton } from "@bytescale/upload-widget-react";
import prescriptionIcon from "../../assets/images/icon/prescription.svg";
import pdfIcon from "../../assets/images/icon/pdf.png";

const suggestedMedicine = [
  {
    id: 1,
    imgUrl: "https://i.ibb.co.com/285jsS4/Rectangle-2154.png",
    name: "Company Vitamin C by Nature’s Bounty for Immune Support",
    price: "153.99",
    isSelected: false,
  },
  {
    id: 2,
    imgUrl: "https://i.ibb.co.com/285jsS4/Rectangle-2154.png",
    name: "Company Vitamin C by Nature’s Bounty for Immune Support",
    price: "153.99",
    isSelected: false,
  },
  {
    id: 3,
    imgUrl: "https://i.ibb.co.com/285jsS4/Rectangle-2154.png",
    name: "Company Vitamin C by Nature’s Bounty for Immune Support",
    price: "153.99",
    isSelected: false,
  },
];

function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(
    "John Smith, 123 Meadow Lanem, Cambridge, CB2 3AB, United Kingdom"
  );
  const [isAddressEditMode, setIsAddressEditMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);

  const handleUploadComplete = (files) => {
    const file = files[0];
    if (file && file?.originalFile?.file?.type !== "application/pdf") {
      alert("Please upload only PDF files.");
      return;
    }
    setUploadedFile(file);

    console.log(uploadedFile)
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleDeliveryAddressEdit = () => {
    setIsAddressEditMode(!isAddressEditMode);
  };

  const onSumbit = (data) => {
    console.log(data);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    window.scrollTo(0, 0);
  };

  const options = {
    apiKey: "public_W142itCDRC1b8YPvw8TnVJXyugYK",
    accept: ".pdf",
  };

  return (
    <div>
      {/* {/ step indicator  /} */}
      <div className="relative z-[1] w-[790px] mx-auto">
        <ul className="step-indicators flex items-center justify-between">
          <li className={currentStep >= 1 ? "active" : ""}>
            <p className="icon">1</p>
            <span>Delivery</span>
          </li>
          <li className={currentStep >= 2 ? "active" : ""}>
            <p className="icon">2</p>
            <span>Review and pay</span>
          </li>
          <li className={currentStep >= 3 ? "active" : ""}>
            <p className="icon">3</p>
            <span>Receipt</span>
          </li>
        </ul>
        <p className="progress-line absolute top-10 left-1/2 translate-x-[-50%] w-[95%] border-[2px] border-dashed bg-indicatorsColor z-[-1]"></p>
      </div>
      {/* {/ form  /} */}
      <form className="checkout-stepform" onSubmit={handleSubmit(onSumbit)}>
        {/* {/ step 1  /} */}
        {currentStep === 1 && (
          <div className="step-one">
            {/* {/ step title /} */}
            <div className="w-[882px] mx-auto text-center my-[100px]">
              <h3 className="text--xl mb-[60px] text-primryDark">
                Where should we deliver your order?
              </h3>
              <p className="text-[24px] text-[rgba(0,0,0,0.60)]">
                We ensure all packages are shipped in discreet, plain packaging
                with no mention of MyHealthNeedsLondon, guaranteeing your
                privacy.
              </p>
              <p className="text-[24px] text-[rgba(0,0,0,0.60)] mt-[30px]">
                In the next step, you can select your preferred delivery method.
                For now, please provide your delivery address to proceed.
              </p>
            </div>
            {/* {/ name & email  /} */}
            <div className="grid grid-cols-2 gap-10">
              {/* {/ name  /} */}
              <div className="mt-[60px]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="write your name"
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                {errors?.name && <p>{errors.name}</p>}
              </div>
              {/* {/ email  /} */}
              <div className="mt-[60px]">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="write your email"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors?.email && <p>{errors.email}</p>}
              </div>
            </div>
            {/* {/ billing address  /} */}
            <div className="mt-[60px]">
              <div>
                <label htmlFor="email">Billing address</label>
                <textarea
                  name="billingAddress"
                  {...register("billingAddress", {
                    required: "Billing Address is required",
                  })}
                  placeholder="Address"
                ></textarea>
              </div>
              {errors?.billingAddress && <p>{errors.billingAddress}</p>}
              {/* {/ find location  /} */}
              <div className="mt-10 w-fit mx-auto cursor-pointer">
                <div className="flex items-center gap-2 text-[20px] font-medium text-white bg-primary rounded-[10px] py-4 px-6">
                  <p className="text-[24px]">
                    <CiLocationOn />
                  </p>
                  Find my address
                </div>
              </div>
            </div>
            {/* {/ contact, city & post code  /} */}
            <div className="grid grid-cols-3 gap-10">
              {/* {/ contact  /} */}
              <div className="mt-[60px]">
                <label htmlFor="contact">Contact</label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={(phone) => field.onChange(phone)}
                    />
                  )}
                  rules={{ required: "Phone number is required" }}
                />
              </div>
              {/* {/ city  /} */}
              <div className="mt-[60px]">
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    {...register("city", { required: "City is required" })}
                  />
                </div>
                {errors?.city && <p>{errors.city}</p>}
              </div>
              {/* {/ post code  /} */}
              <div className="mt-[60px]">
                <div>
                  <label htmlFor="email">Postcode</label>
                  <input
                    type="number"
                    name="postcode"
                    placeholder="Postcode"
                    {...register("postcode", {
                      required: "Postcode is required",
                    })}
                  />
                </div>
                {errors?.postcode && <p>{errors.postcode}</p>}
              </div>
            </div>

            {/* gp name and address */}
            <div className="flex items-center gap-8 pt-8">
              <div className="w-5/12  flex flex-col">
                <label htmlFor="">GP Name</label>
                <input className="border rounded-lg px-4 py-2" placeholder="Write gp name" type="text" name="" id="" />
              </div>
              <div className="w-7/12  flex flex-col ">
                <label htmlFor="">GP Address</label>
                <input className="border rounded-lg px-4 py-2" placeholder="Write gp adress" type="text" name="" id="" />
              </div>
            </div>
            {/* {/ add prescription  /} */}
            <div className="mt-[100px] add-prescription">
              <h4 className="text-[36px] text-primryDark font-bold mb-10">
                Add your prescription file
              </h4>
              <div className="flex flex-col items-center p-[50px] rounded-[10px] border border-dashed border-[#A7A7A7]">
                {/* {/ file preview  /} */}
                <div>
                  <div>
                    <img
                      className="w-[120px] h-[120px] mb-5"
                      src={`${uploadedFile.originalFile ? pdfIcon : prescriptionIcon}`}
                      alt=""
                    />
                    <p className="mb-5 text-[18px] font-semibold">
                      {uploadedFile?.originalFile?.originalFileName}
                    </p>
                  </div>
                </div>
                <div>
                  <Controller
                    control={control}
                    name="prescriptionFile"
                    render={({ field }) => (
                      <UploadButton
                        options={options}
                        onComplete={(files) => {
                          handleUploadComplete(files);
                          field.onChange(files[0]);
                        }}
                      >
                        {({ onClick }) => (
                          <button onClick={onClick}>Upload a file...</button>
                        )}
                      </UploadButton>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* {/ delivery information  /} */}
            <div>
              <div className="text-center w-[882px] mx-auto mt-[172px]">
                <h3 className="text--xl mb-5">Delivery Information</h3>
                <p className="text-[24px] text-primary">
                  Due to increased demand, our clinical team may take up to 4
                  business days to review your suitability for the treatment and
                  approve your prescription. Once approved, your order will be
                  shipped using your selected delivery method.
                </p>
                <p className="text-[24px] text-primary mt-[30px]">
                  <span className="text-[#FF6607]">Please note:</span> Orders
                  approved after 4 PM on Friday will be dispatched on the next
                  business day (Monday).
                </p>
              </div>
              {/* {/ Royal Mail Tracked /} */}
              <div className="mt-[100px] royalmail-radio-wrap">
                <input
                  className="hidden"
                  id="royalMail"
                  type="checkbox"
                  name="royalMail"
                />
                <label
                  htmlFor="royalMail"
                  className="royalMail-radio relative py-[36px] pr-10 pl-[100px] bg-primaryLight border-[2px] border-primryDark rounded-[10px] cursor-pointer"
                >
                  <div className="w-[800px]">
                    <h4 className="text-[24px] font-semibold text-primryDark mb-[10px]">
                      Royal Mail Tracked™
                    </h4>
                    <p>
                      Estimated delivery: 1–2 working days after prescription
                      approval Signature required upon delivery
                    </p>
                  </div>
                </label>
              </div>
            </div>
            {/* {/ button  /} */}
            <div>
              <div
                className="py-[22px] px-20 bg-primryDark rounded-[10px] text-[24px] font-bold text-white w-fit mx-auto mt-10 cursor-pointer"
                onClick={handleNext}
              >
                Continue to payment
              </div>
            </div>
          </div>
        )}

        {/* {/ step 2   /} */}
        {currentStep === 2 && (
          <div className="setp-two mt-[110px]">
            {/* {/ step title  /} */}
            <div className="text-center">
              <h3 className="text--xl mb-5 text-primryDark">
                Check your order
              </h3>
              <p className="text-[24px] text-primary">
                Check your order details and Enter promo code if you have one.
              </p>
            </div>
            {/* {/ treatment preference  /} */}
            <div className="py-12 px-[75px] bg-primaryLight rounded-[10px] mt-[100px]">
              <h4 className="text-[24px] font-bold mb-[30px] text-primryDark">
                Your treatment preference
              </h4>
              <div>
                <p className="text-[18px] font-bold text-primryDark mb-[10px]">
                  Mounjaro® starting dose 2.5mg
                </p>
                <ul className="treatment-preference-medicine w-[640px]">
                  <li>
                    <p>1 pen (4 doses)</p>
                    <p>€149.99</p>
                  </li>
                  <li>
                    <p>Royal mail Tracked,</p>
                    <p> €3.95 </p>
                  </li>
                  <li className="total-pay">
                    <p>Total Pay:</p>
                    <p>€153.99</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* {/ delivery address  /} */}
            <div className="py-12 px-[75px] bg-primaryLight rounded-[10px] mt-[100px]">
              <h3 className="text-[24px] font-bold mb-[14px] text-primryDark">
                Delivery address:
              </h3>
              {/* {/ address  /} */}
              <div className="flex items-center justify-between">
                <div className="w-[820px]">
                  {!isAddressEditMode ? (
                    <p className="text-[24px] text-[rgba(0,0,0,0.60)]">
                      {deliveryAddress}
                    </p>
                  ) : (
                    <textarea
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="text-[24px] text-[rgba(0,0,0,0.60)] !h-[200px] resize-none"
                    />
                  )}
                </div>
                <div>
                  {
                    <div
                      className="text-[24px] font-semibold text-primryDark underline cursor-pointer"
                      onClick={handleDeliveryAddressEdit}
                    >
                      {!isAddressEditMode ? "Edit" : "Save"}
                    </div>
                  }
                </div>
              </div>
            </div>
            {/* {/ suggested medicine  /} */}
            <div className="suggested-medicine mt-[100px]">
              <h4 className="text-[32px] font-bold text-primryDark">
                Add these to complete your treatment:
              </h4>
              <div>
                {suggestedMedicine.map((item, index) => (
                  <div key={item?.id}>
                    <div>
                      <input
                        type="checkbox"
                        name={`suggested-${index}`}
                        id={`suggested-${index}`}
                        className="hidden"
                        {...register(`suggested-${index}`)}
                      />
                      <label
                        htmlFor={`suggested-${index}`}
                        className="!flex items-start justify-between py-[30px] pl-[110px] pr-[105px] border-[2px] border-[rgba(0,0,0,0.20)] rounded-[10px] mt-10 cursor-pointer"
                      >
                        <div className="w-[650px]">
                          <h4 className="text-[24px] text-primryDark leading-[31px]">
                            {item?.name}
                          </h4>
                          <p className="text-[18px] font-bold text-primryDark mt-4">
                            &euro;{item?.price}
                          </p>
                        </div>
                        <div>
                          <img
                            className="w-[167px] h-[140px]"
                            src={item?.imgUrl}
                            alt={item?.name}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
                {/* {/ button  /} */}
                <div className="mt-[60px]">
                  <div className="py-[20px] px-[60px] bg-primryDark rounded-[10px] text-[24px] font-bold text-white w-fit cursor-pointer duration-200 ease-in-out hover:opacity-90">
                    Add Extra Medicine
                  </div>
                </div>
              </div>
            </div>
            {/* {/ agreements  /} */}
            <div className="mt-[100px] agreement">
              <input
                type="checkbox"
                name="deliveryAgreements"
                id="deliveryAgreements"
                className="hidden"
              />
              <label
                htmlFor="deliveryAgreements"
                className="relative cursor-pointer pl-[60px]"
              >
                I Consist to MYHEALTHLONDON Connecting to my GP and to the
                sharing of information
              </label>
            </div>
            {/* {/ payment options  /} */}
            <div className="payment-options text-center w-[566px] mx-auto mt-[100px]">
              <h4 className="text--xl text-primryDark mb-[60px]">
                Payment Options
              </h4>
              <div>
                <Link
                  to={"/"}
                  className="flex w-full items-center justify-center p-[22px] gap-5 bg-primryDark rounded-[10px] text-[24px] font-bold text-white"
                >
                  Pay with Card
                </Link>
                <Link
                  to={"/"}
                  className="flex w-full items-center justify-center p-[22px] gap-5 rounded-[10px] bg-[#32C770] text-[24px] font-bold text-white mt-5"
                >
                  Pay with
                  <img className="w-[96px] h-[33px]" src={PaypalIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default StepForm;