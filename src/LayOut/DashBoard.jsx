import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import { TbBuildingCottage } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);
  const isAdmin = user?.email === "admintest@gmail.com";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="h-screen md:flex">
      {/* Top Nav for Mobile */}
      <div className="md:hidden bg-[#0d462b] text-white flex items-center justify-between px-4 py-3">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-30 md:z-auto top-0 left-0 h-full w-64 bg-[#0d462b] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <ul className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminhome"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaHome /> ADMIN Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allreservation"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <TbBuildingCottage /> All Reservations of Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/managebookings"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userbookings"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userreservation"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaCalendar /> My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userreviews"
                  className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                >
                  <FaAd />
                  My Reviews
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Links */}
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className="hover:bg-[#b57c4c] hover:text-black transition-colors"
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packages"
              className="hover:bg-[#b57c4c] hover:text-black transition-colors"
            >
              <FaSearch /> All Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="hover:bg-[#b57c4c] hover:text-black transition-colors"
            >
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
        />
      )}

      {/* Main content */}
      <div className="bg-white text-black flex-1 mt-0 md:mt-0 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
