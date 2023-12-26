import { useState, useRef, useEffect } from "react";

export const useOverlayHeaderView = (
  initialState: boolean
): [boolean, React.MutableRefObject<HTMLDivElement | null>] => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(initialState);

  useEffect(() => {
    const checkScroll = () => {
      if (!divRef.current) {
        return;
      }

      const rect = divRef.current.getBoundingClientRect();
      setIsSticky(rect.top < 0);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [divRef, setIsSticky, isSticky]);

  return [isSticky, divRef];
};
