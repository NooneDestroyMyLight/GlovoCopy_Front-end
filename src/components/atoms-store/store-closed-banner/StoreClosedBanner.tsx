import { FC } from "react";
import style from "./StoreClosedBanner.module.scss";
//
import ClosedStoreIcon from "../../../assets/icons-store-page/closed-store-icon/ClosedStoreIcon";
import { STORE_CLOSED_BANNER_TEMPLATE } from "./storeClosedBanner.data";

const StoreClosedBanner: FC = ({}) => {
  return (
    <div className={style["store-closed-banner"]}>
      <ClosedStoreIcon />
      <div className="store-closed-banner__text">
        <p>
          {STORE_CLOSED_BANNER_TEMPLATE.text[0]}
          <strong>{STORE_CLOSED_BANNER_TEMPLATE.text[1]}</strong>
        </p>
        <button className={style["store-closed-banner__button"]}>
          {STORE_CLOSED_BANNER_TEMPLATE.button.text}
        </button>
      </div>
    </div>
  );
};

export default StoreClosedBanner;
