import { FC, memo, useState } from "react";
import { useExclusiveMWToggle } from "../../../hooks/useExclusiveMWToggle";
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
//
import {
  STYLE_MW_POSITION_LOGIN,
  STYLE_MW_SET_ADDRESS_SIZE,
} from "../../../constant/styles";
import { HEADER_TEMPLATE } from "./header.data";

import HeaderUserInfo from "../header-user-info/HeaderUserInfo";
import HeaderUserOrders from "../../molecules/header-user-orders/HeaderUserOrders";
import { useExclusiveDropdown } from "../../../hooks/useExclusiveDropdown";
import MWLocationPages from "../../templates/mw-location-pages/MWLocationPages";

//

interface HeaderI {
  //   className: string;
}

const mWName = ["mw-login", "mw-sLocation-slides"];

const dDList = ["header-user-info", "header-user-orders"];

const Header: FC<HeaderI> = memo(
  (
    {
      /*className*/
    }
  ) => {
    const [isOpen, currentMW, toggleMW, funArray] =
      useExclusiveMWToggle(mWName);
    const [isSticky, elRef] = useSticky(false);
    const [isCurrent, handleOpenCurrent, ref] = useExclusiveDropdown(dDList);
    const [userAddress, setUserCurrentAddress] = useState<string>("");
    //
    const isAuth: boolean = true;

    // console.log("Header RERENDER");
    return (
      <>
        <div ref={elRef} className={style.stickyScreen} />
        <header className={cn(style.header)}>
          <ul className={style["header-container"]}>
            <Logo /*className={logoStyle.logo__header}*/ />
            <HeaderInput />
            <div className={style["header-container__right-bar"]}>
              <div
                className={`${style["header-container__right-bar__address"]} ${
                  !isSticky && style["address-hide"]
                }`}
              >
                <HeaderUserAddress onItemClick={funArray[0]} />
              </div>
              {isAuth ? (
                <>
                  <div className={style["profile--desktop"]}>
                    <HeaderUserInfo
                      isOpen={isCurrent === dDList[0]}
                      handleToggle={handleOpenCurrent[0]}
                      ref={ref}
                    />
                    <HeaderUserOrders
                      isOpen={isCurrent === dDList[1]}
                      handleToggle={handleOpenCurrent[1]}
                      ref={ref}
                    />
                  </div>
                  <div className={style["profile--mobile"]}></div>
                </>
              ) : (
                <Button
                  className={BUTTON_STYLE["header-button"]}
                  onButtonClick={funArray[1]}
                  text={HEADER_TEMPLATE.loginButton}
                />
              )}
            </div>
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
            <MWLocationPages
              setCurrentUserAddress={setUserCurrentAddress}
              onCloseClick={toggleMW}
            />
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
