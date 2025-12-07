import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ card }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line react/prop-types
  const { _id, title, img, price } = card;
  // const words = description.split(" ");
  // const shortDescription = words.slice(0, 10).join(" ");
  // eslint-disable-next-line no-unused-vars
  const handleCard = (card) => {
    if (user && user.email) {
      navigate(`/booknow/${_id}`);
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="">
      <div
        className="card bg-base-100 shadow-xl mx-auto
                      w-[90vw] sm:w-[80vw] md:w-80 lg:w-96 
                      sm:mx-auto md:mx-4 lg:mx-6"
      >
        <figure>
          <img src={img} alt={title} className="w-full  object-cover" />
        </figure>
        <div className="card-body p-5 bg-white">
          <h2 className="card-title text-2xl bold text-black">{title}</h2>
          <p className="text-xl font-semibold text-black">
            Price: <span className="text-xl font-extrabold">৳{price}</span>
          </p>
          <Link to={`/singleCardDetails/${_id}`}>
            <p className="text-2xl text-red-800">More Details...</p>
          </Link>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleCard(card)}
              className="btn bg-green-500 hover:bg-green-600 text-white text-xl "
              // style={{ backgroundColor: "rgb(36, 195, 88)" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
