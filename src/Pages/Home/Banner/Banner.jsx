import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../assets/Slider/slide1.png";
import slide2 from "../../../assets/Slider/slide2.png";
import slide3 from "../../../assets/Slider/slide3.png";
import "./Banner.css";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];
  return (
    <div className="h-full">
      {" "}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        interval={3000}
        transitionTime={800}
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentSlide ? "zoom-effect" : ""
            }`}
          >
            <img
              src={slide}
              className="w-full object-cover max-h-[90vh] transition-all duration-1000"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
