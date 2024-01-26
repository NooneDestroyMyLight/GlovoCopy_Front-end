import { FC, memo } from "react";
import { ISuggestion } from "../../../types/ISuggestion";
import style from "./StoreDropdownInputSuggestionItem.module.scss";

const ICON_SUGGESTION = {
  src: "/public/store-icon/icon-input-suggestion/recent.svg",
  alt: "recent-search",
};

const ICON_SUGGESTION_REMOVE = {
  src: "/public/store-icon/icon-close--dark/close-icon--dark.svg",
  alt: "remove-from-history",
};

interface StoreDropdownInputSuggestionItemProps {
  suggestion: ISuggestion;
  onRemoveIconClick: (id: number) => void;
}

const StoreDropdownInputSuggestionItem: FC<StoreDropdownInputSuggestionItemProps> =
  memo(({ suggestion, onRemoveIconClick }) => {
    const { id, queryLink, text } = suggestion;
    //

    const onSuggestionItemClick = () => {
      //reDirect to "queryLink"
    };

    return (
      <li className={style["store-dropdown-input-suggestion__item"]}>
        <button
          // onClick={onSuggestionItemClick}
          className={style["store-dropdown-input-suggestion__item__container"]}
        >
          <div className={style["icon-recent-search__wrapper"]}>
            <img src={ICON_SUGGESTION.src} alt={ICON_SUGGESTION.alt} />
          </div>
          <span className={style["text"]}>
            {/* user_search_history */}
            {text}
          </span>
          <button
            className={style["icon-remove-suggestion__wrapper"]}
            onClick={(e) => (e.stopPropagation(), onRemoveIconClick(id))}
          >
            <img
              src={ICON_SUGGESTION_REMOVE.src}
              alt={ICON_SUGGESTION_REMOVE.alt}
              className={style["icon-remove-suggestion"]}
            />
          </button>
        </button>
      </li>
    );
  });

export default StoreDropdownInputSuggestionItem;
