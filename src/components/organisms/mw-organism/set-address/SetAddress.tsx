import { FC } from "react";
import style from "./SetAddress.module.scss";
//
import MWTemplate from "../../../templates/mw-template/MWTemplate";
import { STYLE_MW_TEMPLATE_SET_ADDRESS } from "../../../../constant/styles";
//
import { SET_ADDRESS_TEMPLATE } from "./setAddress.data";
import { HEADER_USER_ADDRESS_DATA } from "../../../molecules/header-user-adress/HeaderUserAddress";
import Flag from "../../../../assets/icons/set-address/Flag";
import Plus from "../../../../assets/icons/set-address/Plus";

interface SetAddressI {
  onCloseClick?: () => void;
}

const SetAddress: FC<SetAddressI> = ({ onCloseClick }) => {
  return (
    <MWTemplate
      onIconClick={onCloseClick}
      className={STYLE_MW_TEMPLATE_SET_ADDRESS}
    >
      <div className={style["set-address"]}>
        <h2 className={style["set-address__title"]}>
          {SET_ADDRESS_TEMPLATE.title}
        </h2>
        <ul className={style["set-address__current"]}>
          <Flag />
          <span>{HEADER_USER_ADDRESS_DATA}</span>
        </ul>
        <ul className={style["set-address__button-container"]}>
          <Plus />
          <button className={style["button"]}>
            {SET_ADDRESS_TEMPLATE.addAddress}
          </button>
        </ul>
      </div>
    </MWTemplate>
  );
};
export default SetAddress;
