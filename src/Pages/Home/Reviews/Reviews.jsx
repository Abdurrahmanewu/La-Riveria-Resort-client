/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import "./Reviews.css";
import useReviews from "../../../Hooks/useReviews";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="mx-auto m-20 max-w-screen-xl review-bg-img bg-fixed relative h-[60vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          Hear What Our Guests Are Saying About Their Stay
        </h1>
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1040: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full max-w-4xl mx-auto"
        >
          <div>
            {reviews.map((card, index) => (
              <SwiperSlide key={index}>
                <ReviewCard card={card}></ReviewCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
