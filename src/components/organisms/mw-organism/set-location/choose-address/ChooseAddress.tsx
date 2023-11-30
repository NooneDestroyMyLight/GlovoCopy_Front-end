import { FC } from "react";
import style from "./ChooseAddress.module.scss";
//
import { CHOOSE_ADDRESS_TEMPLATE } from "./chooseAddress.data";
import { HEADER_USER_ADDRESS_DATA } from "../../../../molecules/header-user-adress/HeaderUserAddress";
import Flag from "../../../../../assets/icons/set-address/Flag";
import Plus from "../../../../../assets/icons/set-address/Plus";

interface ChooseAddressI {
  onNextButtonClick?: () => void;
}

//<<<---Road Map--->>>
//choose-address
//search-location
//pin-map-location
//set-location-info
//confirm-location

const ChooseAddress: FC<ChooseAddressI> = ({ onNextButtonClick }) => {
  //Add hover effect and adaptive
  return (
    <div className={style["choose-address"]}>
      <ul className={style["choose-address__current"]}>
        <Flag />
        <span>{HEADER_USER_ADDRESS_DATA}</span>
      </ul>
      <ul className={style["choose-address__button-container"]}>
        <Plus />
        <button className={style["button"]} onClick={onNextButtonClick}>
          {CHOOSE_ADDRESS_TEMPLATE.addAddress}
        </button>
      </ul>
    </div>
  );
};
export default ChooseAddress;
