import { FC, memo } from "react";
//
import style from "./Button.module.scss";
import { useToggle } from "../../../hooks/useToggle";

interface ButtonI {
  className: string;
  onButtonClick?: () => void;
  // text: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
}

const Button: FC<ButtonI> = memo(
  ({ className, onButtonClick, text, type = "button", isDisabled = false }) => {
    console.log("Button RERENDER");
    return (
      <button
        type={type}
        onClick={onButtonClick}
        className={className}
        disabled={isDisabled}
      >
        {text}
      </button>
    );
  }
);

export default Button;
