import { FC, memo, useState } from "react";
import style from "./StoreInputSearch.module.scss";
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import { STORE_BODY_TEMPLATE } from "../../organisms-store/store-body/storeBody.data";
import StoreDropdownInputSuggestions from "../store-dropdown-input-suggestions/StoreDropdownInputSuggestions";
import { STORE_INPUT_SEARCH_DATA } from "./StoreInputSearch.data";
import useOnclickOutside from "react-cool-onclickoutside";

interface StoreInputSearchProps {}

const StoreInputSearch: FC<StoreInputSearchProps> = memo(({}) => {
  const placeholder = `${STORE_BODY_TEMPLATE.inputPlaceholder} STORE_NAME`;

  const [isDDOpen, setDDOpen] = useState<boolean>(false); //add OnClickOutside Close DD

  const refSuggestions = useOnclickOutside(() => {
    setDDOpen(false);
  });

  return (
    <div className={style["search-form"]} ref={refSuggestions}>
      <fieldset className={style["search-input__fieldset"]}>
        <InputHolder />
        <input
          role={"search"}
          placeholder={placeholder}
          className={style["search-input"]}
          onFocus={() => setDDOpen(true)}
        />
        {/* ADD search history to input*/}
      </fieldset>
      <div
        className={`${
          !isDDOpen && style["store-dropdown-input-suggestions--hidden"]
        }`}
      >
        <StoreDropdownInputSuggestions
          suggestionsList={STORE_INPUT_SEARCH_DATA.suggestionList}
        />
      </div>
    </div>
  );
});
export default StoreInputSearch;
