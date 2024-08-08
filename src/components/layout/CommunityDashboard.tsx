import { Outlet } from "react-router-dom";
import CommunityNav from "./shared/CommunityNav";
import Footer from "./shared/Footer";

const CommunityDashboard = () => {
  return (
    <div>
      <CommunityNav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CommunityDashboard;
