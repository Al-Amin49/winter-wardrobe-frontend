import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
    const location= useLocation();
    const noHeaderFooter=location.pathname.includes('community')
    return (
        <div>
          {noHeaderFooter ||  <Header/>}
            <Outlet/>
        </div>
    );
};

export default MainLayout;