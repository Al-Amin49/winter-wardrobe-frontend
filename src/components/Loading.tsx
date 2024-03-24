import { useLottie } from "lottie-react";
import loading from "../utils/lottie/loading.json";
const Loading = () => {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };
  const style={
    height: 350 
  }

  const { View } = useLottie(options, style);
  return <div className="flex justify-center items-center h-full pt-20">{View}</div>;
};

export default Loading;
