import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { _id, title, img, price, description } = card;
  // const words = description.split(" ");
  // const shortDescription = words.slice(0, 10).join(" ");

  return (
    <div className="">
      <div
        className="card bg-base-100 shadow-xl 
                      sm:w-full md:w-80 lg:w-96 
                      sm:mx-auto md:mx-4 lg:mx-6"
      >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-xl font-semibold">
            Price: <span className="text-xl font-extrabold">৳{price}</span>
          </p>
          <Link>
            <p className="text-2xl text-red-800">More Details...</p>
          </Link>

          <div className="card-actions justify-end">
            <button
              className="btn text-white text-xl "
              style={{ backgroundColor: "rgb(36, 195, 88)" }}
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
