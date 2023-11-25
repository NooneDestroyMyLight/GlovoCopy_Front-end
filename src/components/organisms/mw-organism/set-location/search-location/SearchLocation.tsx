import { FC, useMemo } from "react";
import style from "./SeatchLocation.module.scss";
import { SEARCH_LOCATION_TEMPLATE } from "./searchLocation.data";
//
import LocationIcon from "../../../../../assets/icons/set-address/LocationIcon";
//
import { UseFormRegister } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
import MWInput from "../../../../molecules/mw-input/MWInput";
import FlagMedium from "../../../../../assets/icons/set-address/FlagMedium";

interface SearchLocationI {
  onNextButtonClick: () => void;
  register: UseFormRegister<UserLocationI>;
}

const SearchLocation: FC<SearchLocationI> = ({
  onNextButtonClick,
  register,
}) => {
  // const reg = useMemo(
  //   () => register(),
  //   [register]
  // );

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
              placeholder={SEARCH_LOCATION_TEMPLATE.inputPlaceHolder}
              isAutoFocus={true}
              //
            />
          </div>
          <button
            className={`${style["get-current-location__button"]} ${style["text"]} `}
          >
            <LocationIcon />
            <span className={style["text"]}>
              {SEARCH_LOCATION_TEMPLATE.getCurrentLocation}
            </span>
          </button>
          <button
            onClick={onNextButtonClick}
            className={`${style["move-to-next"]} ${style["text"]}`}
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
