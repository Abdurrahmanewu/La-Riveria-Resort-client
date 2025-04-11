/* eslint-disable no-unused-vars */
import { useContext } from "react";
import coverImg from "../../../assets/features/FormPic.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const Booking = () => {
  const axiosSecure = useAxios();
  const cardDetails = useLoaderData();
  const { title, price, img, description, _id } = cardDetails;
  // console.log(cardDetails);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (user && user.email) {
      const bookingItem = {
        packageId: _id,
        packageName: title,
        packaImage: img,
        packagePrice: price,
        email: user.email,
        data: data,
      };
      axiosSecure.post("/bookings", bookingItem).then((res) => {
        console.log(res.data);
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
              src={coverImg}
              alt="Cottage surrounded by nature"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 form-section bg-[#a1bd94] p-6 rounded-lg mt-6 lg:mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 border border-gray-300 rounded-lg"
              {...register("name")}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("phone")}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("email")}
              />
            </div>
            <select
              name="package"
              required
              className="p-3 border border-gray-300 rounded-lg"
              {...register("package")}
            >
              <option value="">Select Package</option>
              <option value="Couple Night Stay Package">
                Couple Night Stay Package
              </option>
              <option value="Couple Day-Long package">
                Couple Day-Long package
              </option>
              <option value="22 Hours Couple Package ">
                22 Hours Couple Package
              </option>
              <option value="Wedding package">Wedding package</option>
              <option value="Day-Long Without Room">
                Day-Long Without Room
              </option>
              <option value="Live BBQ package">Live BBQ package</option>
            </select>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <select
                name="cottage type"
                required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("cottage type")}
              >
                <option value="">Select Cottage Type</option>
                <option value="River view Cottages">River view Cottages</option>
                <option value="Field view Cottages">Field view Cottages</option>
                <option value="Entry side Cottages">Entry side Cottages</option>
              </select>
              <input
                type="number"
                name="guests number"
                placeholder="Number of Guests"
                required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("guests number")}
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
                  name="checkin date"
                  required
                  className="p-3 pt-6 border border-gray-300 rounded-lg w-full"
                  {...register("checkin date")}
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
                  name="checkout date"
                  required
                  className="p-3 pt-6 border border-gray-300 rounded-lg w-full"
                  {...register("checkout date")}
                />
              </div>
            </div>
            <textarea
              name="specialRequest"
              placeholder="Add-Ons or Special Request"
              className="p-3 border border-gray-300 rounded-lg"
              {...register("specialRequest")}
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
