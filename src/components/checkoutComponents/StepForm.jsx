import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import prescriptionIcon from "../../assets/images/icon/prescription.svg";
import pdfIcon from "../../assets/images/icon/pdf.png";
import axios from "axios";
//ashiq
import { Checkbox } from "@/components/ui/checkbox";
import orderImg from "../../assets/images/cards/orderImg.png";
import Receipt from "./Receipt";
import PaymentCard from "@/Pages/Dashboard/User/PaymentCard";
import {
  useApplyCouponIntentMutation,
  useGetCardDataIntentQuery,
} from "@/Redux/features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addRoyalMailServiceData } from "@/Redux/features/medicineDetails";
import toast from "react-hot-toast";

const SiteURl = import.meta.env.VITE_SITE_URL;

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
  const [deliveryData, setdeliveryData] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState(
    "John Smith, 123 Meadow Lanem, Cambridge, CB2 3AB, United Kingdom"
  );
  const [isAddressEditMode, setIsAddressEditMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [payableAmount, setpayableAmount] = useState();

  const [
    applyCouponIntent,
    { data, error: couponError, isLoading: isCouponLoading },
  ] = useApplyCouponIntentMutation();

  const medicineDetils = useSelector(
    state => state.checkOutMedicineReducer.checkOutMedicineDetials
  );

  const [discountAmount, setdiscountAmount] = useState();

  const handleCoupon = async totalPrice => {
    if (coupon && totalPrice) {
      try {
        // Apply coupon mutation
        const response = await applyCouponIntent({
          coupon_code: coupon,
          total_amount: totalPrice,
        }).unwrap();

        console.log("✅ Coupon Response:", response);

        // Check for a valid response code
        if (response.code === 200) {
          toast.success(`🎉 Coupon Applied Successfully! Discount: `);
          setpayableAmount(response.data.discounted_amount);
          setdiscountAmount(response.data.discount_applied);
        } else {
          toast.error(
            `⚠️ Unexpected Response: ${response.message || "Unknown error"}`
          );
        }
      } catch (error) {
        console.error("❌ Error applying coupon:", error);

        // Check if the error has a response or is a network error
        if (error.data) {
          toast.error(
            `❌ Failed to Apply Coupon: ${
              error.data.message || "Something went wrong!"
            }`
          );
        } else {
          toast.error(
            `❌ Failed to Apply Coupon: ${error.message || "Network error"}`
          );
        }
      } finally {
        setCoupon(""); // Clear coupon input
      }
    }
  };

  const [coupon, setCoupon] = useState("");

  const dispatch = useDispatch();

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
      setUploadedFile(file);
    }
  };

  const [treatmentMedicine, settreatmentMedicine] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicines`,
    })
      .then(res => {
        console.log("test kti", res.data.data);
        settreatmentMedicine(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/get-delivery-info-data`,
    })
      .then(res => {
        console.log(res.data.data, "log delivery data");
        setdeliveryData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleDeliveryAddressEdit = () => {
    setIsAddressEditMode(!isAddressEditMode);
  };

  const onSumbit = data => {
    console.log(data);
  };

  const [isRoyalMailChecked, setIsRoyalMailChecked] = useState(false);
  const [optionValues, setoptionValues] = useState();

  const handleCheckboxChange = (e, optionValue) => {
    setIsRoyalMailChecked(e.target.checked ? true : false);
    console.log("Royal Mail Checkbox is:", e.target.checked ? true : false);
    console.log("Option Value:", optionValue); // Accessing the option_value
    setoptionValues(optionValue);
    dispatch(
      addRoyalMailServiceData({
        isRoyalMail: e.target.checked ? true : false,
        OptionValue: optionValue,
      })
    );
  };

  const handleNext = () => {
    setCurrentStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));

    window.scrollTo(0, 0);
  };

  const options = {
    apiKey: "public_W142itCDRC1b8YPvw8TnVJXyugYK",
    accept: ".pdf",
  };

  const [allItemPricQuantity, setAllItemPricQuantity] = useState({
    items: [],
    subTotalQuantity: 0,
    subTotalPrice: 0,
  });

  useEffect(() => {
    const updatedItems = medicineDetils.map(item => {
      const itemQuantity = item.quantity;
      const itemSinglePeicePrice = item.total_price;
      return {
        itemQuantity,
        itemSinglePeicePrice,
      };
    });

    const subTotalQuantity = updatedItems.reduce(
      (total, item) => total + item.itemQuantity,
      0
    );
    const subTotalPrice = updatedItems.reduce(
      (total, item) => total + item.itemQuantity * item.itemSinglePeicePrice,
      0
    );

    // Update state with items, subtotal quantity, and subtotal price
    setAllItemPricQuantity({
      items: updatedItems,
      subTotalQuantity,
      subTotalPrice,
    });
  }, [medicineDetils]);

  console.log(allItemPricQuantity, "all item price quanity");

  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();

  console.log(cardData, isLoading, error, isError);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      {/* {/ step indicator  /} */}
      <div className="relative z-[1] max-w-[790px] mx-auto">
        <ul className="step-indicators flex lg:gap-0 items-center justify-between">
          <li className={currentStep >= 1 ? "active" : ""}>
            <p className="icon">1</p>
            <span className="stepName">Delivery</span>
          </li>
          <li className={currentStep >= 2 ? "active" : ""}>
            <p className="icon">2</p>
            <span>Review and pay</span>
          </li>
          <li className={currentStep >= 3 ? "active" : ""}>
            <p className="icon">3</p>
            <span>Receipt</span>
          </li>
          <li className={currentStep >= 4 ? "active" : ""}>
            <p className="icon">4</p>
            <span>Receipt</span>
          </li>
        </ul>
        <p
          className="progress-line absolute top-5 sm:top-10 left-1/2 translate-x-[-50%] w-[80%] sm:w-[95%] border-[2px] border-dashed bg-indicatorsColor z-[-1]
        "
        ></p>
      </div>
      {/* {/ form  /} */}
      <form className="checkout-stepform" onSubmit={handleSubmit(onSumbit)}>
        {/* {/ step 1  /} */}
        {currentStep === 1 && (
          <div className="step-one">
            {/* {/ step title /} */}
            <div className="max-w-[882px] mx-auto text-center mt-12 md:my-[100px]">
              <h3 className="md:text--xl text-primary text-[24px] sm:text-4xl font-bold mb-[20px] sm:mb-[60px]">
                Where should we deliver your order?
              </h3>
              <p className="text-base sm:text-xl text-left sm:text-center md:text-[24px] text-[rgba(0,0,0,0.60)]">
                We ensure all packages are shipped in discreet, plain packaging
                with no mention of MyHealthNeedsLondon, guaranteeing your
                privacy.
              </p>
              <p className="text-lg sm:text-xl text-left sm:text-center md:text-[24px] text-[rgba(0,0,0,0.60)] mt-3 sm:mt-[30px]">
                In the next step, you can select your preferred delivery method.
                For now, please provide your delivery address to proceed.
              </p>
            </div>
            {/* {/ name & email  /} */}
            <div className="grid md:grid-cols-2 gap-5 md:gap-10">
              {/* {/ name  /} */}
              <div className="mt-[40px] sm:mt-[60px]">
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
              <div className="md:mt-[60px]">
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
            <div className="mt-[30px] sm:mt-[60px]">
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
              <div className="mt-10 max-w-fit mx-auto cursor-pointer">
                <div className="flex items-center gap-2 text-base sm:text-[20px] font-medium text-white bg-primary rounded-[10px] py-2 sm:py-4 px-2 sm:px-6">
                  <p className="sm:text-[24px]">
                    <CiLocationOn />
                  </p>
                  Find my address
                </div>
              </div>
            </div>
            {/* {/ contact, city & post code  /} */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-10">
              {/* {/ contact  /} */}
              <div className="mt-8 md:mt-[77px]">
                <label
                  className="text-xs sm:text-sm lg:text-[22px]"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={phone => field.onChange(phone)}
                    />
                  )}
                  rules={{ required: "Phone number is required" }}
                />
              </div>
              {/* {/ city  /} */}
              <div className="md:mt-[60px]">
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
              <div className="md:mt-[60px]">
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
            <div
              className="flex-col block space-y-5 lg:space-y-0 lg:flex md:flex-row items-center 
            gap-3 lg:gap-8 pt-8"
            >
              <div className="max-w-5/12 flex flex-col">
                <label htmlFor="">GP Name</label>
                <input
                  className="border rounded-lg px-4 py-2"
                  placeholder="Write gp name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="max-w-7/12  flex flex-col ">
                <label htmlFor="">GP Address</label>
                <input
                  className="border rounded-lg px-4 py-2"
                  placeholder="Write gp adress"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            {/* {/ add prescription  /} */}
            <div className="mt-14 lg:mt-[100px] add-prescription">
              <h4 className="text-2xl sm:text-[36px] text-primryDark font-bold mb-10">
                Add your prescription file
              </h4>
              <div className="flex flex-col items-center p-[50px] rounded-[10px] border border-dashed border-[#A7A7A7]">
                {/* {/ file preview  /} */}
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[120px] h-[120px] mb-5"
                      src={`${
                        uploadedFile.originalFile ? pdfIcon : prescriptionIcon
                      }`}
                      alt=""
                    />
                    <p className="mb-5 text-[18px] font-semibold">
                      {uploadedFile?.name
                        ? uploadedFile.name
                        : "No File Selected"}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col cursor-pointer items-center justify-center w-[295px] h-[76px] border-[2px] border-solid border-[#0693FF] rounded-[10px] relative   ">
                    <p className="text-[#0693FF] text-[24px] font-nunito font-semibold leading-[132%] tracking-[0.48px]   ">
                      Add Prescription
                    </p>
                    <input
                      type="file"
                      accept="application/pdf"
                      className="h-full w-full opacity-0 absolute top-0 left-0 "
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* {/ delivery information  /} */}
            <div>
              <div className="text-center max-w-[882px] mx-auto mt-14 lg:mt-[172px]">
                <h3 className="md:text-xl text-2xl sm:text-4xl text-primary font-bold mb-5">
                  Delivery Information
                </h3>
                <p className="text-left sm:text-xl md:text-[24px] text-primary">
                  {deliveryData?.description}
                </p>
                <p className="text-left sm:text-xl md:text-[24px] text-primary mt-[30px]">
                  <span className="text-[#FF6607]">Please note:</span> Orders
                  {deliveryData?.note}
                </p>
              </div>

              {/* Royal Mail Tracked */}
              <div className="mt-[50px] sm:mt-[100px] royalmail-radio-wrap">
                <input
                  className="hidden"
                  id="royalMail"
                  type="checkbox"
                  name="royalMail"
                  checked={isRoyalMailChecked}
                  onChange={e =>
                    handleCheckboxChange(e, deliveryData?.option_value)
                  }
                />
                <label
                  htmlFor="royalMail"
                  className={`royalMail-radio relative lg:py-[36px] lg:pr-10 pl-[50px] lg:pl-[100px] bg-primaryLight border-[2px] ${
                    isRoyalMailChecked
                      ? "border-green-500"
                      : "border-primryDark"
                  } rounded-[10px] cursor-pointer`}
                >
                  <div className="max-w-[800px] py-4 sm:py-10 lg:py-0">
                    <h4 className="text-base md:text-[24px] font-semibold text-primryDark mb-[10px]">
                      {deliveryData?.option_name}
                    </h4>
                    <p className="text-sm md:text-lg">
                      {deliveryData?.option_sub_description}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            {/* {/ button  /} */}
            <div>
              <div
                className="py-2 lg:py-[22px] px-10 lg:px-20 bg-primryDark rounded-[10px] sm:text-[24px] font-bold text-white w-fit mx-auto mt-10 cursor-pointer"
                onClick={handleNext}
              >
                Continue to payment
              </div>
            </div>
          </div>
        )}
        {/* {/ step 2   /} */}
        {currentStep === 2 &&
          medicineDetils.map((item, index) => {
            return (
              <div key={item.id} className="setp-two mt-12 lg:mt-[110px]">
                {/* {/ step title  /} */}
                <div className="text-center">
                  <h3 className="text--xl mb-2 lg:mb-5 text-primryDark">
                    Check your order
                  </h3>
                  <p className="text-lg lg:text-[24px] text-primary">
                    Check your order details and Enter promo code if you have
                    one.
                  </p>
                </div>
                {/* {/ treatment preference  /} */}
                <div className="py-5 lg:py-12 px-5 lg:px-[75px] bg-primaryLight rounded-[10px] mt-10 lg:mt-[100px]">
                  <h4 className="text-[24px] font-bold mb-[30px] text-primryDark">
                    Your treatment preference
                  </h4>
                  <div>
                    <p className="text-[18px] font-bold text-primryDark mb-[10px]">
                      {item?.title} starting dose {item.dosage}
                    </p>
                    <ul className="treatment-preference-medicine max-w-[640px]">
                      <li className="lg:text-lg text-base">
                        <p> ({item?.quantity} doses)</p>
                        <p> €{item.total_price} </p>
                      </li>
                      {isRoyalMailChecked && (
                        <li>
                          <p>Royal mail Tracked,</p>
                          <p> €{optionValues} </p>
                        </li>
                      )}
                      <li className="total-pay">
                        <p>Total Pay:</p>
                        {isRoyalMailChecked ? (
                          <p>
                            €
                            {(
                              parseFloat(item.total_price) +
                              parseFloat(optionValues)
                            ).toFixed(2)}
                          </p>
                        ) : (
                          <p> €{item.total_price} </p>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* {/ delivery address  /} */}
                <div className="lg:py-12 py-5 lg:px-[75px] px-5 bg-primaryLight rounded-[10px] mt-10 lg:mt-[100px]">
                  <h3 className="text-[24px] font-bold mb-[14px] text-primryDark">
                    Delivery address:
                  </h3>
                  {/* {/ address  /} */}
                  <div className="flex gap-2 items-center justify-between">
                    <div className="max-w-[820px]">
                      {!isAddressEditMode ? (
                        <p className="text-base md:text-lg lg:text-[24px] text-[rgba(0,0,0,0.60)]">
                          {deliveryAddress}
                        </p>
                      ) : (
                        <textarea
                          value={deliveryAddress}
                          onChange={e => setDeliveryAddress(e.target.value)}
                          className="text-[24px] text-[rgba(0,0,0,0.60)] !h-[200px] resize-none"
                        />
                      )}
                    </div>
                    <div>
                      {
                        <div
                          className="text-base md:text-xl lg:text-[24px] font-semibold text-primryDark underline cursor-pointer"
                          onClick={handleDeliveryAddressEdit}
                        >
                          {!isAddressEditMode ? "Edit" : "Save"}
                        </div>
                      }
                    </div>
                  </div>
                </div>
                {/* {/ suggested medicine  /} */}
                <div className="suggested-medicine lg:mt-[100px] mt-10">
                  <h4 className="text-2xl lg:text-[32px] font-bold text-primryDark">
                    Add these to complete your treatment:
                  </h4>
                  <div>
                    {treatmentMedicine.map((item, index) => (
                      <div key={item?.id}>
                        <div>
                          <input
                            type="checkbox"
                            name={`suggested-${index}`}
                            id={`suggested-${index}`}
                            className="hidden stemFromCheckbox"
                            {...register(`suggested-${index}`)}
                          />
                          <label
                            htmlFor={`suggested-${index}`}
                            className="!flex flex-col md:flex-row items-start justify-between lg:py-[30px] pl-[50px] lg:pl-[110px] lg:pr-[105px] pr-6 border-[2px] border-[rgba(0,0,0,0.20)] rounded-[10px] mt-10 cursor-pointer py-5"
                          >
                            <div className="max-w-[650px]">
                              <h4 className="text-base lg:text-[24px] text-primryDark leading-[31px]">
                                {item?.title}
                              </h4>
                              <p className="text-[18px] font-bold text-primryDark mt-4">
                                &euro;{item?.price}
                              </p>
                            </div>
                            <div>
                              <img
                                className="max-w-[167px] h-[60px] lg:h-[140px] mt-4 lg:mt-0"
                                src={`${SiteURl}/${item.avatar}`}
                                alt={item?.name}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                    {/* {/ button  /} */}
                    <div className="mt-8 lg:mt-[60px] flex items-center justify-center">
                      <div className="lg:py-[20px] py-2 px-4 lg:px-[60px] bg-primryDark rounded-[10px] text-base lg:text-[24px] font-bold text-white w-fit cursor-pointer duration-200 ease-in-out hover:opacity-90">
                        Add Extra Medicine
                      </div>
                    </div>
                  </div>
                </div>
                {/* {/ agreements  /} */}
                <div className="mt-16 lg:mt-[100px] agreement">
                  <input
                    type="checkbox"
                    name="deliveryAgreements"
                    id="deliveryAgreements"
                    className="hidden"
                  />
                  <label
                    htmlFor="deliveryAgreements"
                    className="relative cursor-pointer pl-8 lg:pl-[60px]"
                  >
                    I Consist to MYHEALTHLONDON Connecting to my GP and to the
                    sharing of information
                  </label>
                </div>
                {/* {/ payment options  /} */}
                <div className="payment-options text-center max-w-[566px] mx-auto mt-10 lg:mt-[100px]">
                  <h4 className="text--xl text-primryDark mb-7 lg:mb-[60px]">
                    Payment Options
                  </h4>
                  <div className="flex items-center justify-center">
                    <Link
                      onClick={handleNext}
                      className="flex w-[250px] lg:w-[566px] items-center justify-center px-4 py-3 lg:p-[22px] gap-5 bg-primryDark rounded-[10px] text-base lg:text-[24px] font-bold text-white"
                    >
                      Pay with Card
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        {/* Ashiq  */}
        {/* {/ step 3   /} */}
        {currentStep === 3 && (
          <div className="setp-two mt-16 lg:mt-[110px]">
            {/* payment methord  */}
            <div className="flex gap-10 xl:gap-40 flex-col lg:flex-row justify-center items-center  ">
              <div className="flex order-2 lg:order-1 flex-col space-y-8 ">
                <div>
                  <p className="text-lg lg:text-[25px] pb-2 font-bold text-primryDark border-b border-[#ACACAC]">
                    Payment Method
                  </p>
                </div>

                <div className="flex sm:flex-row flex-col justify-between gap-4">
                  {cardData?.data?.length > 0 &&
                    cardData.data.map((item, index) => {
                      return (
                        <div key={index} onClick={() => setSelectedCard(index)}>
                          <PaymentCard
                            className={`h-[200px] bg-left 
              ${
                selectedCard === index
                  ? "border-4 border-blue-500 shadow-2xl"
                  : "border-4 border-transparent"
              }`}
                            data={item}
                          />
                        </div>
                      );
                    })}
                </div>

                <div className="flex items-center gap-2 p-2 lg:p-4 border border-[#0063A9] rounded-lg">
                  <Checkbox />
                  <p className=" text-sm lg:text-lg font-nunito ">
                    Your subscription will automatically renew after 30 days.
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleNext}
                    className="flex w-full text-sm lg:text-base items-center justify-center p-3 lg:p-[20px] gap-5 bg-primryDark rounded-[10px]  text-white"
                  >
                    Pay EURO59.28
                  </button>
                </div>
                <div className="lg:w-[620px] mx-auto">
                  <p className="text-sm text-center font-nunito text-[#ACACAC]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
              </div>

              <div className="max-w-md order-1 lg:order-2 p-6  bg-gray-50 border border-gray-200 rounded-lg shadow-lg">
                {/* Order Summary Title */}
                <h2 className=" text-base lg:text-2xl font-nunito font-semibold text-gray-800 border-b pb-2">
                  Order Summary
                </h2>

                {/* Product Info */}
                {medicineDetils.map((item, index) => {
                  return (
                    <div className="flex items-center gap-4 py-4 border-b">
                      <img
                        src={`${SiteURl}/${item.avatar}`}
                        alt="Product"
                        className="w-12 h-12 rounded-md"
                      />
                      <div className="flex-1">
                        <p className="lg:text-lg text-sm font-semibold font-nunito text-blue-600">
                          {item.title} starting {item.dosage}
                        </p>
                        <p className="text-xs font-nunito text-gray-500">
                          {item.title}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold font-nunito text-gray-800">
                          ${item.total_price}
                        </p>
                        <p className="text-xs font-nunito text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Discount Code Input */}
                <div className="flex items-center gap-2 py-4 border-b">
                  <input
                    className="placeholder:text-xs lg:placeholder:text-base order-summery py-2 "
                    style={{ padding: "5px" }}
                    type="text"
                    placeholder="Gift or discount code"
                    onChange={e => setCoupon(e.target.value)}
                    value={coupon}
                    disabled={payableAmount ? true : false}
                  />
                  <button
                    disabled={payableAmount ? true : false}
                    onClick={() => {
                      const totalAmount = optionValues
                        ? (
                            allItemPricQuantity.subTotalPrice +
                            parseFloat(allItemPricQuantity.subTotalQuantity) *
                              optionValues +
                            2.24
                          ).toFixed(2)
                        : (allItemPricQuantity.subTotalPrice + 2.24).toFixed(2);

                      handleCoupon(totalAmount); // Passing totalAmount if needed
                    }}
                    className="px-4 py-2 lg:py-3 font-nunito text-sm text-white bg-gray-600 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    Apply
                  </button>
                </div>

                {/* Pricing Details */}
                <div className="space-y-2 py-4 border-b text-gray-700">
                  <div className="flex font-nunito justify-between">
                    <span>Subtotal</span>
                    <span>${allItemPricQuantity.subTotalPrice}</span>
                  </div>
                  {discountAmount && payableAmount && (
                    <div className="flex flex-col gap-y-2">
                      <div className="flex font-nunito justify-between">
                        <span>Discount Amount</span>
                        <span> ${discountAmount.toFixed(2)} </span>
                      </div>
                      <div className="flex font-nunito justify-between">
                        <span>Payable Amount After Discount</span>
                        <span>${payableAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex font-nunito justify-between">
                    <span>Royal Mail Tracked</span>
                    {optionValues && (
                      <span>
                        $
                        {parseFloat(allItemPricQuantity.subTotalQuantity) *
                          optionValues}
                      </span>
                    )}
                  </div>
                </div>

                {/* Total Price */}
                <div className="pt-4 flex justify-between items-center font-nunito">
                  <div>
                    <p className="text-base font-nunito">Total</p>
                    <p className="text-xs text-gray-500">
                      Including $2.24 in taxes
                    </p>
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">
                    $
                    {payableAmount
                      ? payableAmount.toFixed(2)
                      : optionValues
                      ? (
                          allItemPricQuantity.subTotalPrice +
                          parseFloat(allItemPricQuantity.subTotalQuantity) *
                            optionValues +
                          2.24
                        ).toFixed(2)
                      : (allItemPricQuantity.subTotalPrice + 2.24).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {/ step 4   /} */}
        {currentStep === 4 && (
          <div className="setp-two mt-16 lg:mt-[110px]">
            <div>
              <Receipt />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default StepForm;
// ready to go
