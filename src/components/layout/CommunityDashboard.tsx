import { Outlet } from "react-router-dom";
import CommunityNav from "./shared/CommunityNav";


const CommunityDashboard = () => {
    return (
        <div>
            <CommunityNav/>
            <Outlet/>
        </div>
    );
};

export default CommunityDashboard;