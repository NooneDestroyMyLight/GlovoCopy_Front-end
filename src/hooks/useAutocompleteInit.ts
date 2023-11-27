import { ChangeEvent, useCallback, useEffect } from "react";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  ClearSuggestions,
  Suggestions,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useMapInit } from "./useGoogleMapInit";

const coordinates: google.maps.CircleLiteral = {
  center: { lat: 49.9935, lng: 36.230383 }, //Kharkiv District restrict
  radius: 500,
};

export const useAutocompleteInit = (
  handleAutocompleteConfirm: (
    address: string,
    coordinate: google.maps.LatLngLiteral
  ) => void
): [
  Return,
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean,
  Suggestions,
  ({ description }: google.maps.places.AutocompletePrediction) => void
  // boolean
] => {
  //
  const [isLoaded] = useMapInit();
  const {
    ready,
    suggestions, // suggestions: { status, data }
    setValue,
    value,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "ua" },
      locationBias: coordinates,
      language: "uk",
    },
    callbackName: "myUniqueCallbackFunction",
    initOnMount: false,
    debounce: 1100,
  });

  useEffect(() => {
    if (isLoaded) init();
  }, [isLoaded]);

  const ref = useOnclickOutside((): void => {
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const handleSelect = useCallback(
    ({
      structured_formatting: { main_text },
      description,
    }: google.maps.places.AutocompletePrediction) => {
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        setValue(main_text, false);
        handleAutocompleteConfirm(main_text, { lat: lat, lng: lng });
        // console.log("📍 Coordinates: ", { lat, lng });
      }); //need to handle ERORR
    },
    []
  );

  console.log(suggestions.status);

  return [ref, value, handleInput, ready, suggestions, handleSelect];
};
