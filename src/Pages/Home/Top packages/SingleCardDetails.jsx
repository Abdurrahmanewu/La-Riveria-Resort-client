import { useLoaderData } from "react-router-dom";

const SingleCardDetails = () => {
  const cardDetails = useLoaderData();
  const { title, price, img, description } = cardDetails;
  console.log(cardDetails);
  return (
    <div className="mx-auto max-w-screen-xl pt-20">
      <h2 className="text-5xl mb-10">{title}</h2>
      <p className="text-2xl mb-6">
        Package Parice:
        <span className="text-orange-600 text-3xl font-bold">৳{price}</span>
      </p>
      <img
        alt=""
        src={img}
        className="object-cover mb-6 object-center w-1/2 rounded-md h-72 dark:bg-gray-500"
      />
      <p className="text-2xl">{description}</p>
    </div>
  );
};

export default SingleCardDetails;
