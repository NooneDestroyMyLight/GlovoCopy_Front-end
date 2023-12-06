import { FC } from "react";
import style from "./StoreProductsList.module.scss";
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import { PRODUCTS_LIST_TEMPLATE } from "./storeProductsList.data";
import StoreClosedBanner from "../../atoms-store/store-closed-banner/StoreClosedBanner";

const StoreProductsList: FC = ({}) => {
  const placeholder = `${PRODUCTS_LIST_TEMPLATE.inputPlaceholder} STORE_NAME`;

  const isClosed: boolean = false;

  return (
    <div className={style["store-products-list"]}>
      <form className={style["search-form"]}>
        <fieldset className={style["search-input__fieldset"]}>
          <InputHolder />
          <input
            role={"search"}
            placeholder={placeholder}
            className={style["search-input"]}
          />
          {/* ADD search history to input*/}
        </fieldset>
        {/**/}
      </form>
      {isClosed && <StoreClosedBanner />}
      {/*Category item*/}
    </div>
  );
};
export default StoreProductsList;
