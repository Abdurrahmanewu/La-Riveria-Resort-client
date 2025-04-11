import { Link } from "react-router-dom";

import logo from "../../../assets/Logo/logo_La_Riveria-removebg-preview.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { FaUserCheck } from "react-icons/fa";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((e) => {
        console.log("error", e);
      });
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => setIsDropdownOpen(false);
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-orange-500 hover:bg-orange-200 transition duration-300 "
          onClick={closeDropdown}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/packages"
          className="hover:text-orange-500 hover:bg-orange-200 transition duration-300 "
          onClick={closeDropdown}
        >
          Packages
        </Link>
      </li>
      <li>
        <Link
          to="/activities"
          className="hover:text-orange-500 hover:bg-orange-200 transition duration-300 "
          onClick={closeDropdown}
        >
          Activities
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-orange-500 hover:bg-orange-200 transition duration-300 "
          onClick={closeDropdown}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className="hover:text-orange-500 hover:bg-orange-200 transition duration-300 "
          onClick={closeDropdown}
        >
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 max-h-[10vh] bg-black bg-opacity-30 text-white w-full px-4 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 bg-opacity-50 rounded-box z-[1] text-black"
            >
              {menuItems}
            </ul>
          )}
        </div>

        <Link to="/" className="hidden lg:flex">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-center absolute left-1/2 transform -translate-x-1/2 lg:hidden">
        <Link to="/">
          <img className="sm: w-16 md:w-16" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:transform -translate-x-1/2">
        <ul className="menu menu-horizontal space-x-6 px-4 text-2xl ">
          {menuItems}
        </ul>
      </div>

      {/* Navbar End - Button on Right Side */}
      <div className="navbar-end ml-auto lg:ml-0">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar flex items-center justify-center"
              >
                <div className="w-12 h-10 flex items-center justify-center rounded-full bg-white pt-1">
                  <FaUserCheck className="w-12 text-green-800 text-2xl lg:text-3xl" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    to="/dashboard"
                    className="btn bg-[#d89b62] text-sm md:text-base lg:text-lg text-black hover:bg-[#c2681e] py-2 px-3"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleLogout}
                    className="btn bg-[#d89b62] text-sm md:text-base lg:text-lg text-black hover:bg-[#c2681e] py-2 px-3"
                  >
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link
              onClick={handleLogout}
              className="btn bg-[#d89b62]  text-xl text-black hover:bg-[#c2681e]"
            >
              LogOut
            </Link> */}
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="btn bg-green-400 hover:bg-green-600 text-black text-xl "
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
