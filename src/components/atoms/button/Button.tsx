import { FC, memo } from "react";
//
import style from "./Button.module.scss";
import { useToggle } from "../../../hooks/useToggle";

interface ButtonI {
  className: string;
  onButtonClick?: () => void;
  // text: string;
}

const HEADER_BUTTON_TEXT = "Розпочати!";

const Button: FC<ButtonI> = memo(({ className, onButtonClick }) => {
  console.log("Button RERENDER");
  return (
    <button type={"button"} onClick={onButtonClick} className={className}>
      {HEADER_BUTTON_TEXT}
    </button>
  );
});

export default Button;
