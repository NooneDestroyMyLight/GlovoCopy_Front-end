import { useState } from "react";

export const useToggle = (intialState: boolean): [boolean, () => void] => {
  const [value, setToggle] = useState(intialState);

  const toggle = () => setToggle(!value);
  console.log("insideHook", value);

  return [value, toggle];
};
