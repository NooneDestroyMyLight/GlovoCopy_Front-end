import { FC, ReactNode, memo } from "react";
import style from "./MWInput.module.scss";
import Flag from "../../../assets/icons/set-address/Flag";
//mw-location-slides

interface MWInputI {
  Icon?: FC;
  label?: string;
  placeholder: string;
  //
  isAutoFocus?: boolean;
}

//TODO
//If tape smth label change into label and esolate icon and option to put it in

const MWInput: FC<MWInputI> = memo(
  ({ Icon, placeholder, label, isAutoFocus }) => {
    return (
      <ul className={style["mw-input"]}>
        {Icon && <Icon />}
        <fieldset className={style["mw-input__content"]}>
          <input
            type="search"
            className={style["input"]}
            placeholder=""
            autoFocus={isAutoFocus}
          />
          {}
          <label className={style["input-placeholder"]}>{placeholder}</label>
        </fieldset>
      </ul>
    );
  }
);

export default MWInput;
