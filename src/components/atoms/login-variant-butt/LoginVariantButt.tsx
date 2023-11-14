import { FC, memo } from "react";
//
import style from "./LoginVariantButt.module.scss";

interface LoginVariantButtI {
  // className: string;
  onButtonClick?: () => void;
  text: string;
}

// const HEADER_BUTTON_TEXT = "Розпочати!";

const LoginVariantButt: FC<LoginVariantButtI> = memo(
  ({ text, onButtonClick }) => {
    return (
      <button
        type={"button"}
        onClick={onButtonClick}
        className={style["login-variant-butt"]}
      >
        <span className={style["login-variant-butt__text"]}>{text}</span>
      </button>
    );
  }
);

export default LoginVariantButt;
