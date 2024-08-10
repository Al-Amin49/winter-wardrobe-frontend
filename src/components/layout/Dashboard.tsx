import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Shirt, Star } from "lucide-react";
import DashboardNav from "./shared/DashboardNav";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = ():void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <DashboardNav toggleSidebar={toggleSidebar} />
      <div className="flex ">
        {/* dashboard side bar */}
        <div
          className={`w-64 min-h-screen  bg-primary transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="menu p-4 text-base">
            <li>
              <NavLink to="/dashboard/admin-home">
                <Home />
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/winter-clothes">
                <Shirt />
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/create-testimonial">
                <Star />
                Create Testimonial
              </NavLink>
            </li>
           
           
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
