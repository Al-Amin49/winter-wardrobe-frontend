import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import Container from "../Container";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/authSlice";
import { toggleTheme } from "../../redux/features/themeSlice";

const Navbar = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  // console.log('token', userInfo.data.token)
  // const user= userInfo?.data?.user;
  const dispatch= useAppDispatch()
  const {darkMode} = useAppSelector((store)=>store.theme);
  const handleToggleTheme = ()=>{
    dispatch(toggleTheme())
  }
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
const handleLogout=()=>{
  dispatch(logout())
}

  return (
    <Container>
      <div className="z-10 absolute  font-bold  w-full max-w-screen-xl bg-gradient-to-r from-green-500 to-black h-16 flex justify-between items-center   px-4 text-white">
        {/* Logo */}
        <Link to="/">
          {" "}
          <h1 className=" text-2xl text-[white]">Winter Wardrobe</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 md:items-center">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/all-clothe" className="">
            All Clothes
          </NavLink>
          <NavLink to="/community" className="">
          Community
         </NavLink>
          {userInfo &&
         <>
           <NavLink to="/dashboard/admin-home" className="">
           Dashboard
          </NavLink>
         </>
          }
          {userInfo ? (
            <Link to="/login">
              {" "}
              <button onClick={handleLogout} className="btn btn-primary text-white">Logout</button>
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn btn-primary text-white">Login</button>
            </Link>
          )}
         
        </ul>
        {/* TOGGLE THEME */}
        <button 
            onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
      
            >
              
             {darkMode ?  <Sun/> :  <Moon size={24} /> }
              
            </button>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <X size={20} /> : <Menu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed flex flex-col space-y-2  md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="text-2xl">Winter Wardrobe</h1>

          {/* Mobile Navigation Items */}

          <NavLink to="/" onClick={closeNav} className="">
            Home
          </NavLink>
          <NavLink onClick={closeNav} to="/all-clothe">
            All Winter Clothes
          </NavLink>
          <button className="w-1/2 lg:w-full " onClick={closeNav}>
            Login
          </button>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
