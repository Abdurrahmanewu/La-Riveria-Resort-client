import { useLoaderData } from "react-router-dom";

const SingleCardDetails = () => {
  const cardDetails = useLoaderData();
  const { title, price, img, description } = cardDetails;
  console.log(cardDetails);
  return (
    <div className="mx-auto max-w-screen-xl pt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        {title}
      </h2>
      <p className="text-xl sm:text-2xl text-center mb-6">
        Package Price:
        <span className="text-orange-600 text-3xl font-bold"> ৳{price}</span>
      </p>
      <div className="flex flex-col items-start gap-12">
        <div className="w-full lg:w-1/2">
          <img
            alt=""
            src={img}
            className="object-cover mb-6 object-center w-full h-72 lg:h-96 rounded-md dark:bg-gray-500"
          />
        </div>
        <div className=" mb-5 w-full text-center lg:text-left">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetails;
