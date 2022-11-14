import { createBrowserRouter } from "react-router-dom";
import Main from "../../main/Main";
import Home from "../../components/Home/Home";
import Service from "../../components/services/Services";
import Blog from "../../components/blog/Blog";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Checkout from "../../components/Checkout/Checkout";
import NotFound from "../../components/NotFound/NotFound";
import Booking from "../../components/Booking/Booking";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import ServiceDetails from "../../components/Home/ServiceDetails";
import Review from "../../components/Review/Review";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Service /> },
      { path: "/blog", element: <Blog /> },
      { path: "/my-review", element: <Review/> },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            {" "}
            <Booking />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },

      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`)
      },

      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);
