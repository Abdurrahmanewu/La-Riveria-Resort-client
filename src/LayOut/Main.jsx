import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noheaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="bg-white">
      {noheaderFooter || <Navbar></Navbar>}
      <div className="mx-auto">
        <Outlet></Outlet>
      </div>

      {noheaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
