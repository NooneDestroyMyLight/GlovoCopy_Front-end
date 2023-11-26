import { ChangeEvent, useEffect, useState } from "react";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  Init,
  Suggestions,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useMapInit } from "./useGoogleMapInit";
// import { useGoogleMapsApi } from "@react-google-maps/api";

export const useAutocompleteInit = (): [
  Return,
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean,
  Suggestions,
  ({ description }: google.maps.places.AutocompletePrediction) => () => void
  // boolean
] => {
  const coordinates: google.maps.CircleLiteral = {
    center: { lat: 49.9935, lng: 36.230383 }, //Kharkiv District restrict
    radius: 500,
  };

  const [isLoaded] = useMapInit();
  // const [isSuggestionLouding, setSuggestionLouding] = useState(false);

  const {
    ready,
    suggestions, // suggestions: { status, data }
    setValue,
    value,
    init,
    clearSuggestions,
    //clear
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "ua" },
      locationBias: coordinates,
      language: "uk",
    },
    callbackName: "myUniqueCallbackFunction",
    // initOnMount: false,
    debounce: 700,
  });

  useEffect(() => {
    if (isLoaded) init();
  }, [isLoaded]);

  const ref = useOnclickOutside((): void => clearSuggestions());

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const handleSelect =
    ({ description }: google.maps.places.AutocompletePrediction) =>
    () => {
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      }); //need to handle ERORR

      setValue(description, false);
      //setValue into UserAddress
      //setValue into UserCoordinate

      // clearSuggestions();

      //Close ModelWindow
    };

  console.log(suggestions.loading);

  return [
    ref,
    value,
    handleInput,
    ready,
    suggestions,
    handleSelect,
    // isSuggestionLouding,
  ];
};
