import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ card }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, img, price } = card;
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
          <img src={img} alt={title} className="w-full  object-cover" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-2xl bold">{title}</h2>
          <p className="text-xl font-semibold">
            Price: <span className="text-xl font-extrabold">৳{price}</span>
          </p>
          <Link to={`/singleCardDetails/${_id}`}>
            <p className="text-2xl text-red-800">More Details...</p>
          </Link>

          <div className="card-actions justify-end">
            <button
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
