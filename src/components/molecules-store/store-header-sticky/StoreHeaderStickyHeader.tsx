import { FC, memo } from "react";
import style from "./StoreHeaderStickyHeader.module.scss";
import StoreInputSearch from "../../atoms-store/store-input-search/StoreInputSearch";

interface StoreHeaderStickyHeaderProps {
  storeName: string;
  isSticky: boolean;
}

const StoreHeaderStickyHeader: FC<StoreHeaderStickyHeaderProps> = memo(
  ({ storeName, isSticky }) => {
    return (
      <header
        className={`${style["store-header-sticky-header"]} ${
          isSticky && style["visible"]
        }`}
      >
        <div className={style["store-header-sticky-header__container"]}>
          <h1 className={style["store-title"]}>{storeName}</h1>
          <StoreInputSearch />
        </div>
      </header>
    );
  }
);
export default StoreHeaderStickyHeader;
