import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

export const useScreenResize = () => {
  const { screenHeight, screenWidth, handleScreenResize } = useStateContext();

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    handleScreenResize();

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [handleScreenResize]);
  return { screenHeight, screenWidth };
};
