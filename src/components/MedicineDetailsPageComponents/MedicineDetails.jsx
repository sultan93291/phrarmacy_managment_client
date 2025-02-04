import { Rating, RoundedStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isIdPresent, storeMedicineId } from "@/Redux/features/assesmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { addMedicineToCheckout } from "@/Redux/features/medicineDetails";
import { useCreatePlaceOrderIntentMutation } from "@/Redux/features/api/apiSlice";

function MedicineDetails({ data }) {
  console.log("my details ", data);

  const { id, counsultainid } = useParams();

  const [selectedValue, setSelectedValue] = useState("1"); // State to store selected value
  const [subtotalPrice, setsubTotalPrice] = useState();
  const [quantitys, setquantity] = useState();

  const handleValueChange = value => {
    setSelectedValue(value); // Update the selected value

    const quantity = parseInt(data?.quantity * value);
    const subTotalPrice = data?.price * value;
    setsubTotalPrice(subTotalPrice);
    setquantity(quantity);
  };

  const navigate = useNavigate();

  const images = [
    {
      img_url:
        "https://images.unsplash.com/photo-1633171029787-3a1022cfc922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img_url:
        "https://plus.unsplash.com/premium_photo-1672941426599-44cc7bc767b9?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [preview, setPreview] = useState(data?.avatars?.[0]?.avatar || "");
  const [isAsseesMentAvailable, setisAsseesMentAvailable] = useState();
    const [createPlaceOrderIntent, { isLoading, isSuccess, isError, error }] =
      useCreatePlaceOrderIntentMutation();

  const assesMentResult = useSelector(
    state => state.assesmentSlice.isAssesMent
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setPreview(data?.avatars[0]?.avatar);
    setquantity(data?.quantity);
    setsubTotalPrice(data?.price);
  }, [data]);

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FBBA58",
    inactiveFillColor: "#fbf1a9",
  };

  useEffect(() => {
    dispatch(isIdPresent({ id: counsultainid }));
    console.log(assesMentResult);
  }, [counsultainid]);

  console.log(assesMentResult, "asseesMentAvailable");

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const handlePreview = img => {
    setPreview(img);
  };

  const handleCheckout = data => {
    const MedicineDetails = {
      medicine_id: data?.id,
      quantity: selectedValue,
      unit_price: data?.price,
      total_price: subtotalPrice,
      title: data?.title,
      dosage: data?.dosage,
      avatar: data.avatars[0]?.avatar,
    };

    console.log(MedicineDetails, "this is the medicine details");

     if (counsultainid) {
       if (assesMentResult.assesmentResult) {
         dispatch(addMedicineToCheckout(MedicineDetails));
         navigate("/checkout");
       } else {
         dispatch(storeMedicineId({ id: id, assesMentId: counsultainid }));
         navigate(`/treatment/consultation/${counsultainid}`);
       }
     } else {
       dispatch(addMedicineToCheckout(MedicineDetails));
       navigate("/checkout");
     }
  };

  return (
    <div
      data-aos="zoom-up"
      data-aos-duration="2000"
      className="p-5 sm:p-8 xl:p-14 rounded-xl bg-[#EFF8FF]"
    >
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 xl:gap-24 items-center">
        {/* image container */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="p-5 sm:p-8 bg-white">
            <div className="w-full h-[250px] sm:h-[400px] lg:h-[350px]  xl:h-[500px]  bg-white rounded-lg overflow-hidden">
              <img
                className="w-full hover:scale-110  duration-300 rounded-lg h-full object-cover "
                src={`${SiteURl}/${preview}`}
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
            {data?.avatars?.map((img, index) => (
              <div key={index} className="p-4 bg-white">
                <div
                  onClick={() => handlePreview(img.avatar)}
                  key={index}
                  className="h-[100px] xl:h-[200px] cursor-pointer  bg-white object-cover rounded-lg overflow-hidden"
                >
                  {" "}
                  <img
                    className="w-full hover:scale-110 duration-300 h-full object-cover rounded-lg"
                    src={`${SiteURl}/${img.avatar}`}
                    alt=""
                  />{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* details text */}
        <div>
          <h3 className="text-3xl pb-4 font-semibold text-[#0065A7]">
            {data?.title}
          </h3>
          <h3 className="text-2xl pb-6 font-semibold text-[#007ECE]">
            Vitamin
          </h3>

          <Rating
            className="h-10 gap-1 flex"
            style={{ maxWidth: 250 }}
            value={Number(data?.max_star)}
            readOnly={true}
            itemStyles={myStyles}
          />

          <div className="pt-8 space-y-2">
            {data?.features.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M17.328 3.40073L10.4132 10.316C10.2089 10.5199 9.96649 10.6816 9.69974 10.7919C9.43299 10.9022 9.14714 10.9588 8.8585 10.9586C8.82628 10.9586 8.79406 10.9586 8.76022 10.9568C8.4555 10.9427 8.15705 10.8653 7.88387 10.7296C7.61069 10.5939 7.36877 10.4027 7.17352 10.1684L5.2594 7.72559C5.14353 7.57362 5.09163 7.3824 5.11477 7.19271C5.1379 7.00301 5.23424 6.82987 5.38324 6.71021C5.45801 6.65004 5.5439 6.60521 5.63601 6.57826C5.72812 6.55132 5.82463 6.54279 5.92004 6.55317C6.01544 6.56356 6.10786 6.59264 6.19202 6.63877C6.27618 6.68489 6.35042 6.74715 6.4105 6.82199L8.31274 9.24965C8.37681 9.32376 8.45549 9.38385 8.54386 9.42616C8.63222 9.46847 8.72837 9.49208 8.82628 9.49553C8.92798 9.50067 9.02962 9.48429 9.12456 9.44748C9.2195 9.41066 9.30561 9.35423 9.37726 9.28187L16.2939 2.36681C16.2992 2.35997 16.3058 2.35493 16.3127 2.34827C16.3817 2.28139 16.4632 2.2288 16.5526 2.19352C16.642 2.15825 16.7375 2.14097 16.8336 2.1427C16.9296 2.14442 17.0244 2.1651 17.1125 2.20356C17.2006 2.24202 17.2802 2.2975 17.3468 2.36681C17.4135 2.43592 17.4659 2.5175 17.501 2.60689C17.5362 2.69627 17.5534 2.7917 17.5516 2.88774C17.5499 2.98377 17.5293 3.07852 17.4909 3.16657C17.4525 3.25462 17.3972 3.33407 17.328 3.40073Z"
                      fill="#0CA6FC"
                    />
                    <path
                      d="M15.0612 9.61241C14.8934 11.5026 14.0204 13.1743 12.7133 14.3761C11.3658 15.6178 9.60244 16.3102 7.77012 16.3172C3.7284 16.3172 0.453125 13.042 0.453125 9.00041C0.453125 4.95887 3.7284 1.68359 7.76994 1.68359C9.48894 1.68359 11.152 2.28875 12.4692 3.39251C12.7811 3.64667 12.8269 4.10783 12.5725 4.42157C12.4494 4.57167 12.2717 4.66682 12.0785 4.68619C11.8853 4.70556 11.6923 4.64756 11.5418 4.52489C11.5368 4.52147 11.5334 4.51643 11.5283 4.51301C9.04974 2.43797 5.35758 2.76521 3.28434 5.24381C1.20912 7.72367 1.53636 11.4144 4.01478 13.4896C6.4932 15.5648 10.1855 15.2356 12.2606 12.757C13.0339 11.833 13.5028 10.6927 13.6032 9.49199C13.6098 9.39713 13.635 9.30451 13.6775 9.21941C13.7199 9.13431 13.7787 9.05841 13.8505 8.99605C13.9223 8.9337 14.0056 8.8861 14.0958 8.85599C14.186 8.82589 14.2813 8.81386 14.3761 8.82059C14.383 8.82059 14.388 8.82239 14.3932 8.82239C14.5865 8.83861 14.7655 8.93096 14.8907 9.07911C15.016 9.22727 15.0774 9.4191 15.0612 9.61241Z"
                      fill="#0CA6FC"
                    />
                  </svg>
                  <h4>{item?.feature}</h4>
                </div>
              );
            })}
          </div>

          <div className="border-[#78D0FF] relative rounded-lg border-4 mt-14 p-8 max-w-[400px]">
            <div>
              <h3 className="text-[#02558A] font-semibold pb-4">Quantity</h3>
              <Select onValueChange={handleValueChange}>
                <SelectTrigger className="w-full bg-[#DFF1FF] border-[#DFF1FF]">
                  <SelectValue
                    placeholder={`1 month supply (${data?.quantity * 1})`}
                  />
                </SelectTrigger>
                <SelectContent className={"font-medium"}>
                  <SelectItem value="1">
                    1 month supply ({data?.quantity * 1}){" "}
                  </SelectItem>
                  <SelectItem value="2">
                    2 month supply ({data?.quantity * 2}){" "}
                  </SelectItem>
                  <SelectItem value="3">
                    3 month supply ({data?.quantity * 3}){" "}
                  </SelectItem>
                </SelectContent>
              </Select>

              <h3 className="font-bold text-[#02558A] text-xl pt-5">
                £ {data?.price * selectedValue}{" "}
              </h3>
            </div>

            <div className=" absolute left-1/2 -translate-x-1/2 -top-5 border-2 border-[#78D0FF] rounded-full px-2 sm:px-4 py-1 sm:py-2 bg-[#EFF8FF] ">
              <h4 className="text-[#02558A] uppercase font-semibold text-xs sm:text-sm">
                Price Checker
              </h4>
            </div>
          </div>

          <Link className="block pt-10 sm:pt-20">
            <button
              onClick={() => {
                handleCheckout(data);
              }}
              className="px-6 sm:px-8 py-2 sm:py-4 text-xl rounded-full bg-[#2EB7FF] text-white w-full font-bold"
            >
              {id && !counsultainid
                ? "Go to Checkout"
                : counsultainid && !assesMentResult.assesmentId
                ? "Go to Consultation"
                : "Go to Checkout"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetails;
