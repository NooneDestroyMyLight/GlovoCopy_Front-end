import { FC, useCallback, useState } from "react";
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

interface HeaderI {
  //   className: string;
}

const Header: FC<HeaderI> = (
  {
    /*className*/
  }
) => {
  const [isOpen, toggleMW] = useToggle(false);
  const [currentMW, setCurrentMW] = useState<string | null>(null);

  const openMW = useCallback(() => {
    setCurrentMW("HeaderUserAddress");
    //
    toggleMW();
  }, [isOpen, toggleMW, currentMW, useCallback]);

  return (
    <>
      <header className={cn(style.header)}>
        <Logo /*className={logoStyle.logo__header}*/ />
        <HeaderInput />
        <div className={style["header__right-bar"]}>
          <HeaderUserAddress onItemClick={openMW} />
          <Button
            className={buttonStyle["header-button"]}
            onButtonClick={toggleMW}
          />
        </div>
      </header>
      <ModelWindow isOpen={isOpen} toggleMW={toggleMW}>
        {currentMW === "HeaderUserAddress" && <div>HeaderUserAddress</div>}
        {currentMW === "Button" && <div>HeaderUserAddress</div>}
      </ModelWindow>
    </>
  );
};

export default Header;
