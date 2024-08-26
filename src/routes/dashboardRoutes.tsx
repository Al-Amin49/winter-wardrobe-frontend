import Dashboard from "../components/layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Clothes from "../pages/Dashboard/Clothe/Clothes";
import AddClothe from "../pages/Dashboard/Clothe/AddClothe";
import Testimonials from "../pages/Dashboard/Testimonials/Testimonials";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllDonation from "../pages/Dashboard/AllDonation/AllDonation";
import ManageTestimonial from "../pages/Dashboard/Testimonials/ManageTestimonial";
import ProtectedRoute from "../components/layout/ProtectedRoute";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element:<ProtectedRoute> <Dashboard /></ProtectedRoute>,
    children: [
      {
        index:true,
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
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "all-donations",
        element: <AllDonation />,
      },
      {
        path: "manage-testimonial",
        element: <ManageTestimonial />,
      },
    ],
  },
];