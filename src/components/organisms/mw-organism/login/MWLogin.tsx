import { FC, useCallback, useState } from "react";

import style from "./MWLogin.module.scss";

interface MWLoginI {
  //   className: string;
}

const MWLogin: FC<MWLoginI> = (
  {
    /*className*/
  }
) => {
  return (
    <div>
      <div></div>
      <h3>Добро пожаловать</h3>
      <span>Выберите одну из опций, чтобы продолжить</span>
      <ul>
        <li>Google</li>
        <li>Facebook</li>
        <li>E-mail</li>
      </ul>
      <span className={style["TOS"]}></span>
    </div>
  );
};

export default MWLogin;
