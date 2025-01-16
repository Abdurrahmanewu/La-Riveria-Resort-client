import img from "../../../assets/features/FormPic.jpg";

const Booking = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <h2 className="text-center text-5xl font-bold font-serif text-[#d89b62] pb-5">
        Book Now
      </h2>
      <div className="flex flex-col lg:flex-row bg-[#f9f9f1] p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col px-6">
          {/* Text Section */}
          <div className="text-section mb-6 lg:mb-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Plan Your Escape to Nature- <br />
              Book Now!
            </h1>
            <p className="text-gray-600 text-base lg:text-lg">
              Suspendisse condimentum mauris sem, id placerat massa posuere sit
              amet. Sed nisi nunc, fermentum sed iaculis eget, congue eget orci.
              Nam quis erat pharetra odio tincidunt laoreet nec eu mi.
            </p>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <img
              src={img}
              alt="Cottage surrounded by nature"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 form-section bg-[#a1bd94] p-6 rounded-lg mt-6 lg:mt-0">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <select
                name="cottageType"
                required
                className="p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Cottage Type</option>
                <option value="type1">River view Cottages</option>
                <option value="type2">Field view Cottages</option>
                <option value="type3">Entry side Cottages</option>
              </select>
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative">
                <label
                  htmlFor="checkin"
                  className="absolute top-2 left-3 text-gray-400 text-sm"
                >
                  Check-In
                </label>
                <input
                  id="checkin"
                  type="date"
                  name="checkin"
                  required
                  className="p-3 pt-6 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="checkout"
                  className="absolute top-2 left-3 text-gray-400 text-sm"
                >
                  Check-Out
                </label>
                <input
                  id="checkout"
                  type="date"
                  name="checkout"
                  required
                  className="p-3 pt-6 border border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <textarea
              name="specialRequest"
              placeholder="Add-Ons or Special Request"
              className="p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-[#d89b62] text-white font-bold rounded-lg hover:bg-[#b57c4c]"
            >
              Book Your Stay!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
