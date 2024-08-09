import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/winLogoFinal2.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout } from "../../../redux/features/authSlice";
import { toggleTheme } from "../../../redux/features/themeSlice";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo: any = useAppSelector((state) => state.auth.userInfo);
  const user = userInfo?.data?.user;
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Function to close the mobile navigation menu
  const closeNav = () => {
    setNav(false);
  };
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  //handleLogout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="z-10 absolute   font-bold  w-full max-w-screen-xl bg-gradient-to-r bg-black h-[70px] flex justify-between items-center   px-4 text-white ">
      <div className="flex items-center">
        <div onClick={handleNav} className="block md:hidden mr-2">
          {nav ? <X size={20} /> : <Menu size={20} />}
        </div>
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="w-36 " loading="lazy" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 md:items-center">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/all-clothe">All Clothes</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/Volunteer">Volunteer</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </ul>
      {/* TOGGLE THEME */}
      <div className="flex  items-center ">
        {user ? (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user.name} src={user.profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white text-center rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              <NavLink to="/dashboard/admin-home">Dashboard</NavLink>
              <Link to="/login">
                {" "}
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
            {" "}
            <button className="btn btn-primary text-white">Login</button>
          </Link>
        )}
        <div className="flex items-center mr-4">
          <div className="flex flex-col items-center justify-center">
          <h3 className="text-sm font-normal mt-2">{user.username}</h3>
          {/* <p className="text-sm font-normal text-primary">{user.role}</p> */}
          </div>
        </div>
        <button
          onClick={handleToggleTheme}
          className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
        >
          {darkMode ? <Sun /> : <Moon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed flex flex-col space-y-2  md:hidden left-0 top-[70px] w-[60%] h-fit rounded-md p-4 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}

        <NavLink to="/" onClick={closeNav} className="">
          Home
        </NavLink>
        <NavLink onClick={closeNav} to="/all-clothe">
          All Winter Clothes
        </NavLink>
        <NavLink onClick={closeNav} to="/community">
          Community
        </NavLink>
        <NavLink onClick={closeNav} to="/about-us">
          About Us
        </NavLink>
        <NavLink onClick={closeNav} to="/Volunteer">
          Volunteer
        </NavLink>
        {user && (
          <>
            <NavLink onClick={closeNav} to="/dashboard/admin-home" className="">
              Dashboard
            </NavLink>
          </>
        )}
        {user ? (
          <Link to="/login">
            {" "}
            <button
              onClick={handleLogout}
              className="btn btn-primary text-white"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            {" "}
            <button onClick={closeNav} className="btn btn-primary text-white">
              Login
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
