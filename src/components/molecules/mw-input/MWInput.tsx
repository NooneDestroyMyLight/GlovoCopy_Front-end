import { FC, memo } from "react";
import style from "./MWInput.module.scss";

import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
  UseFormReset,
} from "react-hook-form";
//mw-location-slides

interface MWInputI {
  Icon?: FC;
  label?: string;
  isAutoFocus?: boolean;
  placeholder: string;
  error?: FieldError;
  resetField?: () => void;
  //
  register?: UseFormRegisterReturn<any>;
}

//TODO
//If tape smth label change into label and esolate icon and option to put it in

const MWInput: FC<MWInputI> = memo(
  ({
    Icon,
    placeholder,
    label,
    isAutoFocus,
    //
    register,
    error,
    resetField,
  }) => {
    return (
      <div className={style["mw-input-wrapper"]}>
        <ul className={style["mw-input"]}>
          {Icon && <Icon />}
          <fieldset className={style["mw-input__content"]}>
            <input
              type="text"
              className={style["input"]}
              placeholder=""
              autoFocus={isAutoFocus}
              {...(register as UseFormRegisterReturn<any>)}
            />
            <button
              className={style["button-cleaner"]}
              aria-label="Clear input"
              title="Clear input"
              //
              type="button"
              onClick={resetField as () => void}
            />
            <label className={style["input-placeholder"]}>{placeholder}</label>
          </fieldset>
        </ul>
        <span className={`${style["error"]} ${error && style["error-show"]} `}>
          {error && error.message}
          {!error && "Empty"}
        </span>
      </div>
    );
  }
);
export default MWInput;
