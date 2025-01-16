import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Counter from "../Counters/Counter";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Packages from "../Top packages/Packages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Packages></Packages>
      <Counter></Counter>
      <Reviews></Reviews>
      <Booking></Booking>
    </div>
  );
};

export default Home;
