import { useEffect, useRef, useState } from "react";

export const useSticky = (
  initialState: boolean
): [boolean, React.MutableRefObject<HTMLDivElement | null>] => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(initialState);

  useEffect(() => {
    const headerElement = divRef.current;
    if (!headerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        });
      },
      { threshold: 0.95 } //0.95
    );

    observer.observe(headerElement);

    return () => {
      observer.unobserve(headerElement);
    };
  }, []);
  //Ask Maks to discribe this part

  return [isSticky, divRef];
};
