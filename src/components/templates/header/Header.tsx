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
//
import { useExclusiveItem } from "../../../hooks/useExclusiveItem";
import MWLocationPages from "../mw-location-pages/MWLocationPages";
import HeaderProfileDD from "../header-profile-dd/HeaderProfileDD";
import HeaderOrdersDD from "../../molecules/header-orders-dd/HeaderOrdersDD";
import HeaderProfileMobile from "../header-profile-mobile/HeaderProfileMobile";

//

interface HeaderI {
  //   className: string;
}

const mWName = ["mw-login", "mw-sLocation-slides"];
const dDList = ["header-user-info", "header-user-orders"];

const Header: FC<HeaderI> = memo(({}) => {
  const [isOpen, currentMW, toggleMW, funArray] = useExclusiveMWToggle(mWName);
  const [isSticky, elRef] = useSticky(false);
  const [isCurrent, handleOpenCurrent, handleClickOutside] =
    useExclusiveItem(dDList);
  //
  const [userAddress, setUserCurrentAddress] = useState<string>(""); // ITS JUST PLACEHOLDER CHANGE IT INTO STATE-MANAGER
  //

  const isAuth: boolean = true;
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
                !isSticky && style["address_hide"]
              }`}
            >
              <HeaderUserAddress onItemClick={funArray[0]} />
            </div>
            {isAuth ? (
              <>
                <div className={style["profile--desktop"]}>
                  <HeaderProfileDD
                    isOpen={isCurrent === dDList[0]}
                    handleToggle={handleOpenCurrent[0]}
                    handleClickOutside={handleClickOutside}
                  />
                  <HeaderOrdersDD
                    isOpen={isCurrent === dDList[1]}
                    handleToggle={handleOpenCurrent[1]}
                    handleClickOutside={handleClickOutside}
                  />
                </div>
                <div className={style["profile--mobile"]}>
                  <HeaderProfileMobile />
                </div>
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
        <div className={style["address--mobile"]}>
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
});

export default Header;
