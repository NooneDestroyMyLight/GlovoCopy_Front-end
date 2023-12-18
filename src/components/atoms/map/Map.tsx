import { FC, memo, useCallback, useMemo } from "react";
import style from "./Map.module.scss";
//
import { GoogleMap } from "@react-google-maps/api";
import { MAP_DATA, STYLE_MAP } from "./google-map.data";
import MapMarker from "../../../assets/icons/map-marker/MapMarker";
import { useMapInit } from "../../../hooks/useGoogleMapInit";
//
import { debounce } from "../../../utils/debounce";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { UserLocationI } from "../../../types/IUserLocation";
import { handleCenterChanged } from "../../../services/getAddressByMap";

interface MapI {
  className?: string;
  isMute?: boolean;
  coordinate?: google.maps.LatLngLiteral;
  //
  setState?: React.Dispatch<React.SetStateAction<string>>;
  setLocation?: UseFormSetValue<UserLocationI>;
  reset?: UseFormReset<UserLocationI>;
}

const Map: FC<MapI> = memo(
  ({ className, isMute, setState, setLocation, reset, coordinate }) => {
    console.log("Map RERENDER");
    //
    const [isLoaded, mapRef, onLoad] = useMapInit();
    //
    const MAP_OPTIONS = useMemo(
      () => ({
        zoomControl: isMute ? false : true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDoubleClickZoom: false,
        draggable: isMute ? false : true,
        clickableIcons: isMute ? false : true,
      }),
      [isMute]
    );
    //
    //
    const onCenterChanged = useCallback(
      debounce(
        () =>
          handleCenterChanged(
            mapRef,
            reset as UseFormReset<UserLocationI>,
            setState as React.Dispatch<React.SetStateAction<string>>,
            setLocation as UseFormSetValue<UserLocationI>
          ),
        700
      ),
      [mapRef, reset, setState, setLocation]
    ); //Use Callback there

    return (
      <ul className={className ? className : style["mw-map-wrapper"]}>
        <li className={style["marker-wrapper"]}>
          <MapMarker />
        </li>
        {isLoaded ? (
          <GoogleMap
            onLoad={onLoad}
            options={MAP_OPTIONS}
            mapContainerStyle={STYLE_MAP}
            center={coordinate ? coordinate : MAP_DATA.locationCoordinate}
            zoom={16}
            onCenterChanged={onCenterChanged}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
          />
        ) : (
          <div>Google maps loading...</div>
        )}
      </ul>
    );
  }
);

export default Map;
