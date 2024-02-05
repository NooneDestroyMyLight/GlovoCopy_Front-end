import { FC, memo, useState } from "react";
import { useExclusiveMWToggle } from "../../../hooks/useExclusiveMWToggle";
import { useSticky } from "../../../hooks/useSticky";
//
import style from "./Header.module.scss";
import cn from "classnames";
//
import Logo from "../../../assets/icons/logo/logo-text/Logo";
//
import HeaderInput from "../../molecules/header-input/HeaderInput";
//
import Button from "../../atoms/button/Button";
import BUTTON_STYLE from "../../atoms/button/Button.module.scss";
//
import HeaderUserAddress from "../../molecules/header-user-adress/HeaderUserAddress";
//
import ModelWindow from "../../../HOC/model-window/ModelWindow";
//Style's
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
import Profile from "../../../assets/icons/header-auth/profile--desktop/Profile";
import Order from "../../../assets/icons/header-auth/order/Order";
import WrapperMobileMWOverlay from "../../wrapper-components/wrapper-mobile-overley/WrapperMobileMWOverlay";
import MWLogin from "../../organisms/mw-organism/login/MWLogin";

//

interface HeaderI {
  //   className: string;
}

const mWName: string[] = ["mw-login", "mw-sLocation-slides"];
const dDList: string[] = ["header-user-info", "header-user-orders"];

const Header: FC<HeaderI> = memo(({}) => {
  const [isOpen, currentMW, closeMW, funArray] = useExclusiveMWToggle(mWName);
  const [isSticky, elRef] = useSticky(false);
  const [isCurrent, handleOpenCurrent, handleClickOutside] =
    useExclusiveItem(dDList);
  //
  const [userAddress, setUserCurrentAddress] = useState<string>(""); // ITS JUST PLACEHOLDER CHANGE IT INTO STATE-MANAGER
  //

  const isAuth: boolean = false;
  return (
    <>
      <div ref={elRef} className={style.stickyScreen} />
      <header className={cn(style.header)}>
        <ul className={style["header-container"]}>
          <Logo />
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
                    Icon={Profile}
                    isOpen={isCurrent === dDList[0]}
                    handleToggle={handleOpenCurrent[0]} //handleToggle => CloseWindow
                    handleClickOutside={handleClickOutside}
                  />
                  <HeaderOrdersDD
                    Icon={Order}
                    isOpen={isCurrent === dDList[1]}
                    handleToggle={handleOpenCurrent[1]}
                    handleClickOutside={handleClickOutside} //onClickOutside
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
          toggleMW={closeMW}
          position={STYLE_MW_SET_ADDRESS_SIZE}
        >
          <MWLocationPages
            setCurrentUserAddress={setUserCurrentAddress}
            onCloseClick={closeMW}
          />
        </ModelWindow>
      )}
      {currentMW === mWName[1] && (
        <ModelWindow
          isOpen={isOpen}
          toggleMW={closeMW}
          position={STYLE_MW_POSITION_LOGIN}
        >
          <WrapperMobileMWOverlay close={closeMW}>
            <MWLogin close={closeMW} isOpen={isOpen} />
          </WrapperMobileMWOverlay>
        </ModelWindow>
      )}
    </>
  );
});

export default Header;
