import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const libraries: Libraries = ["places"];

export const useMapInit = (): [
  boolean,
  React.MutableRefObject<google.maps.Map | null>,
  (map: google.maps.Map) => void
] => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });
  //
  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback((map: google.maps.Map) => {
    //This one put into Google-Map and component get reffing
    mapRef.current = map;
  }, []);

  console.log("Google map Initialization");

  return [isLoaded, mapRef, onLoad];
};
