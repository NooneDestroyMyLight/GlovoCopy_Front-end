import { FC, memo, useCallback, useState } from "react";
import style from "./StoreDropdownInputSuggestions.module.scss";
//
import { ISuggestion } from "../../../types/ISuggestion";
import StoreDropdownInputSuggestionItem from "../store-dropdown-input-suggestion-item/StoreDropdownInputSuggestionItem";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";

interface StoreDropdownInputSuggestionsProps {
  suggestionsList: ISuggestion[];
  //
}

//DROPDOWN SUGGESTIONS
const StoreDropdownInputSuggestions: FC<StoreDropdownInputSuggestionsProps> =
  memo(({ suggestionsList }) => {
    const [suggestionList, setSuggestions] =
      useState<ISuggestion[]>(suggestionsList);

    const onSuggestionRemoveIconClick = useCallback(
      (id: number) => {
        setSuggestions(
          suggestionList.filter((suggestion) => suggestion.id !== id)
        );
        //here must place Query that might delete suggestion from USER_SEARCH_STORE-NAME_HISTORY
      },
      [suggestionList, setSuggestions]
    );

    return (
      <div className={style["store-dropdown-input-suggestions"]}>
        <ul className={style["store-dropdown-input-suggestions__list"]}>
          {suggestionList.map((suggestion) => (
            <StoreDropdownInputSuggestionItem
              suggestion={suggestion}
              key={suggestion.id}
              //
              onRemoveIconClick={onSuggestionRemoveIconClick}
            />
          ))}
        </ul>
      </div>
    );
  });

export default StoreDropdownInputSuggestions;
