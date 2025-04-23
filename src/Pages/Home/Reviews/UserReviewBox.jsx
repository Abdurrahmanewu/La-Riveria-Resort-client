/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { FaUserCheck } from "react-icons/fa";

const UserReviewBox = ({ review, handleDelete }) => {
  const { feedback, image, name, designation, _id } = review;
  return (
    <div>
      <div className="p-6 max-w-lg mx-auto">
        <div className="bg-gradient-to-b from-[#249761] to-[#a1bd94] p-6 rounded-lg shadow-md backdrop-blur-lg">
          <p className="text-lg text-black mb-4">{feedback}</p>
          <div className="flex items-center">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-white"
              />
            ) : (
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white p-3">
                <FaUserCheck className=" text-green-800 text-2xl lg:text-3xl" />
              </div>
            )}
            <div className="ml-4 text-black">
              <p className=" font-semibold text-lg">{name}</p>
              <p className=" text-sm">{designation}</p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => handleDelete(review._id)}
              className="btn btn-sm btn-error text-xs"
            >
              Delete review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviewBox;
