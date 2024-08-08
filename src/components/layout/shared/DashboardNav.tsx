import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/winLogoFinal2.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout } from "../../../redux/features/authSlice";
import { toggleTheme } from "../../../redux/features/themeSlice";


const DashboardNav = ({ toggleSidebar }) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Function to close the mobile navigation menu
//   const closeNav = () => {
//     setNav(false);
//   };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
    toggleSidebar();
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
  <>
    <div className="font-bold w-full max-w-screen-xl bg-gradient-to-r bg-black h-[70px] flex  justify-between items-center px-4 text-white">

     <div className="flex items-center ">
            {/* Mobile Navigation Icon */}
     <div onClick={handleNav} className="block md:hidden mr-2 lg:ml-0">
        {nav ? <X size={20} /> : <Menu size={20} />}
      </div>

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="" className="w-36" loading="lazy" />
      </Link>

     </div>
      {/* Desktop Navigation */}
      <ul className="flex space-x-8 justify-between items-center">

        {userInfo ? (
          <Link to="/login">
            <button onClick={handleLogout} className="btn btn-primary text-white">
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary text-white">Login</button>
          </Link>
        )}
      </ul>

      {/* TOGGLE THEME */}
      <button onClick={handleToggleTheme} className="rounded-lg backdrop-blur-[2px] p-1 inline-block">
        {darkMode ? <Sun /> : <Moon size={24} />}
      </button>

      
     
    </div>
  </>
  );
};

export default DashboardNav;
