import { RequestType, geocode } from "react-geocode";
import { GEOCODE_REQ_PARAMS } from "../components/atoms/map/google-map.data";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { UserLocationI } from "../types/UserLocation";

export const handleCenterChanged = async (
  mapRef: React.MutableRefObject<google.maps.Map | null>,
  reset: UseFormReset<UserLocationI>,
  setState: React.Dispatch<React.SetStateAction<string>>,
  setLocation: UseFormSetValue<UserLocationI>
) => {
  if (!mapRef.current) return;
  const center = mapRef.current.getCenter();
  if (!center) return;

  reset?.();
  const latlngResponse = await geocode(
    RequestType.LATLNG,
    `${center.lat()},${center.lng()}`,
    GEOCODE_REQ_PARAMS
  );

  setState?.(latlngResponse.results[0].formatted_address);
  //
  const addressArr = latlngResponse.results[0].address_components;
  //
  if (addressArr.some((item: any) => item.types.includes("route"))) {
    //refactor it into watch
    addressArr.map((item: any) => {
      item.types.includes("route") && setLocation?.("street", item.long_name);
      item.types.includes("street_number") &&
        setLocation?.("streetNumber", item.long_name);
    });

    setLocation?.("coordinate", {
      lat: center.lat(),
      lng: center.lng(),
    });
  } else setLocation?.("street", ""), setLocation?.("streetNumber", "");
};
