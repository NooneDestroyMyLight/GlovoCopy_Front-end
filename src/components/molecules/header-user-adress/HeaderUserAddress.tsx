import { FC, memo } from "react";
//
import style from "./HeaderUserAddress.module.scss";
import DropdownSmallBlack from "../../../assets/icons/dropdown-small-black/DropdownSmallBlack";
import LocationSmall from "../../../assets/icons/location-small/LocationSmall";

const FAKE_DATA = "УлицаПоле, НомерПоле, БизнесПоле, ЭтажПоле";

interface HeaderUserAddressI {
  // className: string;
  onItemClick?: () => void;
}

const HeaderUserAddress: FC<HeaderUserAddressI> = memo(({ onItemClick }) => {
  console.log("HeaderUserAddress RERENDER");
  return (
    <div onClick={onItemClick} className={style["header-user-address"]}>
      <LocationSmall />
      <span className={style["header-user-address__text"]}>{FAKE_DATA}</span>
      <DropdownSmallBlack />
    </div>
  );
});

export default HeaderUserAddress;
