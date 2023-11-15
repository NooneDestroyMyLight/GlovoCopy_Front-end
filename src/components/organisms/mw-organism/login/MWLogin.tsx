import { FC } from "react";

import style from "./MWLogin.module.scss";
import LoginVariantButt from "../../../atoms/login-variant-butt/LoginVariantButt";
import { MWLoginData } from "../data";

const { title, description, socialMedia, terms } = MWLoginData;

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
        <h3 className={style["title"]}>{title}</h3>
        <p className={style["description"]}>{description}</p>
        <ul className={style["mw-login__content__buttons"]}>
          {socialMedia.map((item) => (
            <LoginVariantButt data={item} />
          ))}
        </ul>
        <p className={style["terms"]}>{terms}</p>{" "}
        {/*need transform this one into link array*/}
      </li>
    </ul>
  );
};

export default MWLogin;
