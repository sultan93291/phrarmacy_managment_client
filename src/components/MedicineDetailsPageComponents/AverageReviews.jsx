import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#222E48",
  inactiveFillColor: "#FFC700",
  itemStrokeWidth: 2,
  activeStrokeColor: "#222E48",
  inactiveStrokeColor: "#222E48",
};

function AverageReviews() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const { id } = useParams();
  const [averageReview, setaverageReview] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicine/review-avarage`,
    })
      .then(res => {
        console.log("average review", res.data.data);
        setaverageReview(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      data-aos="zoom-up"
      data-aos-duration="2000"
      className="flex gap-12 w-full items-center py-8 border-b border-dashed border-t "
    >
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="bg-[#FFC700] border rounded-xl flex-col p-6 flex justify-center items-center border-[#000000]"
      >
        <h3 className="text-4xl font-bold pb-2">
          {Math.round(averageReview?.average_rating)}
        </h3>
        <div>
          <Rating
            className="h-10 gap-1 flex"
            style={{ maxWidth: 250 }}
            value={Math.round(averageReview?.average_rating)}
            readOnly={true}
            itemStyles={myStyles}
          />
        </div>
        <p className="text-lg font-bold pt-4">{averageReview?.total_reviews}</p>
      </div>
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="flex flex-col w-full gap-2"
      >
        {averageReview?.ratings?.map((item, index) => {
          return (
            <div key={index} className="w-full flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
                  fill="#FFC700"
                />
              </svg>
              <span className="text-[#404A60] "> {item.rating} </span>
              <div className="w-full flex items-center">
                <div className="w-full bg-[#EBECEF] h-3 relative rounded-lg">
                  <div
                    style={{
                      width: `${Number(item.percentage)}%`,
                    }}
                    className=" bg-[#FFC700] h-3 absolute top-0 left-0 rounded-lg"
                  ></div>
                </div>
              </div>
              <span className="w-6 rounded-lg ">{item.percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AverageReviews;
