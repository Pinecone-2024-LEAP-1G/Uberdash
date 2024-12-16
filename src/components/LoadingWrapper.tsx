import { ReactNode, useState, useEffect } from "react";
import LottieAnimation from "@/components/LottieLoader";
import loaderAnimation from "../../public/loader/lottie.json";

interface LoadingWrapperProps {
  children: ReactNode;
}

const LoadingWrapper = ({ children }: LoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <LottieAnimation
        animationData={loaderAnimation}
        height={200}
        width={200}
      />
    </div>
  ) : (
    <>{children}</>
  );
};

export default LoadingWrapper;