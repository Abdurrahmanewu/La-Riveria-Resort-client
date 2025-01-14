import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <div className="mx-auto m-20 max-w-screen-xl review-bg-img relative h-[60vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-green-400 bg-opacity-5 backdrop-blur-md"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl mb-8">
          Hear What Our Guests Are Saying About Their Stay
        </h1>
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2500,
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
