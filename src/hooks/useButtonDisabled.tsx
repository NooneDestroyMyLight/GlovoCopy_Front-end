import { useState } from "react";

export const useButtonDisabled = (): [boolean, () => void] => {
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const handlerToggle = () => setDisabled(!isDisabled);
  //
  return [isDisabled, handlerToggle];
};
