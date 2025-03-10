// import React from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/features/FormPic.jpg";
import logo from "../../assets/Logo/logo_La_Riveria-removebg-preview.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
// import { use } from "react";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { login } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const captcha = event.target.captcha.value;
    console.log(email, password, captcha);
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
      alert("Captcha is wrong");
    }
  };

  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex justify-center items-center my-4">
        <Link to="/">
          <img className="h-[20vh]" src={logo} alt="" />
        </Link>
      </div>
      <h2 className="text-center text-5xl font-bold font-serif text-[#d89b62] pb-5">
        Login Now
      </h2>
      <div className="flex flex-col lg:flex-row bg-[#f9f9f1] p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col px-6">
          {/* Text Section */}
          <div className="text-section mb-6 lg:mb-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Plan Your Escape to Nature- <br />
              Login Now
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
            onSubmit={handleLogin}
            className="flex flex-col space-y-4 lg:space-y-10"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-1 gap-2">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="mt-2 p-0 ">
                <LoadCanvasTemplate />
              </div>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type text above"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <input
              className="p-3 bg-[#d89b62] text-xl text-white font-bold rounded-lg hover:bg-[#b57c4c]"
              type="submit"
              value="Login"
              disabled={disable}
            />
          </form>
          <p className=" text-center p-2">
            <small className=" text-lg text-zinc-800 font-bold lg:text-xl">
              New Here?{" "}
              <Link
                className="text-red-600 text-xl font-medium lg:text-2xl"
                to="/signup"
              >
                Create an account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
