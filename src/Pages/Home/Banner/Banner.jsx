import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../assets/Slider/slide1.png";
import slide2 from "../../../assets/Slider/slide2.png";
import slide3 from "../../../assets/Slider/slide3.png";

const Banner = () => {
  return (
    <Carousel>
      <div className="lg:h-[90vh]">
        <img src={slide1} />
      </div>
      <div className="lg:h-[90vh]">
        <img src={slide2} />
      </div>
      <div className="lg:h-[90vh]">
        <img src={slide3} />
      </div>
    </Carousel>
  );
};

export default Banner;
