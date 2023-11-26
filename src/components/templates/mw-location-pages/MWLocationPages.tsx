import { FC, useCallback } from "react";
import style from "./MWLocationPages.module.scss";
//
import MWTemplate from "../mw-template/MWTemplate";
import { STYLE_MW_TEMPLATE_SET_ADDRESS } from "../../../constant/styles";
//
import MwLocationPrevButton from "../../../assets/icons/mw-location-prev-button/MwLocationPrevButton";
//
import ChooseAddress from "../../organisms/mw-organism/set-location/choose-address/ChooseAddress";
import SearchLocation from "../../organisms/mw-organism/set-location/search-location/SearchLocation";
import PinMapLocation from "../../organisms/mw-organism/set-location/pin-map-location/PinMapLocation";
import ConfirmLocation from "../../organisms/mw-organism/set-location/confirm-location/ConfirmLocation";
import SetLocationInfo from "../../organisms/mw-organism/set-location/set-location-info/SetLocationInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UserConfirmedLocationI,
  UserLocationEntries,
  UserLocationI,
} from "../../../types/UserLocation";
import { useMWLocationSlides } from "../../../hooks/useMWLocationSlides";

interface MWLocationPagesI {
  onCloseClick?: () => void;
  setCurrentUserAddress?: React.Dispatch<React.SetStateAction<string>>;
}

let userConfirmedLocation: UserConfirmedLocationI;

interface MWLocationSlides {}
//choose-address
//search-location
//pin-map-location
//set-location-info
//confirm-location

const MWLocationPages: FC<MWLocationPagesI> = ({
  onCloseClick,
  setCurrentUserAddress,
}) => {
  const [currentPage, setCurrentPage, onPrevPage] = useMWLocationSlides();
  const prevButton: FC = useCallback(
    () => <MwLocationPrevButton onIconClick={onPrevPage} />,
    [currentPage]
  );
  //
  const {
    register,
    trigger,
    setValue,
    getValues,
    handleSubmit,
    watch,
    resetField,
    reset,
    formState: { errors, isValid },
  } = useForm<UserLocationI>({ mode: "onChange" });
  const onSubmit: SubmitHandler<UserLocationI> = (data) => {
    //REFACTOR INTO OBJECT
    let userLocationEntr = Object.entries(data) as UserLocationEntries;
    const deletedProp: (keyof UserLocationI)[] = ["description", "coordinate"];
    const userStringAddress = userLocationEntr
      .reduce((total: string[], item) => {
        if (
          !deletedProp.includes(item[0] as keyof UserLocationI) &&
          item[1] &&
          typeof item[1] === "string"
        )
          total.push(item[1]);
        return total;
      }, [] as string[])
      .join(", ");

    console.log("USER_TOTAL_ADDRESS", userConfirmedLocation);

    userConfirmedLocation = {
      address: userStringAddress,
      description: data.description,
      coordinate: data.coordinate,
    };

    if (currentPage === 3) setCurrentPage(4);
    else onCloseClick?.();
  };

  const moveToAddNewLocation = useCallback(() => {
    setCurrentPage(1);
  }, []);
  const moveToPinMapLocation = useCallback(() => {
    setCurrentPage(2);
  }, []);
  const moveToSetLocationInfo = useCallback(() => {
    //add postal index
    if (getValues("street") && getValues("streetNumber")) setCurrentPage(3);
  }, []);

  const onConfirmClick = useCallback(() => {
    setCurrentUserAddress?.(userConfirmedLocation.address);
    onCloseClick?.();
  }, [setCurrentUserAddress]);

  const handlerConfirmClickSearchLocation = useCallback(
    (address: string) => {
      setCurrentUserAddress?.(address);
      onCloseClick?.();
    },
    [setCurrentUserAddress]
  );
  

  return (
    <>
      <MWTemplate
        onIconClick={onCloseClick}
        AdditionIcon={currentPage !== 0 && prevButton} //If page != 0 не отображать икнонку
        //
        className={STYLE_MW_TEMPLATE_SET_ADDRESS}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentPage === 0 && (
            <ChooseAddress onNextButtonClick={moveToAddNewLocation} />
          )}
          {currentPage === 1 && (
            <SearchLocation
              setValue={setValue}
              onNextButtonClick={moveToPinMapLocation}
              register={register}
              handlerConfirm={handlerConfirmClickSearchLocation}
            />
          )}
          {currentPage === 2 && (
            <PinMapLocation
              onNextButtonClick={moveToSetLocationInfo}
              setLocation={setValue}
              reset={reset}
            />
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
            <ConfirmLocation
              onNextButtonClick={onConfirmClick}
              userConfirmedLocation={userConfirmedLocation}
            />
          )}
        </form>
      </MWTemplate>
    </>
  );
};
export default MWLocationPages;
