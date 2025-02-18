import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import OfferedPackages from "../Pages/OfferedPackages/OfferedPackages";
import Activities from "../Pages/Activities/Activities";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contacts from "../Pages/Contacts/Contacts";
import SingleCardDetails from "../Pages/Home/Top packages/SingleCardDetails";

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
          fetch(`https://la-riveria-server.vercel.app/packages/${params.id}`),
        // loader: async ({ params }) => {
        //   const response = await fetch("/packages.json");
        //   const data = await response.json();
        //   return data.find((item) => item.id === params._id);
        // },
      },
    ],
  },
]);
