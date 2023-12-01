import { useState } from "react";

export const useToggle = (
  intialState: boolean = false
): [boolean, () => void] => {
  const [value, setToggle] = useState(intialState);

  const toggle = () => setToggle(!value);

  return [value, toggle];
};
