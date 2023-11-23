import { FC, memo, useState } from "react";
import style from "./PinMapLocation.module.scss";
//
import { PIN_MAP_LOCATION_TEMPLATE } from "./pinMapLocation.data";
//
import Map from "../../../../atoms/map/Map";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";

interface PinMapLocationI {
  onNextButtonClick: () => void;
}

const PinMapLocation: FC<PinMapLocationI> = memo(({ onNextButtonClick }) => {
  const [currentPin, setCurrentPin] = useState(
    PIN_MAP_LOCATION_TEMPLATE.currentAddressfirstLoad
  );
  console.log("PinMapLocation RERENDER");

  return (
    <ul className={style["pin-map-location"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {PIN_MAP_LOCATION_TEMPLATE.title}
      </h2>
      <ul className={style["pin-map-location__content"]}>
        <li className={style["map-container"]}>
          <Map setState={setCurrentPin} />
        </li>
        <li className={style["current-address"]}>
          {/*There must viewing current address but for the first time need displaying placeholder*/}
          {currentPin}
        </li>
        <li className={style["button"]}>
          <Button
            className={STYLE_MW_LOCATION_BUTTON}
            text={PIN_MAP_LOCATION_TEMPLATE.confirmButton}
            onButtonClick={onNextButtonClick}
          />
        </li>
      </ul>
    </ul>
  );
});

export default PinMapLocation;
