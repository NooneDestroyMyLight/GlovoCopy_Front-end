import { FC } from "react";

import style from "./MWLogin.module.scss";
import LoginVariantButt from "../../../atoms/login-variant-butt/LoginVariantButt";

interface MWLoginI {
  //   className: string;
  onIconClick?: () => void;
}

const MWLogin: FC<MWLoginI> = ({
  /*className*/
  onIconClick,
}) => {
  return (
    <ul className={style["mw-login"]}>
      <li className={style["close-icon__wrapper"]}>
        <i className={style["close-icon"]} onClick={onIconClick} />
      </li>
      <li className={style["mw-login__content"]}>
        <h3>Добро пожаловать</h3>
        <span>Выберите одну из опций, чтобы продолжить</span>
        <ul>
          <LoginVariantButt text={"Google"} />
          {/* <li>Google</li> */}
          <li>Facebook</li>
          <li>E-mail</li>
        </ul>
        <span className={style["TOS"]}></span>
      </li>
    </ul>
  );
};

export default MWLogin;
