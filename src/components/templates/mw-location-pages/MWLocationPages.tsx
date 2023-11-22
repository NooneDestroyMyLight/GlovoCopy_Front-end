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

interface MWLocationPagesI {
  onCloseClick?: () => void;
}

const MWLocationPages: FC<MWLocationPagesI> = ({ onCloseClick }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    currentPage !== 0 && setCurrentPage(0);
  }, []);

  const onPrevPage = useCallback(() => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
  }, [currentPage, setCurrentPage]);

  const prevButton: FC = useCallback(() => {
    return <MwLocationPrevButton onIconClick={onPrevPage} />;
  }, [currentPage]);

  //choose-address
  //search-location
  //pin-map-location
  //set-location-info
  //confirm-location

  const moveToAddNewLocation = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const moveToPinMapLocation = useCallback(() => {
    setCurrentPage(2);
  }, []);

  const moveToSetLocationInfo = useCallback(() => {
    setCurrentPage(3);
  }, []);

  console.log(currentPage);
  return (
    <>
      <MWTemplate
        onIconClick={onCloseClick}
        AdditionIcon={currentPage !== 0 && prevButton} //If page != 0 не отображать икнонку
        //
        className={STYLE_MW_TEMPLATE_SET_ADDRESS}
      >
        {currentPage === 0 && (
          <ChooseAddress onNextButtonClick={moveToAddNewLocation} />
        )}
        {currentPage === 1 && (
          <SearchLocation onNextButtonClick={moveToPinMapLocation} />
        )}
        {currentPage === 2 && (
          <PinMapLocation onNextButtonClick={moveToSetLocationInfo} />
        )}
      </MWTemplate>
    </>
  );
};
export default MWLocationPages;
