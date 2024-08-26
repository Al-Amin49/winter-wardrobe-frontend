/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const userInfo: any = useAppSelector((state) => state.auth.userInfo);
    // eslint-disable-next-line no-unsafe-optional-chaining
    const token = userInfo?.data?.token;


  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;