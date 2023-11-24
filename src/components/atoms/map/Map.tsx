import { FC, memo, useCallback, useMemo } from "react";
import style from "./Map.module.scss";
//
import { GoogleMap } from "@react-google-maps/api";
import { GEOCODE_REQ_PARAMS, MAP_DATA, STYLE_MAP } from "./google-map.data";
import MapMarker from "../../../assets/icons/map-marker/MapMarker";
import { useMapInit } from "../../../hooks/useMapInit";
//
import { RequestType, geocode } from "react-geocode";
import { debounce } from "../../../utils/debounce";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { UserLocationI } from "../../../types/UserLocation";

interface MapI {
  className?: string;
  isMute?: boolean;
  coordinate?: google.maps.LatLngLiteral;
  //
  setState?: React.Dispatch<React.SetStateAction<string>>;
  setLocation?: UseFormSetValue<UserLocationI>;
  reset: UseFormReset<UserLocationI>;
}

const Map: FC<MapI> = memo(
  ({ className, isMute, setState, setLocation, reset, coordinate }) => {
    const [isLoaded, mapRef, onLoad] = useMapInit();

    console.log("Map RERENDER");

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

    const onCenterChangedWrapper = async () => {
      if (mapRef.current) {
        const center = mapRef.current.getCenter();
        if (center) {
          reset();
          const latlngResponse = await geocode(
            RequestType.LATLNG,
            `${center.lat()},${center.lng()}`,
            GEOCODE_REQ_PARAMS
          );
          setState?.(latlngResponse.results[0].formatted_address);
          //
          const addressArr = latlngResponse.results[0].address_components;
          if (addressArr.some((item: any) => item.types.includes("route"))) {
            //refactor it into watch
            addressArr.map((item: any) => {
              item.types.includes("route") &&
                setLocation?.("street", item.long_name);
              item.types.includes("street_number") &&
                setLocation?.("streetNumber", item.long_name);
            });

            setLocation?.("coordinate", {
              lat: center.lat(),
              lng: center.lng(),
            });
          } else setLocation?.("street", ""), setLocation?.("streetNumber", "");
        }
      }
    };

    const onCenterChanged = useCallback(
      debounce(onCenterChangedWrapper, 700),
      []
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
            // onCenterChanged={handleCenterChanged}
          />
        ) : (
          <div>Google maps loading...</div>
        )}
      </ul>
    );
  }
);

export default Map;
