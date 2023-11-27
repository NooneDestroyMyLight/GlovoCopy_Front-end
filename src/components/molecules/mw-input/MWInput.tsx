import { FC, memo } from "react";
import style from "./MWInput.module.scss";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";
//mw-location-slides

//TODO
//If tape smth label change into label and esolate icon and option to put it in

const Label: FC<{
  label: string;
  placeholder: string;
}> = memo(({ label, placeholder }) => (
  <>
    <label
      className={`${style["input-placeholder"]} ${
        label && style["input-placeholder__hide"]
      }`}
    >
      {placeholder}
    </label>
    <label
      className={`${style["input-placeholder"]} ${
        label && style["input-placeholder__show"]
      }`}
    >
      {label}
    </label>
  </>
));

interface MWInputI {
  Icon?: FC;
  secondPlaceholder?: string;
  isAutoFocus?: boolean;
  placeholder: string;
  value?: string;
  //
  resetField?: () => void;
  register?: UseFormRegisterReturn<any>;
  error?: FieldError;
  //
  isDisabled?: boolean;
}

const MWInput: FC<MWInputI> = memo(
  ({
    Icon,
    value,
    placeholder,
    secondPlaceholder,
    isAutoFocus,
    //
    register,
    error,
    resetField,
    //
    isDisabled = false,
  }) => {
    return (
      <div className={style["mw-input-wrapper"]}>
        <ul className={style["mw-input"]}>
          {Icon && <Icon />}
          <fieldset className={style["mw-input__content"]}>
            <input
              disabled={isDisabled}
              value={value}
              type="text"
              placeholder=""
              autoFocus={isAutoFocus}
              //
              {...(register as UseFormRegisterReturn<any>)}
              //
              className={style["input"]}
            />
            <button
              className={style["button-cleaner"]}
              aria-label="Clear input"
              title="Clear input"
              //
              type="button"
              onClick={resetField as () => void}
            />
            {!secondPlaceholder && (
              <label className={style["input-placeholder"]}>
                {placeholder}
              </label>
            )}
            {secondPlaceholder && (
              <Label label={secondPlaceholder} placeholder={placeholder} />
            )}
          </fieldset>
        </ul>
        <span className={`${style["error"]} ${error && style["error__show"]} `}>
          {error && error.message}
          {!error && "Empty"}
        </span>
      </div>
    );
  }
);
export default MWInput;
