import { FC, useCallback } from "react";
import style from "./MWLocationPages.module.scss";
//
import MWTemplate from "../mw-template/MWTemplate";
//
import MwLocationPrevButton from "../../../assets/icons/mw-location-prev-button/MwLocationPrevButton";
//
import ChooseAddress from "../../organisms/mw-organism/set-location/choose-address/ChooseAddress";
import SearchLocation from "../../organisms/mw-organism/set-location/search-location/SearchLocation";
import PinMapLocation from "../../organisms/mw-organism/set-location/pin-map-location/PinMapLocation";
import ConfirmLocation from "../../organisms/mw-organism/set-location/confirm-location/ConfirmLocation";
import SetLocationInfo from "../../organisms/mw-organism/set-location/set-location-info/SetLocationInfo";
//
import { useMWLocationSlides } from "../../../hooks/useMWLocationSlides";
import { MW_LOCATION_SLIDES_TEMPLATE } from "./MWLocationSlides.data";
import { useMWLocationSlidesForm } from "../../../hooks/useMWLocationSlidesForm";

interface MWLocationSlides {
  onCloseClick: () => void;
  setCurrentUserAddress: React.Dispatch<React.SetStateAction<string>>;
}

const MWLocationPages: FC<MWLocationSlides> = ({
  onCloseClick,
  setCurrentUserAddress,
}) => {
  const [currentPage, onPrevPage, moveToNextPage] = useMWLocationSlides();
  const prevButton: FC = useCallback(
    () => <MwLocationPrevButton onIconClick={onPrevPage} />,
    [currentPage]
  );
  //
  const {
    register,
    resetField,
    setValue,
    reset,
    trigger,
    //
    isValid,
    errors,
    //
    handleGeolocationConfirm,
    handleAutocompleteConfirm,
    //
    handleSubmit,
    onSubmit,
    //
    userConfirmedLocation,
  } = useMWLocationSlidesForm(
    setCurrentUserAddress,
    onCloseClick,
    currentPage,
    moveToNextPage
  );

  return (
    <form
      className={style["mw-location-slides-wrapper"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <MWTemplate
        onIconClick={onCloseClick}
        AdditionIcon={currentPage !== 0 && prevButton} //If page != 0 не отображать икнонку
        // className={STYLE_MW_TEMPLATE_SET_ADDRESS}
        buttonText={MW_LOCATION_SLIDES_TEMPLATE[currentPage].button?.text}
        h2Text={MW_LOCATION_SLIDES_TEMPLATE[currentPage].h2}
        isButtonValid={!isValid}
      >
        {currentPage === 0 && (
          <ChooseAddress onNextButtonClick={moveToNextPage[1]} />
        )}
        {currentPage === 1 && (
          <SearchLocation
            onNextButtonClick={moveToNextPage[2]}
            //
            handleGeolocationConfirm={handleGeolocationConfirm}
            handleAutocompleteConfirm={handleAutocompleteConfirm}
            //
            register={register}
            resetField={resetField}
          />
        )}
        {currentPage === 2 && (
          <PinMapLocation setLocation={setValue} reset={reset} />
        )}
        {currentPage === 3 && (
          <SetLocationInfo
            errors={errors}
            isValid={isValid}
            register={register}
            trigger={trigger}
            resetField={resetField}
          />
        )}
        {currentPage === 4 && (
          <ConfirmLocation userConfirmedLocation={userConfirmedLocation} />
        )}
      </MWTemplate>
    </form>
  );
};
export default MWLocationPages;
