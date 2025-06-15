/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function SymptomCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="bg-no-repeat bg-cover pt-[47px] pb-[40px] px-8 rounded-[20px] bg-[100%_100%] min-h-[412px] flex flex-col h-full"
      style={{ backgroundImage: `url(${item.imgUrl})` }}
    >
      <h3
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="flex grow text-[30px] font-bold leading-normal"
      >
        {item.title}
      </h3>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <button
          onClick={() => {
            navigate(item.buttonLink);
          }}
          className="flex items-center gap-[10px] book-btn text-white"
        >
          <p>Book now</p>
          <div>
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SymptomCard;
