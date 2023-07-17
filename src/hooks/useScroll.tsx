import { useState, useEffect } from 'react'

type Scroll = {
  yOffset?: number,
  scrollY?: number,
}

export function useScroll() {
  const [currentScroll, setCurrentScroll] = useState<Scroll>({
    yOffset: undefined,
    scrollY: undefined,
  });

  useEffect(() => {
    const scroll = () => {
      const { pageYOffset, scrollY } = window;
      setCurrentScroll({
        yOffset: pageYOffset,
        scrollY
      })
    };
    document.addEventListener("scroll", scroll);
    () => document.removeEventListener("scroll", scroll);
  }, []);

  return { currentScroll, isAtTop: currentScroll?.yOffset ? currentScroll.yOffset < 200 : true };
}