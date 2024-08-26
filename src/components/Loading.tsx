import { useLottie } from "lottie-react";
import loading from "../utils/lottie/loading.json";

const Loading = () => {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };

  const style = {
    height: "350px", // Default height for larger screens
  };

  const { View } = useLottie(options, style);

  return (
    <div className="flex justify-center items-center h-full pt-20">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        {View}
      </div>
    </div>
  );
};

export default Loading;
