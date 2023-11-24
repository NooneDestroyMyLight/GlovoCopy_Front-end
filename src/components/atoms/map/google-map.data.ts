import { OutputFormat } from "react-geocode";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const MAP_DEFAULT_OPTION: google.maps.MapOptions = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  disableDoubleClickZoom: false,
  draggable: true,
};

//NEED to add to component couse Потому что будет делать по раёнам зону и раёны будут приходить с бека
export const GEOCODE_REQ_PARAMS = {
  key: API_KEY,
  language: "uk",
  region: "uk",
  outputFormat: OutputFormat.JSON,
};

export const STYLE_MAP = {
  width: "100%",
  height: "100%",
};
export const MAP_DATA = {
  locationCoordinate: {
    lat: 49.9935,
    lng: 36.230383,
  },
};
