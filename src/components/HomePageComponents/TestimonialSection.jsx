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
import 'swiper/css/pagination';
import ratingImg from "../../assets/images/icon/rating.png"
import { Pagination } from 'swiper/modules';

function TestimonialSection() {
  return (
    <section className="px-[50px]">
      <div className="bg-headerBg rounded-[40px] py-[100px]">
        <div   className="container">
          {/* section title  */}
          <div  data-aos="zoom-up"
                data-aos-duration="1000" className="mb-[10px] text-center">
            <h3 className="text--xl">Verified Customer Reviews</h3>
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
    // Define breakpoints for responsiveness
    640: { // Devices larger than 640px
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: { // Devices larger than 768px
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: { // Devices larger than 1024px
      slidesPerView: 4,
      spaceBetween: 32,
    },
  }}
>
  {testimonialData.map((item) => (
    <SwiperSlide key={item.id}>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="py-9 px-8 rounded-lg bg-white mt-5"
      >
        <p className="text-xl font-bold text-menuLinkColor leading-9 mb-6 text-center">
          {item.message}
        </p>
        <img
          className="w-[115px] h-[20px] mx-auto"
          src={ratingImg}
          alt="ratingImg"
        />
        <div className="flex items-center justify-center gap-2 mt-6">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={item.imgUrl}
            alt={item.clientName}
          />
          <p className="text-xl font-medium">{item.clientName}</p>
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