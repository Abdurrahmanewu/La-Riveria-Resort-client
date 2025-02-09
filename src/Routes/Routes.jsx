import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import OfferedPackages from "../Pages/OfferedPackages/OfferedPackages";
import Activities from "../Pages/Activities/Activities";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contacts from "../Pages/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: <OfferedPackages></OfferedPackages>,
      },
      {
        path: "/activities",
        element: <Activities></Activities>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
