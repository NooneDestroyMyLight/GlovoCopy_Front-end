import { FC, memo, useState } from "react";
import style from "./PinMapLocation.module.scss";
//
import { PIN_MAP_LOCATION_TEMPLATE } from "./pinMapLocation.data";
//
import Map from "../../../../atoms/map/Map";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";
//

interface PinMapLocationI {
  setLocation?: UseFormSetValue<UserLocationI>;
  reset: UseFormReset<UserLocationI>;
}

const PinMapLocation: FC<PinMapLocationI> = memo(({ setLocation, reset }) => {
  const [currentPin, setCurrentPin] = useState(
    PIN_MAP_LOCATION_TEMPLATE.currentAddressfirstLoad
  );

  console.log("PinMapLocation RERENDER");
  console.log(currentPin);

  return (
    <ul className={style["pin-map-location"]}>
      <ul className={style["pin-map-location__content"]}>
        <li className={style["map-container"]}>
          <Map
            setState={setCurrentPin}
            setLocation={setLocation}
            reset={reset}
          />
        </li>
        <li className={style["current-address"]}>
          {/*There must viewing current address but for the first time need displaying placeholder*/}
          {currentPin}
        </li>
      </ul>
    </ul>
  );
});

export default PinMapLocation;
