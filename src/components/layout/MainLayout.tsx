import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

const MainLayout = () => {
//   const location = useLocation();
//   const noHeaderFooter = location.pathname.includes("community");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
