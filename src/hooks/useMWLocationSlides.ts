import { FC, useCallback, useEffect, useState } from "react";
import MwLocationPrevButton from "../assets/icons/mw-location-prev-button/MwLocationPrevButton";

export const useMWLocationSlides = (): [
  number,
  React.Dispatch<React.SetStateAction<number>>,
  () => void
] => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    currentPage !== 0 && setCurrentPage(0);
  }, []);

  const onPrevPage = useCallback(() => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
  }, [currentPage, setCurrentPage]);

  return [currentPage, setCurrentPage, onPrevPage];
};
