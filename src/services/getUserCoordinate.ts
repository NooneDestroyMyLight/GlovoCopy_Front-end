import { RequestType, geocode } from "react-geocode";
import { GEOCODE_REQ_PARAMS } from "../components/atoms/map/google-map.data";
import { toast } from "react-toastify";
import { SEARCH_LOCATION_TEMPLATE } from "../components/organisms/mw-organism/set-location/search-location/searchLocation.data";

const transformIntoString = (address: any) => {
  try {
    if (address.some((item: any) => item.types.includes("route")))
      return address.filter(
        (item: any) =>
          item.types.includes("route") || item.types.includes("street_number")
      );
  } catch (error) {
    throw new Error("Invalid STREET AND STREET_NUMBER!");
  }
};

export const getGeoLocation = (handleConfirm: (address: string) => void) => {
  if (!navigator.geolocation)
    return alert("Geolocation is not supported by this browser.");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude: lat, longitude: lng } = position.coords;

      const latlngResponse = await geocode(
        RequestType.LATLNG,
        `${lat},${lng}`,
        GEOCODE_REQ_PARAMS
      );

      const {
        results: [{ address_components }],
      } = latlngResponse;

      // const [{ long_name: streetNumber }, { long_name: streetName }] =
      const UserLocation = transformIntoString(address_components);

      if (!UserLocation) handleConfirm(address_components[0].long_name);
      if (UserLocation) {
        const [{ long_name: streetNumber }, { long_name: streetName }] =
          UserLocation;
        if (streetNumber && streetName)
          handleConfirm(`${streetName}, ${streetNumber}`);
      }

      // if (streetNumber && streetName)
      //   handleConfirm(`${streetName}, ${streetNumber}`);
    },
    (error) => {
      toast(SEARCH_LOCATION_TEMPLATE.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  );
};
