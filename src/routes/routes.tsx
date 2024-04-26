import App from "../App";
import AllClothe from "../pages/AllClothe/AllClothe";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ClotheDetails from "../pages/AllClothe/ClotheDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Volunteer from "../pages/Volunteer/Volunteer";
import { dashboardRoutes } from "./dashboardRoutes";
import { communityRoutes } from "./communityRoutes";

import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import Leaderboard from "../pages/Leaderboard/Leaderboard";

//main routes
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
        path:'/volunteer',
        element:<Volunteer/>
      },
      {
        path:'/leaderboard',
        element:<Leaderboard/>
      },
      {
        path:'/about-us',
        element:<AboutUsPage/>
      },
    ],
  },

  // dashboard routes
  ...dashboardRoutes,
  
  //community routes

  ...communityRoutes
]);
