import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Shirt, Star } from "lucide-react";
import DashboardNav from "./shared/DashboardNav";
import { FaUserFriends } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <DashboardNav toggleSidebar={toggleSidebar} />
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed   inset-y-0 left-0 z-20 w-64 bg-primary transition-transform transform ${
            isSidebarOpen ? "translate-x-0 top-[70px] md:top-0" : "-translate-x-full"
          } md:relative md:translate-x-0  md:h-auto`}
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
            <li>
              <NavLink to="/dashboard/allusers">
                <FaUserFriends/>
               All Users
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div
          className={`flex-1 p-8 transition-transform transform `}
          onClick={() => setIsSidebarOpen(false)}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
