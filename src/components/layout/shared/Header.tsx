
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logoWinter.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout } from "../../../redux/features/authSlice";
import { toggleTheme } from "../../../redux/features/themeSlice";
import useUserInfo from "../../../components/hooks/useUserInfo";

const Navbar = () => {
const user= useUserInfo();

  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="z-10 absolute bg-gray-200 font-bold w-full  text-secno h-[70px] flex justify-between items-center px-4 ">
      <div className="flex items-center">
        {/* Logo for Large and Small Screens */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-24 lg:w-32 " loading="lazy" />
          {/* <img src={smallLogo} alt="Small Logo" className="w-14 lg:hidden" loading="lazy" /> */}
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex md:space-x-2 lg:space-x-4 md:items-center ">
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/" > Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/all-clothe">All Clothes</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/community">Community</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/Volunteer">Volunteer</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/leaderboard">Leaderboard</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} to="/about-us">About Us</NavLink>
      </ul>

      {/* TOGGLE THEME */}
      <div className="flex items-center">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img alt={user.name} src={user.profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white text-center rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              {user.role === "admin" ? (
                <>
                  {" "}
                  <NavLink to="/dashboard/adminhome">Dashboard</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/dashboard/donation-history">Dashboard</NavLink>
                </>
              )}
              <Link to="/login">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-primary my-3 text-white"
                >
                  Logout
                </button>
              </Link>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-primary hidden lg:block text-white">
              Login
            </button>
          </Link>
        )}
        <div className="flex items-center mr-4">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-sm font-normal mt-2 hidden md:block">{user?.username}</h3>
            {user?.role === "admin" && (
              <span>
                <h3 className="px-2 py-0 rounded-full text-xs bg-green-500 ">
                  {user?.role}
                </h3>
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleToggleTheme}
          className="rounded-lg backdrop-blur-[2px] p-1  hidden lg:block"
        >
          {darkMode ? <Sun /> : <Moon size={24} />}
        </button>
        <div onClick={handleNav} className="block lg:hidden mr-2 text-black">
          {nav ? <X size={20} /> : <Menu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed flex flex-col space-y-2 lg:hidden left-0 top-[70px] w-[60%] h-fit rounded-md p-4 border-r border-r-gray-900 bg-[#000300]  text-white ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')}   to="/" onClick={closeNav} > Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} onClick={closeNav} to="/all-clothe">   All Winter Clothes</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} onClick={closeNav} to="/community">Community</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} onClick={closeNav} to="/about-us">About Us</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-blue-600')} onClick={closeNav} to="/Volunteer">    Volunteer</NavLink>
        <Link to="/login">
          <button className="btn btn-sm btn-primary  text-white">Login</button>
        </Link>
        <button
          onClick={handleToggleTheme}
          className="rounded-lg backdrop-blur-[2px] p-1 "
        >
          {darkMode ? <Sun /> : <Moon size={24} />}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
