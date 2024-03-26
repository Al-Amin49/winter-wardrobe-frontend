
import { NavLink, Outlet } from "react-router-dom";
import { Home, Shirt, Star } from "lucide-react";

const Dashboard = () => {
  
    return (
        <div className="flex">
            {/* dashboard side bar */}
            
            <div className="w-64 min-h-screen  bg-gradient-to-br from-green-500 to-orange-300">
                
    <h2 className="text-2xl font-bold flex justify-center items-center text-white text-center py-8"> 
    <Shirt className="text-secondary mr-1"/>
    Winter Wardrobe </h2>
                <ul className="menu p-4 text-base">
                  
                            <li>
                                <NavLink to="/dashboard/admin-home">
                                <Home />
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/winter-clothes">
                                <Shirt/>
                                   Clothes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/create-testimonial">
                                    <Star/>
                                   Create Testimonial</NavLink>
                            </li>
                            
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                           <Home/>
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