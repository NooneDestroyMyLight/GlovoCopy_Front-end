import { FC, useMemo } from "react";
import style from "./SeatchLocation.module.scss";
//
import { motion } from "framer-motion";
//Data
import { SEARCH_LOCATION_TEMPLATE } from "./searchLocation.data";
//
import LocationIcon from "../../../../../assets/icons/set-address/LocationIcon";
import FlagMedium from "../../../../../assets/icons/set-address/FlagMedium";
//Type
import { UseFormRegister } from "react-hook-form";
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
import LoaderTwoDots from "../../../../atoms/loader-two-dots/LoaderTwoDrots";

interface SearchLocationI {
  onNextButtonClick: () => void;
  handleGeolocationConfirm: (address: string) => void;
  register: UseFormRegister<UserLocationI>;
  handleAutocompleteConfirm: (
    address: string,
    coordinate: google.maps.LatLngLiteral
  ) => void;
  // setValue?: UseFormSetValue<UserLocationI>;
}

const SearchLocation: FC<SearchLocationI> = ({
  onNextButtonClick,
  register,
  handleGeolocationConfirm,
  handleAutocompleteConfirm,
  // setValue,
}) => {
  const [ref, value, handleInput, ready, suggestions, handleSelect] =
    useAutocompleteInit(handleAutocompleteConfirm);

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

  const getLocation = () => {
    refetch();
  };

  return (
    <div className={style["search-location__wrapper"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {SEARCH_LOCATION_TEMPLATE.title}
      </h2>
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
            // transition={{ duration: 0.7 }}
            //
            className={`${style["get-current-location__button"]} ${style["font"]}`}
            type="button"
            onClick={getLocation}
          >
            <LocationIcon />
            <span className={style["font"]}>
              {SEARCH_LOCATION_TEMPLATE.getCurrentLocation}
            </span>
          </button>
          <button
            onClick={onNextButtonClick}
            className={`${style["move-to-next"]} ${style["font"]}`}
          >
            {SEARCH_LOCATION_TEMPLATE.moveToNextPage}
          </button>
        </li>
        <li className={style["search-location__map"]}>
          <img
            src={SEARCH_LOCATION_TEMPLATE.mapPlaceHolderSrc}
            alt={SEARCH_LOCATION_TEMPLATE.mapPlaceHolderAlt}
          />
        </li>
      </ul>
    </div>
  );
};

export default SearchLocation;
