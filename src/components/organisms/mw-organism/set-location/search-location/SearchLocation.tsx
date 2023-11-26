import { FC, useCallback, useEffect, useMemo } from "react";
import style from "./SeatchLocation.module.scss";
//
import { motion } from "framer-motion";
//Data
import {
  BUTTON_ANI_OPTIONS,
  SEARCH_LOCATION_TEMPLATE,
} from "./searchLocation.data";
//
import LocationIcon from "../../../../../assets/icons/set-address/LocationIcon";
import FlagMedium from "../../../../../assets/icons/set-address/FlagMedium";
//Type
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
//Component
import MWInput from "../../../../molecules/mw-input/MWInput";
//Query
import { getUserLocation } from "../../../../../services/getUserCoordinate";
import { useQuery } from "react-query";
import { useAutocompleteInit } from "../../../../../hooks/useAutocompleteInit";
import { Suggestion, Suggestions } from "use-places-autocomplete";
import { useMapInit } from "../../../../../hooks/useGoogleMapInit";
//

interface SearchLocationI {
  onNextButtonClick: () => void;
  handlerConfirm: (address: string) => void;
  register: UseFormRegister<UserLocationI>;
  setValue: UseFormSetValue<UserLocationI>;
}

const SearchLocation: FC<SearchLocationI> = ({
  onNextButtonClick,
  handlerConfirm,
  register,
  setValue,
}) => {
  const { error, isLoading, refetch } = useQuery(
    "geolocation",
    () => getUserLocation(handlerConfirm),
    {
      enabled: false,
    }
  );
  const getLocation = () => {
    refetch();
  };

  const [ref, value, handleInput, ready, suggestions, handleSelect] =
    useAutocompleteInit();

  const reg = useMemo(
    () => register("street", { onChange: handleInput }),
    [register]
  );

  interface RenderSuggestionsI {
    suggestions: Suggestion[];
  }

  const RenderSuggestions: FC<RenderSuggestionsI> = ({ suggestions }) => (
    //
    <ul className={style["Suggestions-list"]}>
      {suggestions.map((suggestion) => (
        <button
          className={style["Suggestions-list-item"]}
          key={suggestion.place_id}
          // onMouseEnter={handleSelect(suggestion)}
          onSelect={handleSelect(suggestion)}

          // onClick={handleSelect(suggestion)}
        >
          <strong className={style["text"]}>
            {suggestion.structured_formatting.main_text}
          </strong>
          <small className={style["sub-text"]}>
            {suggestion.structured_formatting.secondary_text}
          </small>
        </button>
      ))}
      ;
    </ul>
  );

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
            {suggestions.status === "OK" && (
              <RenderSuggestions suggestions={suggestions.data} />
            )}
          </div>
          {(isLoading || suggestions.loading) && <div>LOADING</div>}
          <button
            // transition={{ duration: 0.7 }}
            //
            className={`${style["get-current-location__button"]} ${style["font"]}`}
            // type="button"
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
