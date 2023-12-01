import { FC, useMemo, useCallback, memo } from "react";
import style from "./SeatchLocation.module.scss";

//Data
import { SEARCH_LOCATION_TEMPLATE } from "./searchLocation.data";
//
import LocationIcon from "../../../../../assets/icons/set-address/LocationIcon";
import FlagMedium from "../../../../../assets/icons/set-address/FlagMedium";
//Type
import { UseFormRegister, UseFormResetField } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
//Component
import MWInput from "../../../../molecules/mw-input/MWInput";
//Query
import { getGeoLocation } from "../../../../../services/getUserCoordinate";
import { useQuery } from "react-query";
//
import { useAutocompleteInit } from "../../../../../hooks/useAutocompleteInit";
import LocationSuggestions from "../../../../molecules/suggestions-list/Suggestions";
//
import LoaderTwoDots from "../../../../atoms/loader-two-dots/LoaderTwoDots";

interface ButtonSearchLocationI {
  handle: () => void;
}

const ButtonSearchLocation: FC<ButtonSearchLocationI> = memo(({ handle }) => (
  <button
    onClick={handle}
    className={`${style["move-to-next"]} ${style["font"]}`}
    type="button"
  >
    {SEARCH_LOCATION_TEMPLATE.moveToNextPage}
  </button>
));

interface SearchLocationI {
  onNextButtonClick: () => void;
  //
  handleGeolocationConfirm: (address: string) => void;
  handleAutocompleteConfirm: (
    address: string,
    coordinate: google.maps.LatLngLiteral
  ) => void;
  //
  register: UseFormRegister<UserLocationI>;
  resetField: UseFormResetField<UserLocationI>;
}

const SearchLocation: FC<SearchLocationI> = ({
  // ADD ERROR
  onNextButtonClick,
  //
  handleGeolocationConfirm,
  handleAutocompleteConfirm,
  //
  resetField,
  register,
}) => {
  const [
    ref,
    value,
    handleInput,
    ready,
    suggestions,
    handleSelect,
    clearSuggestions,
    setValue,
  ] = useAutocompleteInit(handleAutocompleteConfirm);

  const reg = useMemo(
    () => register("address", { onChange: handleInput }),
    [register]
  );

  const { error, isLoading, refetch } = useQuery(
    "geolocation",
    () => getGeoLocation(handleGeolocationConfirm),
    {
      enabled: false,
    }
  );

  const getLocation = () => refetch();

  const resetAddressField = useCallback(() => {
    setValue("");
    resetField("address");
    clearSuggestions();
  }, []);

  return (
    <div className={style["search-location__wrapper"]}>
      <ul className={style["search-location"]}>
        <li className={style["search-location__input-wrapper"]}>
          <div className={style["input"]}>
            <MWInput
              Icon={FlagMedium}
              value={value}
              placeholder={SEARCH_LOCATION_TEMPLATE.inputPlaceHolder}
              isAutoFocus={true}
              secondPlaceholder={
                SEARCH_LOCATION_TEMPLATE.inputSecondPlaceholder
              }
              register={reg}
              isDisabled={!ready}
              resetField={resetAddressField}
              //
            />
            {suggestions.status === "OK" ? (
              <ul ref={ref} className={style["suggestions-list"]}>
                <LocationSuggestions
                  suggestions={suggestions.data}
                  handleSelect={handleSelect}
                />
              </ul>
            ) : (
              suggestions.loading && (
                <ul ref={ref} className={style["suggestions-list"]}>
                  <LoaderTwoDots />
                </ul>
              )
            )}
            {/* {(isLoading || suggestions.loading) && (
              <ul ref={ref} className={style["suggestions-list"]}>
                <LoaderTwoDots />
              </ul>
            )} */}
          </div>
          <button
            className={`${style["get-current-location__button"]} ${style["font"]}`}
            type="button"
            onClick={getLocation}
          >
            <LocationIcon />
            <span className={style["font"]}>
              {SEARCH_LOCATION_TEMPLATE.getCurrentLocation}
            </span>
          </button>
          <div className={style["button__move-to-next__desktop"]}>
            <ButtonSearchLocation handle={onNextButtonClick} />
          </div>
        </li>
        <img
          className={style["search-location__map"]}
          src={SEARCH_LOCATION_TEMPLATE.mapPlaceHolderSrc}
          alt={SEARCH_LOCATION_TEMPLATE.mapPlaceHolderAlt}
        />
        <div className={style["button__move-to-next__mobile"]}>
          <ButtonSearchLocation handle={onNextButtonClick} />
        </div>
      </ul>
    </div>
  );
};

export default SearchLocation;
