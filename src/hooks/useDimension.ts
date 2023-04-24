import React, { useCallback, useEffect, useState } from "react";

export const useDimension = (
  myRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(myRef!.current!.offsetWidth);
    setHeight(myRef!.current!.offsetHeight);
    setTop(myRef!.current!.offsetTop);
    setLeft(myRef!.current!.offsetLeft);
  }, [myRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => handleResize(), 1000);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [myRef, handleResize]);
  return { width, height, top, left };
};
