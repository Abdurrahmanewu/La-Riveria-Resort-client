import feature1 from "../../../assets/features/River view cottage.jpg";
import feature2 from "../../../assets/features/feature-2.png";
import feature3 from "../../../assets/features/feature-3.png";
const Features = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-center font-bold text-5xl">
        Lets Explore <br /> La Riveria Resort & Park
      </h2>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12 flex md:flex-col sm:flex-col lg:flex-row  ">
          <div>
            <img className="rounded-md shadow-sm" src={feature1} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h2 className="text-5xl font-bold">Riverview Wooden Cottage</h2>
            <p className="my-6 dark:text-gray-400 text-3xl">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>
        <div className=" mt-28 container mx-auto space-y-12 flex md:flex-col sm:flex-col lg:flex-row-reverse  ">
          <div>
            <img className="rounded-md shadow-sm" src={feature2} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h2 className="text-5xl font-bold">
              Riverside Pool with Horizontal River View
            </h2>
            <p className="my-6 dark:text-gray-400 text-3xl">
              Have a parallel view of river while swiming in our pool. It will
              give you a fell of swimming in the river.
            </p>
          </div>
        </div>
        <div className="mt-28 container mx-auto space-y-12 flex md:flex-col sm:flex-col lg:flex-row  ">
          <div>
            <img className="rounded-md shadow-sm" src={feature3} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h2 className="text-5xl font-bold">
              Open Dining Space with River View
            </h2>
            <p className="my-6 dark:text-gray-400 text-3xl">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
