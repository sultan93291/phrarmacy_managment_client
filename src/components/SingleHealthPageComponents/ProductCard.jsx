
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CommonButtonV2 from "../Common/CommonButtonV2";

function ProductCard({ item }) {
    const params = useParams();
    console.log(params)
  return (
    <div className="product-wrapper">
      <div className="p-5 rounded-[20px] border border-[rgba(0_0_0_0.20)]">
        <div className="product-img h-[380px] overflow-hidden rounded-[10px]">
          <img
            className="w-full h-full object-cover duration-200 ease-in-out"
            src={item.imgUrl}
            alt={item.title}
          />
        </div>
        <div className="mt-6">
          <p className="text-[18px] text-paraCOlor">{item.category}</p>
          {/* rating  */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: item.rating }).map((_, index) => (
                <p key={index} className="h-[18px] w-[18px]">
                  <FaStar />
                </p>
              ))}
            </div>
            <p className="text-sm mt-3">({item.rating})</p>
          </div>
          <h3 className="text-[18px] font-medium capitalize mt-4 text-categoryBtnColor">{item.title}</h3>
          <p className="mt-[10px] text-[20px] font-bold text-primary">${item.price}</p>
          {/* button  */}
          <div className="flex items-center justify-between mt-5">
              <Link to={`/consultation`}>
              <CommonButtonV2 type="fill" text="Continue" />
              </Link>
              <Link to={'/'}>
              <CommonButtonV2 type="border" text="Learn More" />
              </Link>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ProductCard;
