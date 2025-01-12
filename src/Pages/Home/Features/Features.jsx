import feature1 from "../../../assets/features/River view cottage.jpg";
import feature2 from "../../../assets/features/feature-2.png";
import feature3 from "../../../assets/features/feature-3.png";
const Features = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-center font-bold sm:text-3xl md:text-4xl lg:text-5xl ">
        Lets Explore <br /> La Riveria Resort & Park
      </h2>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        {/* First Feature */}
        <div className="container mx-auto space-y-12 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature1}
              alt="Riverview Wooden Cottage"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 lg:w-1/2">
            <h2 className=" sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Riverview Wooden Cottage
            </h2>
            <p className="my-6 dark:text-gray-400 sm:text-xl md:text-2xl lg:text-3xl">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="container mx-auto mt-28 space-y-12 flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature2}
              alt="Riverside Pool"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 lg:w-1/2">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Riverside Pool with Horizontal River View
            </h2>
            <p className="my-6 dark:text-gray-400 sm:text-xl md:text-2xl lg:text-3xl">
              Have a parallel view of river while swimming in our pool. It will
              give you a feel of swimming in the river.
            </p>
          </div>
        </div>

        {/* Third Feature */}
        <div className="container mx-auto mt-28 space-y-12 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature3}
              alt="Open Dining Space"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 lg:w-1/2">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Open Dining Space with River View
            </h2>
            <p className="my-6 dark:text-gray-400 sm:text-xl md:text-2xl lg:text-3xl">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
