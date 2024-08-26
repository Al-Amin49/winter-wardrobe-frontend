import { useAppSelector } from "../../redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo: any = useAppSelector((state) => state.auth.userInfo);
    const token = userInfo?.data?.token;
    const user= userInfo?.data?.user;
    


    if (!token) {
        return <Navigate to="/login" replace={true} />;
    }

    if (user.role!=='admin') {
        return <Navigate to="/" replace={true} />;
    }

    return children;
};

export default AdminProtectedRoute;