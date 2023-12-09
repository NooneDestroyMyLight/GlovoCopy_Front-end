import { FC } from "react";
import style from "./StoreInputSearch.module.scss";
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import { STORE_BODY_TEMPLATE } from "../../organisms-store/store-body/storeBody.data";

interface StoreInputSearchProps {}

const StoreInputSearch: FC<StoreInputSearchProps> = ({}) => {
  const placeholder = `${STORE_BODY_TEMPLATE.inputPlaceholder} STORE_NAME`;

  return (
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
  );
};
export default StoreInputSearch;
