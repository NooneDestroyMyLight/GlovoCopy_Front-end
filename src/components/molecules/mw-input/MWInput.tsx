import { FC, memo } from "react";
import style from "./MWInput.module.scss";

import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from "react-hook-form";
//mw-location-slides

interface MWInputI {
  Icon?: FC;
  label?: string;
  placeholder: string;
  isAutoFocus?: boolean;
  //
  register: UseFormRegisterReturn<any>;
  error?: FieldError;
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
  }) => {
    // console.log(placeholder, error);
    return (
      <div>
        <ul className={style["mw-input"]}>
          {Icon && <Icon />}
          <fieldset className={style["mw-input__content"]}>
            <input
              type="search"
              className={style["input"]}
              placeholder=""
              autoFocus={isAutoFocus}
              {...register}
            />
            <label className={style["input-placeholder"]}>{placeholder}</label>
          </fieldset>
        </ul>
        {error && <span className={style["error"]}>{error.message}</span>}
      </div>
    );
  }
);
export default MWInput;
