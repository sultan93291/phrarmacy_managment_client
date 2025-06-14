import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useParams } from "react-router-dom";
import prescriptionIcon from "../../assets/images/icon/prescription.svg";
import pdfIcon from "../../assets/images/icon/pdf.png";
import axios from "axios";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import orderImg from "../../assets/images/cards/orderImg.png";
import Receipt from "./Receipt";
import PaymentCard from "@/Pages/Dashboard/User/PaymentCard";

import {
  useApplyCouponIntentMutation,
  useCreatePlaceOrderIntentMutation,
  useGetCardDataIntentQuery,
} from "@/Redux/features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addMedicineToCheckout,
  addRoyalMailServiceData,
  clearCheckout,
  removeMailServiceData,
  removeMedicineFromCheckout,
} from "@/Redux/features/medicineDetails";
import toast from "react-hot-toast";
import { current } from "@reduxjs/toolkit";
import { Checkbox } from "@radix-ui/react-checkbox";
import { clearAssesmentData } from "@/Redux/features/assesmentSlice";
import { AddIconSvg } from "../SvgContainer/SvgContainer";
import { Modal } from "../Modals/Modal";
import AddPaymentModalWrapper from "../Modals/AddPaymentModal";

const SiteURl = import.meta.env.VITE_SITE_URL;

function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryData, setdeliveryData] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState(
    "John Smith, 123 Meadow Lanem, Cambridge, CB2 3AB, United Kingdom"
  );
  const [open, setOpen] = useState(false);
  const [isAddressEditMode, setIsAddressEditMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [payableAmount, setpayableAmount] = useState();
  const [SuccessFullOrderData, setSuccessFullOrderData] = useState();
  const assesMentDetails = useSelector(
    state => state.assesmentSlice.assesmentData
  );
  const [
    applyCouponIntent,
    { data, error: couponError, isLoading: isCouponLoading },
  ] = useApplyCouponIntentMutation();

  const [
    createPlaceOrderIntent,
    {
      isLoading: isOrderLaoding,
      isError: isOrderError,
      data: orderData,
      error: OrderError,
    },
  ] = useCreatePlaceOrderIntentMutation();

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
          ...(assesMentDetails[0]?.id && {
            treatment_id: parseInt(assesMentDetails[0].id),
          }),
        }).unwrap();

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
      setUploadedFile(file);
    }
  };

  const { id } = useParams();

  const [treatmentMedicine, settreatmentMedicine] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [medicineDeatilsArr, setmedicineDeatilsArr] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/treatment/${id}/medicines`,
    })
      .then(res => {
        console.log(res);
        
        settreatmentMedicine(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(treatmentMedicine);

  

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/get-delivery-info-data`,
    })
      .then(res => {
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedChange = e => {
    e.target.checked; // ✅ Directly updates the boolean value// ✅ Logs true/false when toggled
    setIsChecked(e.target.checked);
  };
  const onSumbit = data => {
    console.log(data);
  };

  const [billingDetails, setbillingrDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postCode: "",
    gpName: "",
    gpAdress: "",
  });

  const [SelectedCardId, setSelectedCardID] = useState();
  const handleSelectCard = item => {
    setSelectedCardID(item?.id);
  };

  const [fixedcoupon, setfixedcoupon] = useState();

  const handleBillingDetailsChange = e => {
    setbillingrDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const [isRoyalMailChecked, setIsRoyalMailChecked] = useState(false);
  const [optionValues, setoptionValues] = useState();

  const handleCheckboxChange = (e, optionValue) => {
    setIsRoyalMailChecked(e.target.checked ? true : false);
    setoptionValues(optionValue);
    dispatch(
      addRoyalMailServiceData({
        isRoyalMail: e.target.checked ? true : false,
        OptionValue: optionValue,
      })
    );
  };

  const handleAddMedicine = item => {
    if (item !== null) {
      const MedicineDetails = {
        medicine_id: item?.id,
        quantity: 1,
        unit_price: parseFloat(item.price).toFixed(2),
        total_price: parseFloat(item.price).toFixed(2),
        title: item?.title,
        dosage: 10,
        avatar: item?.avatar,
      };
      // Adding new details to the array
      setmedicineDeatilsArr(prevDetails => [...prevDetails, MedicineDetails]);
    }
  };

  const handleNext = () => {
    if (
      currentStep === 1 ||
      (currentStep === 2 &&
        billingDetails.name &&
        billingDetails.address &&
        billingDetails.city &&
        billingDetails.email &&
        billingDetails.postCode &&
        billingDetails.gpAdress &&
        billingDetails.gpName)
    ) {
      setCurrentStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
      window.scrollTo(0, 0);
    } else {
      // Optionally, handle the case where the fields are not all filled
    }
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));

    window.scrollTo(0, 0);
  };

  // const handlePostCodeLocation = () => {
  //   if (!billingDetails.postCode) return alert("Please enter a postcode");

  //   PostcodeLookup(
  //     {
  //       apiKey: import.meta.env.VITE_IDEAL_POSTCODES_API_KEY,
  //       postcode: billingDetails.postCode.trim(),
  //     },
  //     (err, addresses) => {
  //       if (err) {
  //         console.error("Postcode lookup failed:", err);
  //         return;
  //       }
  //       if (addresses && addresses.length > 0) {
  //         const first = addresses[0];
  //         setbillingrDetails(prev => ({
  //           ...prev,
  //           city: first.post_town,
  //           gpAdress: `${first.line_1}, ${first.line_2 || ""}, ${
  //             first.post_town
  //           }`,
  //         }));
  //       } else {
  //         alert("No addresses found for this postcode.");
  //       }
  //     }
  //   );
  // };

  const [allItemPricQuantity, setAllItemPricQuantity] = useState({
    items: [],
    subTotalQuantity: 0,
    subTotalPrice: 0,
  });

  useEffect(() => {
    const updatedItems = medicineDetils.map(item => {
      return {
        itemQuantity: item.quantity,
        itemSinglePeicePrice: parseFloat(item.total_price), // Ensure it's a number
      };
    });

    // Subtotal Quantity (if needed)
    const subTotalQuantity = updatedItems
      .map(item => parseInt(item.itemQuantity, 10)) // Convert itemQuantity to number (in case it's a string)
      .reduce((sum, quantity) => sum + quantity, 0);

    // ✅ Corrected Subtotal Price Calculation
    const subTotalPrice = updatedItems
      .map(item => item.itemSinglePeicePrice) // Get all single item prices
      .reduce((sum, price) => sum + price, 0);

    setAllItemPricQuantity({
      subTotalQuantity: subTotalQuantity,
      subTotalPrice: subTotalPrice,
    });
  }, [medicineDetils]);

  const [successFullOrderDetailsData, setsuccessFullOrderDetailsData] =
    useState();

  const {
    data: cardData,
    isLoading,
    isError,
    error,
  } = useGetCardDataIntentQuery();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddExtraMedicine = () => {
    medicineDeatilsArr.forEach(medicine => {
      dispatch(addMedicineToCheckout(medicine));
    });
  };

  const checkOutMedicineDetials = useSelector(
    state => state.checkOutMedicineReducer.checkOutMedicineDetials
  );

  const handleOrderPlace = async () => {
    const formattedMedicineDetails = checkOutMedicineDetials.map(medicine => ({
      medicine_id: medicine.medicine_id,
      quantity: parseInt(medicine.quantity), // Ensure quantity is a number
      unit_price: parseFloat(medicine.unit_price), // Ensure unit_price is a number
      total_price: parseFloat(medicine.total_price), // Ensure total_price is a number
    }));

    const formattedAssessmentDetails = assesMentDetails[0]?.finalData?.map(
      assessment => ({
        assessment_id: parseInt(assessment?.assetment_id), // Parse string to integer for assessment_id
        selected_option: assessment.selected_option || null, // Use null if selected_option is undefined or null
        result: assessment.result || null, // Use null if result is undefined or null
        notes: assessment.notes || null, // Use null if notes is undefined or null
      })
    );

    const formData = new FormData();

    formData.append("prescription", uploadedFile);

    // prescription: uploadedFile,a

    const roaylMail =
      parseFloat(allItemPricQuantity.subTotalQuantity) *
      parseFloat(optionValues).toFixed(2);

    const orderData = {
      treatment_id: parseInt(assesMentDetails[0]?.id),
      royal_mail_tracked_price: roaylMail ? roaylMail : 0,
      subscription: isChecked,
      code: fixedcoupon ? fixedcoupon : null,
      sub_total: allItemPricQuantity.subTotalPrice,
      discount: discountAmount,
      total: payableAmount,
      payment_method_id: SelectedCardId,
      medicines: formattedMedicineDetails,
      assessments: formattedAssessmentDetails,
      name: billingDetails.name,
      email: billingDetails.email,
      address: billingDetails.address,
      contact: billingDetails.phone,
      city: billingDetails.city,
      postcode: billingDetails.postCode,
      gp_number: billingDetails.gpName,
      gp_address: billingDetails.gpAdress,
      // other necessary order details
    };

    try {
      // Prepare order data (e.g., payment details, shipping address, etc.)
      const token = localStorage.getItem("token");
      // Make the request to create an order with the data
      const response = await axios({
        method: "POST",
        url: `${SiteURl}/api/order-checkout`,
        data: orderData,

        headers: {
          Authorization: `Bearer ${token}`, // Send the token as a Bearer token
        },
      });

      // Handle success response
      if (response.status === 200) {
        if (!uploadedFile) {
          toast.error("Please upload a prescription");
          return;
        } else {
          try {
            toast.success("Order placed successfully!");
            const prescrepitonResponse = await axios({
              method: "POST",
              url: `${SiteURl}/api/order-prescription/upload/${response.data.data}`,
              data: formData,

              headers: {
                Authorization: `Bearer ${token}`, // Send the token as a Bearer token
              },
            });

            if (prescrepitonResponse.status === 200) {
              dispatch(clearAssesmentData());
              dispatch(clearCheckout());
              dispatch(removeMailServiceData());
              toast.success("Prescreption  uploaded  successfully!");
              setCurrentStep(4);

              axios({
                method: "GET",
                url: `${SiteURl}/api/order-invoice/${response.data.data}`,
                headers: {
                  Authorization: `Bearer ${token}`, // Send the token as a Bearer token
                },
              })
                .then(res => {
                  setsuccessFullOrderDetailsData(res?.data?.data);
                })
                .catch(err => {
                  console.log(err);
                });
            }
          } catch (error) {
            // Error handling for mutation request (e.g., network issues, invalid response)
            if (error.response) {
              // If error has a response (from the server)
              console.error("Error response from server:", error.response);
              toast.error(`Error: ${error.response.data.message}`);
            } else if (error.message) {
              // If there's a general message (network error, etc.)
              console.error("Error message:", error.message);
              toast.error(`Error: ${error.message || error.data}`);
            } else {
              // Handle unexpected errors
              console.error("Unexpected error:", error);
              toast.error("Something went wrong");
            }
          }
        }
      } else {
        // Handle non-200 success response (e.g., any custom error handling logic from server)
        toast.error(`Error: ${response.message || "Something went wrong"}`);
      }
    } catch (error) {
      // Error handling for mutation request (e.g., network issues, invalid response)
      if (error.response) {
        toast.error(
          `Error: ${error.response.data.message || "An unknown error occurred"}`
        );
      } else if (error.message) {
        // If there's a general message (network error, etc.)
        console.error("Error message:", error.message);
        toast.error(`Error: ${error.message}`);
      } else {
        // Handle unexpected errors
        console.error("Unexpected error:", error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div>
        {/* {/ step indicator  /} */}
        <div className="relative z-[1] max-w-[790px] mx-auto">
          <ul className="step-indicators flex lg:gap-0 items-center justify-between">
            <li
              onClick={() => {
                billingDetails.name &&
                  billingDetails.address &&
                  billingDetails.city &&
                  billingDetails.email &&
                  billingDetails.postCode &&
                  billingDetails.gpAdress &&
                  billingDetails.gpName &&
                  setCurrentStep(1);
              }}
              className={currentStep >= 1 ? "active" : ""}
            >
              <p className="icon cursor-pointer">1</p>
              <span className="stepName">Delivery</span>
            </li>
            <li
              onClick={() => {
                billingDetails.name &&
                  billingDetails.address &&
                  billingDetails.city &&
                  billingDetails.email &&
                  billingDetails.postCode &&
                  billingDetails.gpAdress &&
                  billingDetails.gpName &&
                  setCurrentStep(2);
              }}
              className={currentStep >= 2 ? "active" : ""}
            >
              <p className="icon cursor-pointer">2</p>
              <span>Review </span>
            </li>
            <li
              onClick={() => {
                billingDetails.name &&
                  billingDetails.address &&
                  billingDetails.city &&
                  billingDetails.email &&
                  billingDetails.postCode &&
                  billingDetails.gpAdress &&
                  billingDetails.gpName &&
                  setCurrentStep(3);
              }}
              className={currentStep >= 3 ? "active" : ""}
            >
              <p className="icon cursor-pointer">3</p>
              <span>Pay</span>
            </li>
            <li
              onClick={() => {
                billingDetails.name &&
                  billingDetails.address &&
                  billingDetails.city &&
                  billingDetails.email &&
                  billingDetails.postCode &&
                  billingDetails.gpAdress &&
                  billingDetails.gpName &&
                  setCurrentStep(3);
              }}
              className={currentStep >= 4 ? "active" : ""}
            >
              <p className="icon cursor-pointer">4</p>
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
                  We ensure all packages are shipped in discreet, plain
                  packaging with no mention of MyHealthNeedsLondon, guaranteeing
                  your privacy.
                </p>
                <p className="text-lg sm:text-xl text-left sm:text-center md:text-[24px] text-[rgba(0,0,0,0.60)] mt-3 sm:mt-[30px]">
                  In the next step, you can select your preferred delivery
                  method. For now, please provide your delivery address to
                  proceed.
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
                      onChange={e => {
                        handleBillingDetailsChange(e);
                      }}
                      value={billingDetails.name}
                    />
                  </div>
                </div>
                {/* {/ email  /} */}
                <div className="md:mt-[60px]">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="write your email"
                      onChange={e => {
                        handleBillingDetailsChange(e);
                      }}
                      value={billingDetails.email}
                    />
                  </div>
                </div>
              </div>
              {/* {/ billing address  /} */}
              <div className="mt-[30px] sm:mt-[60px]">
                <div>
                  <label htmlFor="email">Billing address</label>
                  <textarea
                    name="address"
                    onChange={e => {
                      handleBillingDetailsChange(e);
                    }}
                    value={billingDetails.address}
                    placeholder="Address"
                  ></textarea>
                </div>
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
                        onChange={phone => {
                          field.onChange(phone); // Ensure React Hook Form updates the value
                          handleBillingDetailsChange({
                            target: { name: "phone", value: phone }, // Simulate the change event like regular input
                          });
                        }}
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
                      onChange={e => {
                        handleBillingDetailsChange(e);
                      }}
                      value={billingDetails.city}
                    />
                  </div>
                  {errors?.city && <p>{errors.city}</p>}
                </div>
                {/* {/ post code  /} */}
                <div className="md:mt-[60px]">
                  <div>
                    <label htmlFor="email">Postcode</label>
                    <input
                      type="text"
                      name="postCode"
                      placeholder="Postcode"
                      onChange={e => {
                        handleBillingDetailsChange(e);
                      }}
                      value={billingDetails.postCode}
                    />
                  </div>
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
                    name="gpName"
                    id=""
                    onChange={e => {
                      handleBillingDetailsChange(e);
                    }}
                    value={billingDetails.gpName}
                  />
                </div>
                <div className="max-w-7/12  flex flex-col ">
                  <label htmlFor="">GP Address</label>
                  <input
                    className="border rounded-lg px-4 py-2"
                    placeholder="Write gp adress"
                    type="text"
                    name="gpAdress"
                    onChange={e => {
                      handleBillingDetailsChange(e);
                    }}
                    value={billingDetails.gpAdress}
                  />
                </div>
              </div>
              {/* {/ add prescription  /} */}
              <div className="mt-14 lg:mt-[100px] add-prescription">
                <h4 className="text-2xl sm:text-[36px] text-primryDark font-bold mb-10">
                  Add your prescription file
                </h4>
                <div className="flex flex-col items-center p-8 md:p-[50px] rounded-[10px] border border-dashed border-[#A7A7A7]">
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
                    <div className="flex flex-col cursor-pointer items-center justify-center w-[190px] h-[40px] lg:w-[295px] lg:h-[76px] border-[2px] border-solid border-[#0693FF] rounded-[10px] relative   ">
                      <p className="text-[#0693FF] lg:text-[24px] font-nunito font-semibold leading-[132%] tracking-[0.48px]   ">
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
                <button
                  type="submit"
                  className="py-2 lg:py-[22px] px-10 text-center lg:px-20 bg-primryDark rounded-[10px] sm:text-[24px] font-bold text-white w-fit mx-auto mt-10 cursor-pointer"
                  onClick={handleNext}
                >
                  Continue to payment
                </button>
              </div>
            </div>
          )}
          {/* {/ step 2   /} */}
          {currentStep === 2 && (
            <div className="setp-two mt-12 lg:mt-[110px]">
              {/* {/ step title  /} */}
              <div className="text-center">
                <h3 className="text--xl mb-2 lg:mb-5 text-primryDark">
                  Check your order
                </h3>
                <p className="text-lg lg:text-[24px] text-primary">
                  Check your order details and Enter promo code if you have one.
                </p>
              </div>
              {/* {/ treatment preference  /} */}

              {medicineDetils.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="py-5 lg:py-12 px-5 lg:px-[75px] bg-primaryLight rounded-[10px] mt-10 lg:mt-[100px]"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-[24px] font-bold mb-[30px] text-primryDark">
                        Your treatment preference
                      </h4>
                      <button
                        onClick={() =>
                          dispatch(removeMedicineFromCheckout(item.medicine_id))
                        }
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <div>
                      <p className="text-[18px] font-bold text-primryDark mb-[10px]">
                        {item?.title} starting dose {item.dosage}
                      </p>
                      <ul className="treatment-preference-medicine max-w-[640px]">
                        <li className="lg:text-lg text-base">
                          <p>({item?.quantity} doses)</p>
                          <p>£ {item.total_price}</p>
                        </li>
                        {isRoyalMailChecked && (
                          <li>
                            <p>Royal mail Tracked,</p>
                            <p>£ {optionValues}</p>
                          </li>
                        )}
                        <li className="total-pay">
                          <p>Total Pay:</p>
                          {isRoyalMailChecked ? (
                            <p>
                              £
                              {(
                                parseFloat(item.total_price) +
                                parseFloat(optionValues)
                              ).toFixed(2)}
                            </p>
                          ) : (
                            <p>£ {item.total_price}</p>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}

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
                        {billingDetails?.address}
                      </p>
                    ) : (
                      <textarea
                        value={billingDetails.address}
                        onChange={e =>
                          setbillingrDetails(prevState => ({
                            ...prevState, // Copy the existing state
                            address: e.target.value, // Update only the address field
                          }))
                        }
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
                  {treatmentMedicine?.medicines?.map((item, index) => (
                    <div key={item?.id}>
                      <div>
                        <input
                          type="checkbox"
                          name={`suggested-${index}`}
                          id={`suggested-${index}`}
                          className="hidden stemFromCheckbox"
                          {...register(`suggested-${index}`)}
                          onClick={() => {
                            handleAddMedicine(item);
                          }}
                        />
                        <label
                          htmlFor={`suggested-${index}`}
                          className="!flex flex-col md:flex-row items-start justify-between lg:py-[30px] pl-[50px] lg:pl-[110px] lg:pr-[105px] pr-6 border-[2px] border-[rgba(0,0,0,0.20)] rounded-[10px] mt-10 cursor-pointer py-5"
                        >
                          <div className="max-w-[650px]">
                            <h4 className="text-base lg:text-[24px] text-primryDark leading-[31px]">
                              {item?.title} {item?.description}
                            </h4>
                            <p className="text-[18px] font-bold text-primryDark mt-4">
                              £ {item?.price}
                            </p>
                          </div>
                          <div>
                            <img
                              className="max-w-[167px] h-[60px] lg:w-[166px] lg:h-[140px] object-cover mt-4 lg:mt-0"
                              src={`${SiteURl}/${item.avatar}`}
                              alt={item?.name}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                  {/* {/ button  /} */}
                  <div
                    onClick={() => {
                      handleAddExtraMedicine();
                    }}
                    className="mt-8 lg:mt-[60px] flex items-center justify-center"
                  >
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
                  I consent to allow <strong>MyHealthNeeds</strong> to connect
                  with <strong>MyGP</strong> and share my health information as
                  needed. <span className="text-red-500">*</span>
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
          )}

          {/* Ashiq  */}
          {/* {/ step 3   /} */}
          {currentStep === 3 && (
            <div className="setp-two mt-16 lg:mt-[110px]">
              {/* payment methord  */}
              <div className="flex gap-10 xl:gap-40 flex-col lg:flex-row justify-center items-center  ">
                <div className="flex order-2 lg:order-1 flex-col space-y-8 ">
                  <div>
                    <p className="text-lg lg:text-[25px] pb-2 font-bold text-primryDark border-b border-[#ACACAC]">
                      Payment Method{" "}
                      <span className="text-red-500">
                        (*Please select your card*)
                      </span>
                    </p>
                  </div>

                  <div className="flex  sm:flex-row w-full flex-col justify-between gap-4">
                    {cardData?.data?.length > 0 ? (
                      cardData.data.map((item, index) => {
                        return (
                          <div
                            className=" w-full"
                            key={index}
                            onClick={() => {
                              handleSelectCard(item), setSelectedCard(index);
                            }}
                          >
                            <PaymentCard
                              className={`h-[200px] bg-left  w-full
              ${
                selectedCard === index
                  ? "border-4 border-blue-500 shadow-2xl"
                  : "border-4 border-transparent"
              }`}
                              data={item}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="h-56 sm:h-72 bg-cover bg-center border border-black/20 bg-no-repeat font-dmsans rounded-2xl sm:px-20 p-5 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-4">
                          <div
                            onClick={() => setOpen(true)}
                            className="cursor-pointer"
                          >
                            <AddIconSvg />
                          </div>
                          <p className="font-nunito font-semibold text-center sm:text-lg">
                            Add Payment Method to procedd
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 p-2 lg:p-4 border border-[#0063A9] rounded-lg">
                    <div className="flex p-2 lg:p-4 items-center justify-center ">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckedChange}
                        className="  rounded-sm border  border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <p className="text-sm lg:text-lg font-nunito ">
                      Your subscription will automatically renew after 30 days.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleOrderPlace();
                      }}
                      className="flex w-full text-sm lg:text-base items-center justify-center p-3 lg:p-[20px] gap-5 bg-primryDark rounded-[10px]  text-white"
                    >
                      Pay GBP{" "}
                      {payableAmount
                        ? payableAmount.toFixed(2)
                        : optionValues
                        ? (
                            allItemPricQuantity.subTotalPrice +
                            parseFloat(allItemPricQuantity.subTotalQuantity) *
                              optionValues
                          ).toFixed(2)
                        : allItemPricQuantity.subTotalPrice.toFixed(2)}
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
                  {medicineDetils.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="flex items-center gap-4 py-4 border-b"
                    >
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
                          £ {item.total_price}
                        </p>
                        <p className="text-xs font-nunito text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Discount Code Input */}
                  <div className="flex items-center gap-2 py-4 border-b">
                    <input
                      className="placeholder:text-xs lg:placeholder:text-base order-summery py-2 "
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Gift or discount code"
                      onChange={e => {
                        setCoupon(e.target.value),
                          setfixedcoupon(e.target.value);
                      }}
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
                          : (allItemPricQuantity.subTotalPrice + 2.24).toFixed(
                              2
                            );

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
                      <span>
                        £{" "}
                        {parseFloat(allItemPricQuantity.subTotalPrice).toFixed(
                          2
                        )}
                      </span>
                    </div>
                    <div className="flex font-nunito justify-between">
                      <span>Royal Mail Tracked</span>
                      {optionValues && (
                        <span>
                          £
                          {(
                            parseFloat(allItemPricQuantity.subTotalQuantity) *
                            optionValues
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                    {discountAmount && payableAmount && (
                      <div className="flex flex-col gap-y-2">
                        <div className="flex font-nunito justify-between">
                          <span>Discount Amount</span>
                          <span> £ {discountAmount.toFixed(2)} </span>
                        </div>
                        <div className="flex font-nunito justify-between">
                          <span>Payable Amount After Discount</span>
                          <span>£ {payableAmount.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Total Price */}
                  <div className="pt-4 flex justify-between items-center font-nunito">
                    <div>
                      <p className="text-base font-nunito">Total</p>
                      <p className="text-xs text-gray-500">Include taxes</p>
                    </div>
                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                      £
                      {payableAmount
                        ? payableAmount.toFixed(2)
                        : optionValues
                        ? (
                            allItemPricQuantity.subTotalPrice +
                            parseFloat(allItemPricQuantity.subTotalQuantity) *
                              optionValues
                          ).toFixed(2)
                        : allItemPricQuantity.subTotalPrice.toFixed(2)}
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
                <Receipt OrderData={successFullOrderDetailsData} />
              </div>
            </div>
          )}
        </form>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <AddPaymentModalWrapper setOpen={setOpen} />
      </Modal>
    </>
  );
}

export default StepForm;
// ready to go
