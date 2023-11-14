import { FC, memo, useCallback, useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import style from "./Header.module.scss";
import cn from "classnames";
//
import Logo from "../../../assets/icons/logo/Logo";
import logoStyle from "../../../assets/icons/logo/Logo.module.scss";
//
import HeaderInput from "../../molecules/header-input/HeaderInput";
//
import Button from "../../atoms/button/Button";
import buttonStyle from "../../atoms/button/Button.module.scss";
//
import HeaderUserAddress from "../../molecules/header-user-adress/HeaderUserAddress";
//
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import MWLogin from "../mw-organism/login/MWLogin";
import { useMoreMWToggle } from "../../../hooks/useMoreMWToggle";

interface HeaderI {
  //   className: string;
}

const mWName = ["MWLogin", "MWDelivery"];

const Header: FC<HeaderI> = memo(
  (
    {
      /*className*/
    }
  ) => {
    // const [isOpen, toggleMW] = useToggle(false);
    // const [currentMW, setCurrentMW] = useState<string | null>(null);

    // const openMWLogin = useCallback(() => {
    //   setCurrentMW("MWLogin");
    //   toggleMW();
    // }, [currentMW, isOpen]);

    // const openMWDelivery = useCallback(() => {
    //   setCurrentMW("MWDelivery");
    //   toggleMW();
    // }, [currentMW, isOpen]);

    const [isOpen, currentMW, toggleMW, funArray] = useMoreMWToggle(mWName);

    console.log("Header RERENDER");

    return (
      <>
        <header className={cn(style.header)}>
          <Logo /*className={logoStyle.logo__header}*/ />
          <HeaderInput />
          <div className={style["header__right-bar"]}>
            <HeaderUserAddress onItemClick={funArray[0]} />
            <Button
              className={buttonStyle["header-button"]}
              onButtonClick={funArray[1]}
            />
          </div>
        </header>
        <ModelWindow isOpen={isOpen} toggleMW={toggleMW}>
          {currentMW === mWName[0] && <MWLogin onIconClick={toggleMW} />}
          {currentMW === mWName[1] && <div>123</div>}
        </ModelWindow>
      </>
    );
  }
);

export default Header;
