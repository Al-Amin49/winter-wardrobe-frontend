import Dashboard from "../components/layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome";
import Clothes from "../pages/Dashboard/Clothe/Clothes";
import AddClothe from "../pages/Dashboard/Clothe/AddClothe";
import Testimonials from "../pages/Dashboard/Testimonials/Testimonials";

export const dashboardRoutes = [
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
];