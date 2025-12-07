/* eslint-disable react/no-unescaped-entities */
import boat from "../../assets/Activities/Boat Riding.jpg";
import playZone from "../../assets/Activities/PlaZone-2.jpg";
const Activities = () => {
  return (
    <div className="text-black mx-auto max-w-screen-xl px-4 md:px-8 lg:px-12 pt-28">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        Adventure Awaits Beyond Your Doorstep
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-lg shadow-lg w-full object-cover"
            src={boat}
            alt="Boat Riding at La Riveria Resort"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Boat Riding
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
            Find Your Angling Nirvana in <br />
            Nature's Haven
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  mb-6">
            Welcome to La Riveria Resort & Park, a place where nature and
            adventure come together to create unforgettable memories. Our
            exhilarating boat riding service lets you glide over the calm waters
            while enjoying breathtaking views of the lush greenery around.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Whether you seek a peaceful escape or an exciting ride, we have
            options for everyone. Enjoy thrilling speedboat rides or relax on a
            sunset cruise for a mesmerizing experience.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Safety is our priority, and our experienced guides ensure a smooth
            and enjoyable ride. So, don’t miss out—hop aboard and let the beauty
            of La Riveria Resort & Park create memories that last a lifetime!
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-12 mt-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Children's Playground
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
            Kids' Kingdom: A World of
            <br />
            Fun & Smiles!
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Welcome to La Riveria Resort & Park, a place where families create
            unforgettable memories. We are thrilled to introduce our Children’s
            Playground, a safe and exciting space designed just for kids! Here,
            little adventurers can enjoy swings, slides, climbing frames, and
            open play areas, all built to encourage fun, creativity, and social
            interaction. Our playground is crafted with high-quality,
            child-friendly materials, ensuring a safe and enjoyable experience
            for all.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            While children immerse themselves in play, parents can relax knowing
            their little ones are in a secure environment. Whether you're here
            for a family vacation or a weekend getaway, our playground promises
            endless joy and laughter for the youngest guests.
          </p>
          <p className="text-lg mb-4 sm:text-xl md:text-2xl lg:text-3xl">
            So let the kids run, jump, and explore while you unwind in the
            beauty of our resort. Fun-filled memories await at La Riveria Resort
            & Park!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-lg shadow-lg w-full object-cover"
            src={playZone}
            alt="Children's Playground at La Riveria Resort"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
