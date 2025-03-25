import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import OfferedPackages from "../Pages/OfferedPackages/OfferedPackages";
import Activities from "../Pages/Activities/Activities";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contacts from "../Pages/Contacts/Contacts";
import SingleCardDetails from "../Pages/Home/Top packages/SingleCardDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookNow from "../Pages/CheckOut/BookNow/BookNow";
import DashBoard from "../LayOut/DashBoard";
import AllReservation from "../Pages/DashBoard/Admin/AllReservation";

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
      {
        path: "/singleCardDetails/:id",
        element: <SingleCardDetails></SingleCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/packages/${params.id}`),
        // loader: async ({ params }) => {
        //   const response = await fetch("/packages.json");
        //   const data = await response.json();
        //   return data.find((item) => item.id === params._id);
        // },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/booknow",
        element: <BookNow></BookNow>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "allreservation",
        element: <AllReservation></AllReservation>,
      },
    ],
  },
]);
