import { FC, ReactNode, useCallback, useState, useEffect } from "react";
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
import {
  FieldValues,
  SubmitHandler,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import {
  UserConfirmedLocationI,
  UserLocationI,
} from "../../../types/UserLocation";

interface MWLocationPagesI {
  onCloseClick?: () => void;
}

let userConfirmedLocation: UserConfirmedLocationI;

interface MWLocationSlides {}
//choose-address
//search-location
//pin-map-location
//set-location-info
//confirm-location

const MWLocationPages: FC<MWLocationPagesI> = ({ onCloseClick }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    currentPage !== 0 && setCurrentPage(0);
  }, []);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserLocationI>({ mode: "onChange" });

  const onSubmit: SubmitHandler<UserLocationI> = (data) => {
    const userStringAddress = Object.values(data)
      .filter((item) => item && typeof item === "string")
      .join(", ");

    userConfirmedLocation = {
      address: userStringAddress,
      coordinate: data.coordinate,
    };

    console.log("USER_ADDRESS", userConfirmedLocation);
    setCurrentPage(4);
    // reset();
  };

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type)
  //   );
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const onPrevPage = useCallback(() => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
  }, [currentPage, setCurrentPage]);

  const prevButton: FC = useCallback(
    () => <MwLocationPrevButton onIconClick={onPrevPage} />,
    [currentPage]
  );

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

  // const moveToConfirmLocation = useCallback(() => {
  //   handleSubmit(onSubmit)();
  //   setCurrentPage(4);
  // }, []);

  const onConfirmClick = useCallback(() => {
    console.log("Confirm!!!");
    onCloseClick?.();
  }, []);

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
              onNextButtonClick={moveToPinMapLocation}
              register={register}
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
              // onNextButtonClick={moveToConfirmLocation}
              register={register}
              errors={errors}
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
