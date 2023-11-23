import { FC, memo } from "react";
import style from "./SetLocationInfo.module.scss";
//
import { SET_LOCATION_INFO_TEMPLATE } from "./setLocationInfo.data";
import MWInput from "../../../../molecules/mw-input/MWInput";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";

interface SetLocationInfoI {
  // onCloseClick?: () => void;
  onNextButtonClick?: () => void;
}

const SetLocationInfo: FC<SetLocationInfoI> = memo(({ onNextButtonClick }) => {
  return (
    <ul className={style["set-location-info"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {SET_LOCATION_INFO_TEMPLATE.title}
      </h2>
      <li className={style["set-location-info__fieldset"]}>
        {SET_LOCATION_INFO_TEMPLATE.fieldsPlaceholder.map(({ name }) => (
          <MWInput placeholder={name} />
        ))}
      </li>
      <li className={style["set-location-info__button"]}>
        <Button
          className={STYLE_MW_LOCATION_BUTTON}
          text={SET_LOCATION_INFO_TEMPLATE.button}
          onButtonClick={onNextButtonClick}
        />
      </li>
    </ul>
  );
});
export default SetLocationInfo;
