import feature1 from "../../../assets/features/River view cottage.jpg";
import feature2 from "../../../assets/features/feature-2.png";
import feature3 from "../../../assets/features/feature-3.png";
const Features = () => {
  return (
    <div className="mb-16 sm:mb-16 md:mb-20 lg:mb-24 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
        Lets Explore <br /> La Riveria Resort & Park
      </h2>

      <section className="space-y-20 lg:space-y-32">
        {/* First Feature */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature1}
              alt="Riverview Wooden Cottage"
            />
          </div>
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Riverview Wooden Cottage
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature2}
              alt="Riverside Pool"
            />
          </div>
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Riverside Pool with Horizontal River View
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Have a parallel view of river while swimming in our pool. It will
              give you a feel of swimming in the river.
            </p>
          </div>
        </div>

        {/* Third Feature */}
        <div className=" flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img
              className="rounded-md shadow-sm w-full"
              src={feature3}
              alt="Open Dining Space"
            />
          </div>
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Open Dining Space with River View
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Enjoy your holiday in our gorgeous wooden cottage with river view.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
