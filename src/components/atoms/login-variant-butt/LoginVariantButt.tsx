import { FC, memo } from "react";
//
import style from "./LoginVariantButt.module.scss";
import { LoginDataI } from "../../organisms/mw-organism/login/mw-login.data";

interface LoginVariantButtI {
  // className: string;
  data: LoginDataI;
  onButtonClick?: () => void;
}

// const HEADER_BUTTON_TEXT = "Розпочати!";

const LoginVariantButt: FC<LoginVariantButtI> = memo(
  ({ data, onButtonClick }) => {
    const { label, Icon } = data;

    console.log(label);
    return (
      <button
        type={"button"}
        onClick={onButtonClick}
        className={style["login-variant-butt"]}
      >
        <div className={style["icon-wrapper"]}>
          <Icon />
        </div>
        <span className={style["login-variant-butt__text"]}>{label}</span>
      </button>
    );
  }
);

export default LoginVariantButt;
