/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "../../redux/hook";


const useUserInfo = () => {
  const userInfo:any = useAppSelector((state) => state.auth.userInfo);
  return userInfo?.data?.user; // or return the whole userInfo if needed
};

export default useUserInfo;
