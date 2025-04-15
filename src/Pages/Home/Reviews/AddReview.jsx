/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import coverImg from "../../../assets/features/FormPic.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import useReviews from "../../../Hooks/useReviews";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AddReview = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [, refetch] = useReviews();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    // console.log(data);
    const { name, phone, email, designation, feedback } = data;
    if (user && user.email) {
      const reviewItem = {
        name: name,
        phone: phone,
        email: email,
        designation: designation,
        feedback: feedback,
      };
      axiosSecure.post("/reviews", reviewItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your review has been added successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          reset();
          refetch();
        }
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
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="container mx-auto max-w-screen-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 sm:mb-8 font-serif text-[#d89b62] text-center ">
        Drop us a review
      </h2>
      <div className="flex flex-col lg:flex-row bg-[#f9f9f1] p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col px-6">
          {/* Text Section */}
          <div className="text-section mb-6 lg:mb-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Help us to improve with your feedback
            </h1>
            <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              (Before droping a review, makesure to SignUp or Login first)
            </p>
            <p className="text-black text-base  lg:text-lg">
              We hope you had a wonderful experience at La Riveria Resort &
              Park. Your feedback means a lot to us and helps us improve. Please
              take a moment to share your thoughts or leave a review. We&apos;d
              love to hear what you enjoyed and how we can serve you better!
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
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              required
              className="p-3 border border-gray-300 rounded-lg"
              {...register("designation")}
            />
            <textarea
              name="feedback"
              placeholder="Add your precious review here..."
              className="p-3 border border-gray-300 rounded-lg lg:h-[30vh]"
              {...register("feedback")}
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-[#d89b62] text-white font-bold rounded-lg hover:bg-[#b57c4c]"
            >
              Add your review!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
