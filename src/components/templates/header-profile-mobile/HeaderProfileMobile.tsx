import { FC, memo } from "react";
import style from "./HeaderProfileMobile.module.scss";
//ICON
import ProfileMobile from "../../../assets/icons/header-auth/profile--mobile/ProfileMobile";
import CloseWindow from "../../../assets/icons/close-window/CloseWindow";
//
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import { STYLE_MW_SET_ADDRESS_SIZE } from "../../../constant/styles";
//
import { useToggle } from "../../../hooks/useToggle";
import { Variants } from "framer-motion";
import Orders from "../../organisms/orders/Orders";
import { useExclusiveItem } from "../../../hooks/useExclusiveItem";
import ProfileInfo from "../../organisms/profile-info/ProfileInfo";
import { HEADER_PROFILE_MOBILE_TEMPLATE } from "./headerProfileMobile.data";

const backdrop: Variants = {
  closed: { x: "-100vw", transition: { type: "tween", ease: "circOut" } },
  open: { x: 0, transition: { type: "tween", ease: "easeOut" } },
};

const slides: string[] = ["orders", "profile"];

const HeaderProfileMobile: FC = memo(({}) => {
  const [isOpen, handleToggle] = useToggle();
  const [isCurrent, handleOpenCurrent] = useExclusiveItem(slides, slides[1]);
  // const [current,setCurrent]

  return (
    <div className={style["header-profile-mobile"]}>
      <div onClick={handleToggle}>
        <ProfileMobile />
      </div>
      <ModelWindow
        isOpen={isOpen}
        toggleMW={handleToggle}
        position={STYLE_MW_SET_ADDRESS_SIZE}
        //
        customBackdrop={backdrop}
      >
        <div className={style["profile--mobile"]}>
          <div className={style["profile--mobile__header"]}>
            <CloseWindow onIconClick={handleToggle} />
          </div>
          <div className={style["menu"]}>
            <span
              onClick={handleOpenCurrent[0]}
              className={`${style["menu__item"]} ${
                isCurrent === slides[0] && style["menu__item_active"]
              }`}
            >
              {HEADER_PROFILE_MOBILE_TEMPLATE.orders}
            </span>
            <span
              onClick={handleOpenCurrent[1]}
              className={`${style["menu__item"]} ${
                isCurrent === slides[1] && style["menu__item_active"]
              }`}
            >
              {HEADER_PROFILE_MOBILE_TEMPLATE.prfileInfo}
            </span>
          </div>
          <div className={style["profile--mobile__content"]}>
            {isCurrent === slides[0] && <Orders isTitle={false} />}
            {isCurrent === slides[1] && <ProfileInfo />}
          </div>
        </div>
      </ModelWindow>
    </div>
  );
});
export default HeaderProfileMobile;
