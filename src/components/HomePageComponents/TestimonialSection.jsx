const testimonialData = [
  {
    id: 1,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 2,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 3,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 4,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 5,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 6,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 7,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 8,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ratingImg from "../../assets/images/icon/rating.png";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

function TestimonialSection() {
  const [allReview, setallReview] = useState([]);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicine/review?sort=&per_page=&page=`,
    })
      .then((res) => {
        console.log(res.data.data, " all review  data");
        setallReview(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="px-4 xl:px-[47px]">
      <div className="bg-headerBg rounded-xl sm:rounded-[40px] py-10 sm:py-[100px]">
        <div className="container">
          {/* section title  */}

          <div
            data-aos="zoom-up"
            data-aos-duration="1000"
            className="mb-[10px] text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl opacity-1 text-[#0ca6fc] font-bold lg:text--xl">
              Verified Customer Reviews
            </h3>
          </div>
          <div>
            <Swiper
              spaceBetween={12}
              slidesPerView={1} // Default to 1 slide per view for small screens
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
            >
              {allReview.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className="py-[30px] px-8 max-w-[378px] min-h-[250px] max-h-[378px] rounded-lg bg-white mt-5"
                  >
                    <p className="text-xl font-bold text-menuLinkColor leading-9 mb-6 text-center">
                      "{item.review}"
                    </p>
                    <img
                      className="w-[115px] h-[20px] mx-auto"
                      src={ratingImg}
                      alt="ratingImg"
                    />
                    <div className="flex items-center justify-center gap-2 mt-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={`${SiteURl}/${item?.user?.avatar}`}
                        alt={`${SiteURl}/${item?.user?.avatar}`}
                      />
                      <p className="text-xl font-medium">{item?.user?.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
