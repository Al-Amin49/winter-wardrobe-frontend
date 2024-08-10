import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/winLogoFinal2.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout } from "../../../redux/features/authSlice";
import { toggleTheme } from "../../../redux/features/themeSlice";

type TToggleSidebar = {
  toggleSidebar: () => void;
};
const DashboardNav = ({ toggleSidebar }: TToggleSidebar) => {
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
                <h3 className="text-sm font-normal mt-2">{user?.username}</h3>
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
        </ul>
      </div>
    </>
  );
};

export default DashboardNav;
