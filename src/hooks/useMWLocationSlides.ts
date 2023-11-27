import { useCallback, useEffect, useState } from "react";

const pages = Array.from({ length: 5 }, (_, i) => i);

export const useMWLocationSlides = (): [number, () => void, (() => void)[]] => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    currentPage !== 0 && setCurrentPage(0);
  }, []);

  const onPrevPage = useCallback(() => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
  }, [currentPage, setCurrentPage]);

  const moveToNextPage = pages.map((item) =>
    useCallback(() => {
      setCurrentPage(item);
    }, [pages])
  );

  return [currentPage, onPrevPage, moveToNextPage];
};
