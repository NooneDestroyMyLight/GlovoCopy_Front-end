import { FC, memo } from "react";
import { useMoreMWToggle } from "../../../hooks/useMoreMWToggle";
import { useSticky } from "../../../hooks/useSticky";
//
import style from "./Header.module.scss";
import cn from "classnames";
//
import Logo from "../../../assets/icons/logo/Logo";
//
import HeaderInput from "../../molecules/header-input/HeaderInput";
//
import Button from "../../atoms/button/Button";
import BUTTON_STYLE from "../../atoms/button/Button.module.scss";
//
import HeaderUserAddress from "../../molecules/header-user-adress/HeaderUserAddress";
//
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import LoginWrapper from "../../atoms/login-wrapper/LoginWrapper";

import SetAddress from "../mw-organism/set-address/SetAddress";
import {
  STYLE_MW_POSITION_LOGIN,
  STYLE_MW_SET_ADDRESS_SIZE,
} from "../../../constant/styles";
//

interface HeaderI {
  //   className: string;
}

const mWName = ["mw-login", "mw-set-address"];

const Header: FC<HeaderI> = memo(
  (
    {
      /*className*/
    }
  ) => {
    const [isOpen, currentMW, toggleMW, funArray] = useMoreMWToggle(mWName);
    const [isSticky, elRef] = useSticky(false);

    console.log(STYLE_MW_POSITION_LOGIN);
    console.log("Header RERENDER");
    return (
      <>
        <div ref={elRef} className={style.stickyScreen} />
        <header className={cn(style.header)}>
          <ul className={style["header-container"]}>
            <Logo /*className={logoStyle.logo__header}*/ />
            <HeaderInput />
            <li className={style["header-container__right-bar"]}>
              <div
                className={`${style["header-container__right-bar__address"]} ${
                  !isSticky && style["address-hide"]
                }`}
              >
                <HeaderUserAddress onItemClick={funArray[0]} />
              </div>
              <Button
                className={BUTTON_STYLE["header-button"]}
                onButtonClick={funArray[1]}
              />
            </li>
          </ul>
          <div className={style["mobile-address"]}>
            <HeaderUserAddress onItemClick={funArray[0]} />
          </div>
        </header>
        {currentMW === mWName[0] && (
          <ModelWindow
            isOpen={isOpen}
            toggleMW={toggleMW}
            position={STYLE_MW_SET_ADDRESS_SIZE}
          >
            <SetAddress onCloseClick={toggleMW} />
          </ModelWindow>
        )}
        {currentMW === mWName[1] && (
          <ModelWindow
            isOpen={isOpen}
            toggleMW={toggleMW}
            position={STYLE_MW_POSITION_LOGIN}
          >
            <LoginWrapper onIconClick={toggleMW} isOpen={isOpen} />
          </ModelWindow>
        )}
      </>
    );
  }
);

export default Header;
