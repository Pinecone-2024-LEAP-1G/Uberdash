"use client";

import { FC, memo, useRef } from "react";
import Lottie from "react-lottie";

interface ILottieAnimationProps {
  animationData: unknown;
  height?: string | number;
  width?: string | number;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

const LottieAnimation: FC<ILottieAnimationProps> = memo(
  ({
    height = "auto",
    width = "auto",
    loop = true,
    autoplay = true,
    animationData,
    className = `lottie__${crypto.randomUUID()}`,
    speed = 1,
  }) => {
    const ref = useRef(null);

    const options = {
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className,
      },
    };

    return (
      <Lottie
        options={options}
        height={height}
        width={width}
        speed={speed}
        ref={ref}
      />
    );
  }
);

LottieAnimation.displayName = "LottieAnimation";

export default LottieAnimation;
