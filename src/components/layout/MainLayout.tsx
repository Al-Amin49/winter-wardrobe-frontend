import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const MainLayout = () => {

  return (
    <div>
      <Header />
     <div className="min-h-screen">
     <Outlet />
     </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
