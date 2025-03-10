// import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/features/FormPic.jpg";
import logo from "../../assets/Logo/logo_La_Riveria-removebg-preview.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
    });
  };
  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   console.log(name, email, password);
  // };
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex justify-center items-center my-4">
        <Link to="/">
          <img className="h-[20vh]" src={logo} alt="" />
        </Link>
      </div>
      <h2 className="text-center text-5xl font-bold font-serif text-[#d89b62] pb-5">
        SignUp Now
      </h2>
      <div className="flex flex-col lg:flex-row bg-[#f9f9f1] p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col px-6">
          {/* Text Section */}
          <div className="text-section mb-6 lg:mb-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Plan Your Escape to Nature- <br />
              SignUp
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 lg:space-y-10"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 border border-gray-300 rounded-lg"
              {...register("name")}
            />
            <div className="grid grid-cols-1 gap-4 lg:gap-10">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("email")}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                // required
                className="p-3 border border-gray-300 rounded-lg"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-xl">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-xl">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-xl">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 text-xl">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <input
              className="p-3 bg-[#d89b62] text-xl text-white font-bold rounded-lg hover:bg-[#b57c4c]"
              type="submit"
              value="SignUp"
            />
          </form>
          <p className=" text-center p-2">
            <small className=" text-lg text-zinc-800 font-bold lg:text-xl">
              Already have an account?{" "}
              <Link
                className="text-red-600 text-xl font-medium lg:text-2xl"
                to="/login"
              >
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
