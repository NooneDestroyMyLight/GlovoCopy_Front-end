import { FC, memo } from "react";
import style from "./HeaderStore.module.scss";
import { useExclusiveItem } from "../../../hooks/useExclusiveItem";
//
import Logo from "../../../assets/icons/logo/logo-text/Logo";
//
import HeaderUserAddress from "../../molecules/header-user-adress/HeaderUserAddress";
import { FONT_WHITE } from "../../molecules/header-user-adress/headerUserAddress.data";
import { WHITE } from "../../../assets/icons/location-small/locationSmall.data";
//
import HeaderProfileDD from "../../templates/header-profile-dd/HeaderProfileDD";
import ProfileStore from "../../../assets/icons/header-store/profile-store-page/ProfileStore";
//
import HeaderOrdersDD from "../../molecules/header-orders-dd/HeaderOrdersDD";
import OrdersStore from "../../../assets/icons/header-store/orders-store-page/OrderStore";

const dDList: string[] = ["header-user-info", "header-user-orders"];

const HeaderStore: FC = memo(({}) => {
  const [isCurrent, handleOpenCurrent, handleClickOutside] =
    useExclusiveItem(dDList);
  //
  return (
    <header className={style["header-store"]}>
      <div className={style["header-store__container"]}>
        <Logo colorText={WHITE} colorBallon={"var(--color-globalBackground)"} />
        <div />
        <div className={style["header-store__right-bar"]}>
          <HeaderUserAddress
            iconColor={WHITE}
            onItemClick={() => console.log()}
            className={FONT_WHITE}
          />
          <nav className={style["menu"]}>
            <HeaderProfileDD
              Icon={ProfileStore}
              isOpen={isCurrent === dDList[0]}
              handleToggle={handleOpenCurrent[0]}
              handleClickOutside={handleClickOutside}
            />
            <HeaderOrdersDD
              Icon={OrdersStore}
              isOpen={isCurrent === dDList[1]}
              handleToggle={handleOpenCurrent[1]}
              handleClickOutside={handleClickOutside}
            />
          </nav>
        </div>
      </div>
    </header>
  );
});
export default HeaderStore;
