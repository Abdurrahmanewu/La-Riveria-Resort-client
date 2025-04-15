import { FaUserCheck } from "react-icons/fa";
/* eslint-disable react/prop-types */
const ReviewBox = ({ card }) => {
  const { feedback, image, name, designation } = card;

  return (
    <div>
      <div className="p-6 max-w-lg mx-auto">
        <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-md backdrop-blur-lg">
          <p className="text-lg text-white mb-4">{feedback}</p>
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
            <div className="ml-4">
              <p className="text-white font-semibold text-lg">{name}</p>
              <p className="text-gray-300 text-sm">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
