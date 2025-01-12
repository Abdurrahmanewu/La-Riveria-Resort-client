import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("../../../../public/packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);

  return (
    <div className="package-bg-img bg-fixed h-[80vh]">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white pb-5">Our Top Packges</h2>
      </div>
      <div className="mx-auto max-w-screen-xl mt-10">
        <Swiper
          // slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <div>
            {packages.map((card) => (
              <SwiperSlide key={card._id}>
                <SingleCard card={card}></SingleCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Packages;
