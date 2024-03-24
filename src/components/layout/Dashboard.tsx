import {  FaHome, FaTshirt, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GiClothes } from "react-icons/gi";

const Dashboard = () => {
  
    return (
        <div className="flex">
            {/* dashboard side bar */}
            
            <div className="w-64 min-h-screen  bg-gradient-to-br from-green-500 to-orange-300">
                
    <h2 className="text-2xl font-bold flex justify-center items-center text-white text-center py-8">Winter Wardrobe <span><GiClothes className="text-secondary text-xl"/></span></h2>
                <ul className="menu p-4">
                  
                            <li>
                                <NavLink to="/dashboard/admin-home">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/winter-clothes">
                                    <FaTshirt />
                                   Clothes</NavLink>
                            </li>
                            
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                    
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;