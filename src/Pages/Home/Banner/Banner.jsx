import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../assets/Slider/Slide-1.png";
import slide2 from "../../../assets/Slider/Untitled design.png";
import slide3 from "@/assets/Slider/Slide-3.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={slide1} />
      </div>
      <div>
        <img src={slide2} />
      </div>
      <div>
        <img src={slide3} />
      </div>
    </Carousel>
  );
};

export default Banner;
