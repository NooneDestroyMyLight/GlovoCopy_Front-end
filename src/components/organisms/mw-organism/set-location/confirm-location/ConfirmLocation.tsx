import { FC, memo } from "react";
import style from "./ConfirmLocation.module.scss";
import { SET_LOCATION_INFO_TEMPLATE } from "./confirmLocation.data";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";
//
import { UserConfirmedLocationI } from "../../../../../types/UserLocation";
//
import Map from "../../../../atoms/map/Map";
import MapMarker_small from "../../../../../assets/icons/map-marker-small/MapMarker";

interface ConfirmLocationI {
  // onCloseClick?: () => void;
  // onNextButtonClick?: () => void;
  userConfirmedLocation: UserConfirmedLocationI;
}

const ConfirmLocation: FC<ConfirmLocationI> = memo(
  ({ userConfirmedLocation }) => {
    return (
      <ul className={style["confirm-location"]}>
        <ul className={style["confirm-location__content"]}>
          <Map isMute coordinate={userConfirmedLocation.coordinate} />
          <li className={style["current-address"]}>
            <div className={style["icon"]}>
              <MapMarker_small />
            </div>
            <div>
              <p className={style["font"]}>{userConfirmedLocation.address}</p>
              <p className={style["font"]} style={{ color: "red" }}>
                {userConfirmedLocation.description}
              </p>
            </div>
          </li>
        </ul>
      </ul>
    );
  }
);
export default ConfirmLocation;
