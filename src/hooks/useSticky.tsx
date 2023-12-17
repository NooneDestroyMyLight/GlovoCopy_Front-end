import { useState, useRef, useEffect } from "react";

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
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(headerElement);

    return () => {
      observer.unobserve(headerElement);
    };
  }, [divRef, setIsSticky, isSticky]);

  return [isSticky, divRef];
};
