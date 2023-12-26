import { useEffect, useState } from "react";

export const useInView = (refArray: React.RefObject<HTMLElement>[]) => {
  const [isInView, setIsInView] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entrys) => {
        const elArray = entrys.filter((item) => item.isIntersecting);

        if (elArray.length) {
          //@ts-ignore
          const title = elArray[0].target.innerText.split("\n")[0];
          setIsInView(title);
        }
      },
      { threshold: 0.99 } // threshold: 1.0
    );

    refArray.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      refArray.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, [refArray]);

  return isInView;
};

// export const useInView = (ref: React.RefObject<HTMLElement>) => {
//   const [isInView, setIsInView] = useState<boolean>(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.intersectionRatio > 0.8 && entry.isIntersecting)
//           setIsInView(entry.isIntersecting);
//         else setIsInView(false);
//         console.log(entry);
//       },
//       { threshold: 0.8 }
//     );

//     ref.current && observer.observe(ref.current);

//     return () => {
//       ref.current && observer.unobserve(ref.current);
//     };
//   }, [ref]);

//   return isInView;
// };
