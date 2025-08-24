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
import UserBookings from "../Pages/DashBoard/User/UserBookings";
import Dash from "../Pages/Practice/Dash";
import Reser from "../Pages/Practice/Reser";
import UserReview from "../Pages/Home/Reviews/UserReview";
import UserPayment from "../Pages/Payments/UserPayment/UserPayment";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail/PaymentFail";
import UserReservation from "../Pages/DashBoard/User/UserReservation";
import ManageBookings from "../Pages/DashBoard/Admin/ManageBookings";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";

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
          fetch(
            `https://la-riveria-resort-server-api.vercel.app/packages/${params.id}`
          ),
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
        path: "/booknow/:id",
        element: <BookNow></BookNow>,
        loader: ({ params }) =>
          fetch(
            `https://la-riveria-resort-server-api.vercel.app/packages/${params.id}`
          ),
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
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "managebookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "userbookings",
        element: <UserBookings></UserBookings>,
      },
      {
        path: "userreviews",
        element: <UserReview></UserReview>,
      },
      {
        path: "userreservation",
        element: <UserReservation></UserReservation>,
      },
      {
        path: "userpayment",
        element: <UserPayment></UserPayment>,
      },
      {
        path: "payments/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "payments/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
    ],
  },
  {
    path: "/dashboard2",
    element: <Dash></Dash>,
    children: [
      { path: "reservations", element: <Reser></Reser> },
      {
        path: "allusers",
        element: <AllReservation></AllReservation>,
      },
    ],
  },
]);
