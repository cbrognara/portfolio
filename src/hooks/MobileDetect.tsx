import { useState, useEffect } from 'react'

type WindowSize = {
  width?: number,
  height?: number,
}

export function MobileDetect() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return { windowSize, isMobile: windowSize?.width ? windowSize.width < 960 : false };
}