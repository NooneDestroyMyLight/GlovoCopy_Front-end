import { useCallback, useState } from "react";
import { useToggle } from "./useToggle";

export const useExclusiveMWToggle = (
  mWArrayName: string[]
): [boolean, string, () => void, (() => void)[]] => {
  const [currentMW, setCurrentMW] = useState<string>("");
  const [isOpen, toggleMW] = useToggle(false);
  const funArray = mWArrayName.map((item) => {
    return useCallback(() => {
      setCurrentMW(item);
      toggleMW();
    }, []);
  });

  return [isOpen, currentMW, toggleMW, funArray];
};
//useMoreMWToggle
