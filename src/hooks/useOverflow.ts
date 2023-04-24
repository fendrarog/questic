import React, { useCallback, useEffect, useState } from "react";

export const useOverflow = (
  myRef: React.MutableRefObject<HTMLDivElement | null>,
  dependency: any
) => {
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (!myRef) return;

    setOverflow(
      myRef!.current!.scrollWidth > myRef!.current!.offsetWidth ||
        myRef!.current!.scrollHeight > myRef!.current!.offsetHeight
    );
  }, [myRef, dependency]);

  return overflow;
};
