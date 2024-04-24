import { Outlet } from "react-router-dom";
import CommunityNav from "./shared/CommunityNav";
import Footer from "./shared/Footer";


const CommunityDashboard = () => {
    return (
        <div>
            <CommunityNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CommunityDashboard;