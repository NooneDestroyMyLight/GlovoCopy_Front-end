import { FC, memo } from "react";
import style from "./ConfirmLocation.module.scss";
import {
  SET_LOCATION_INFO_DATA,
  SET_LOCATION_INFO_TEMPLATE,
} from "./confirmLocation.data";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";
//
import Map from "../../../../atoms/map/Map";
import MapMarker_small from "../../../../../assets/icons/map-marker-small/MapMarker";

interface ConfirmLocationI {
  // onCloseClick?: () => void;
  onNextButtonClick?: () => void;
}

const ConfirmLocation: FC<ConfirmLocationI> = memo(({ onNextButtonClick }) => {
  return (
    <ul className={style["confirm-location"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {SET_LOCATION_INFO_TEMPLATE.title}
      </h2>
      <ul className={style["confirm-location__content"]}>
        <Map isMute />
        <li className={style["current-address"]}>
          <div className={style["icon"]}>
            <MapMarker_small />
          </div>
          <p className={style["font"]}>
            {SET_LOCATION_INFO_DATA.currentAddress}
          </p>
        </li>
        <Button
          className={STYLE_MW_LOCATION_BUTTON}
          text={SET_LOCATION_INFO_TEMPLATE.button}
          onButtonClick={onNextButtonClick}
        />
      </ul>
    </ul>
  );
});
export default ConfirmLocation;
