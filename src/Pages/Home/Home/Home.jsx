import Banner from "../Banner/Banner";
// import Booking from "../Booking/Booking";
import Counter from "../Counters/Counter";
import Features from "../Features/Features";
import AddReview from "../Reviews/AddReview";
import Reviews from "../Reviews/Reviews";
import Packages from "../Top packages/Packages";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Features></Features>
      <Packages></Packages>
      <Counter></Counter>
      <Reviews></Reviews>
      <AddReview></AddReview>
    </div>
  );
};

export default Home;
