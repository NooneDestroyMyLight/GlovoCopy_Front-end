import { FC, memo, useCallback, useMemo } from "react";
import style from "./Map.module.scss";
//
import { GoogleMap } from "@react-google-maps/api";
import { MAP_DATA, STYLE_MAP } from "./google-map.data";
import MapMarker from "../../../assets/icons/map-marker/MapMarker";
import { useMapInit } from "../../../hooks/useMapInit";
//
import { OutputFormat, RequestType, geocode } from "react-geocode";
import { debounce } from "../../../utils/debounce";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const GEOCODE_REQ_PARAMS = {
  key: API_KEY,
  language: "uk",
  region: "uk",
  outputFormat: OutputFormat.JSON,
};

interface MapI {
  className?: string;
  isMute?: boolean;
  setState?: React.Dispatch<React.SetStateAction<string>>;
}

const Map: FC<MapI> = memo(({ className, isMute, setState }) => {
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

  const onCenterChanged = useCallback(async () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        const latlngResponse = await geocode(
          RequestType.LATLNG,
          `${center.lat()},${center.lng()}`,
          GEOCODE_REQ_PARAMS
        );
        setState?.(latlngResponse.results[0].formatted_address);
        // console.log(latlngResponse.results[0].formatted_address);
      }
    }
  }, []);

  const debouncedLog = debounce(console.log, 1000);

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
          center={MAP_DATA.locationCoordinate}
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
});

export default Map;
