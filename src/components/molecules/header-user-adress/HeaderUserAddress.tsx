import { FC, memo } from "react";
//
import style from "./HeaderUserAddress.module.scss";
import LocationSmall from "../../../assets/icons/location-small/LocationSmall";
//
import DropdownBlack, {
  DD_ICON_SMALL,
} from "../../../assets/icons/dropdown-black/DropdownBlack";

export const HEADER_USER_ADDRESS_DATA =
  "УлицаПоле, НомерПоле, БизнесПоле, ЭтажПоле";
interface HeaderUserAddressI {
  // className: string;
  onItemClick?: () => void;
}

const HeaderUserAddress: FC<HeaderUserAddressI> = memo(({ onItemClick }) => {
  console.log("HeaderUserAddress RERENDER");
  return (
    <div onClick={onItemClick} className={style["header-user-address"]}>
      <LocationSmall />
      <span className={style["header-user-address__text"]}>
        {HEADER_USER_ADDRESS_DATA}
      </span>
      <DropdownBlack className={DD_ICON_SMALL} />
    </div>
  );
});

export default HeaderUserAddress;
