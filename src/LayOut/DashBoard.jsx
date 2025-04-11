import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  // eslint-disable-next-line no-unused-vars
  FaUtensils,
} from "react-icons/fa";
import { TbBuildingCottage } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-[#0d462b] text-white">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/userHome"
                  >
                    <FaHome></FaHome>
                    ADMIN Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/allreservation"
                  >
                    <TbBuildingCottage></TbBuildingCottage>
                    All Reservations of Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/cart"
                  >
                    <FaBook></FaBook>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/users"
                  >
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/bookings"
                  >
                    <FaList></FaList>
                    My Bookings
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/userHome"
                  >
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/reservation"
                  >
                    <FaCalendar></FaCalendar>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/cart"
                  >
                    <FaShoppingCart></FaShoppingCart>
                    My cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/review"
                  >
                    <FaAd></FaAd>
                    Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                    to="/dashboard/bookings"
                  >
                    <FaList></FaList>
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}

            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink
                className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                to="/"
              >
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                to="/packages"
              >
                <FaSearch></FaSearch>
                All Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:bg-[#b57c4c] hover:text-black transition-colors"
                to="/contacts"
              >
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
