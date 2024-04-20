import App from "../App";
import AllClothe from "../pages/AllClothe/AllClothe";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ClotheDetails from "../pages/AllClothe/ClotheDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../components/layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome";
import Clothes from "../pages/Dashboard/Clothe/Clothes";
import AddClothe from "../pages/Dashboard/Clothe/AddClothe";
import Testimonials from "../pages/Dashboard/Testimonials/Testimonials";
import CommunityPost from "../pages/CommunityPost/CommunityPost";
import Volunteer from "../pages/Volunteer/Volunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-clothe",
        element: <AllClothe />,
      },
      {
        path: "/all-clothe/:id",
        element: <ClotheDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/community",
        element: <CommunityPost />,
      },
      {
        path:'/volunteer',
        element:<Volunteer/>
      }
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "winter-clothes",
        element: <Clothes />,
      },
      {
        path: "create-winter-clothe",
        element: <AddClothe />,
      },
      {
        path: "create-testimonial",
        element: <Testimonials />,
      },
    ],
  },
  
]);
