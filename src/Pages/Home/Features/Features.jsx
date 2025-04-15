import feature1 from "../../../assets/features/River view cottage.jpg";
import feature2 from "../../../assets/features/feature-2.png";
import feature3 from "../../../assets/features/feature-3.png";
const Features = () => {
  return (
    <div className="mb-16 sm:mb-16 md:mb-20 lg:mb-24 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
        Let&apos;s Explore <br /> La Riveria Resort & Park
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
              Riverview wooden cottage
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Relax and unwind in our cozy wooden cottage with breathtaking
              river views — your perfect getaway starts here.
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
              Riverside pool with a perfect river view
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Swim alongside the serene river in our stunning riverside pool —
              designed to give you the feeling of floating with the flow.
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
              Open dining space with river view
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
              Enjoy a delicious meal in our open dining area with calming views
              of the river — the perfect blend of taste and tranquility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
