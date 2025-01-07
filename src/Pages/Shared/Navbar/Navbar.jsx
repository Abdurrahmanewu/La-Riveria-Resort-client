// import { Link } from 'react-router-dom';
// import logo from '../../../assets/Logo/logo.svg'
const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Packages</a>
            </li>
            <li>
              <a>Activities</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        {/* <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className=" w-14 rounded-2xl mx-auto mt-0" src={logo} alt="logo" />
        </Link> */}
        {/* <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Packages</a>
          </li>
          <li>
            <a>Activities</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
