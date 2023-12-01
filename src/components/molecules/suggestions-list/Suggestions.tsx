import style from "./Suggestions.module.scss";
//
import { FC, memo } from "react";

import { Suggestion } from "use-places-autocomplete";

interface RenderSuggestionsI {
  suggestions: Suggestion[];

  handleSelect: ({
    description,
  }: google.maps.places.AutocompletePrediction) => void;
}

const LocationSuggestions: FC<RenderSuggestionsI> = memo(
  ({ suggestions, handleSelect }) => {
    return (
      //   <ul className={style["Suggestions-list"]}>
      <>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.place_id}
            type="submit"
            //
            onMouseEnter={(event) => {
              event.currentTarget.scrollIntoView({
                block: "nearest",
                inline: "start",
              });
              handleSelect(suggestion);
            }}
            className={style["suggestion"]}
          >
            <strong className={style["text"]}>
              {suggestion.structured_formatting.main_text}
            </strong>
            <small className={style["sub-text"]}>
              {suggestion.structured_formatting.secondary_text}
            </small>
          </button>
        ))}
      </>
    );
  }
);

export default LocationSuggestions;
