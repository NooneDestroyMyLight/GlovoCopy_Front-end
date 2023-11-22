import { FC } from "react";
import style from "./PinMapLocation.module.scss";
//
import { GoogleMap, Libraries, useJsApiLoader } from "@react-google-maps/api";
import { PIN_MAP_LOCATION_TEMPLATE } from "./pinMapLocation.data";
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";

interface PinMapLocationI {
  onNextButtonClick: () => void;
}
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const libraries: Libraries = ["places"];

const PinMapLocation: FC<PinMapLocationI> = ({ onNextButtonClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  console.log("STYLE_MW_LOCATION_BUTTON", STYLE_MW_LOCATION_BUTTON);

  return (
    <ul className={style["pin-map-location"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {PIN_MAP_LOCATION_TEMPLATE.title}
      </h2>
      {/* <GoogleMap
        options={MAP_DEFAULT_OPTION}
        mapContainerStyle={STYLE_MAP}
        center={MAP_DATA.locationCoordinate}
        zoom={16}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        // onCenterChanged={handleCenterChanged}
      /> */}
      <li className={style["current-address"]}>
        {/*There must viewing current address but for the first time need displaying placeholder*/}
        {PIN_MAP_LOCATION_TEMPLATE.currentAddressfirstLoad}
      </li>
      <li className={style["pin-map-location__button"]}>
        <Button
          className={STYLE_MW_LOCATION_BUTTON}
          text={PIN_MAP_LOCATION_TEMPLATE.confirmButton}
        />
      </li>
    </ul>
  );
};

export default PinMapLocation;
