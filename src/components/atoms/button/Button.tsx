import { FC, memo } from "react";
//
import style from "./Button.module.scss";
import { useToggle } from "../../../hooks/useToggle";

interface ButtonI {
  className: string;
  onButtonClick?: () => void;
  // text: string;
  text?: string;
}

const Button: FC<ButtonI> = memo(({ className, onButtonClick, text }) => {
  console.log("Button RERENDER");
  return (
    <button type={"button"} onClick={onButtonClick} className={className}>
      {text}
    </button>
  );
});

export default Button;
