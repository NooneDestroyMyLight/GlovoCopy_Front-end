import { FC, memo } from "react";
import style from "./UserInfoEditInputV2.module.scss";
//Icon's
import IconCustomClearInputV2 from "../../../assets/icon-user-info/icon-custom-clear-input-v2/IconCustomClearInputV2";
//Type's & Interface's
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
//Style's
import { HELIO_INPUT_STYLE } from "../../../styles/helio-input/HelioInput.style";
import { HELIO_INPUT_PLACEHOLDER_STYLE } from "../../../styles/helio-input/helio-input-palceholder/HelioInputPlaceholder.style";

export interface UserInfoEditInputV2Props {
  icon?: any;
  //
  label: string;
  //
  register?: UseFormRegisterReturn<any>;
  error?: FieldError;
  //
  onFocusInput?: () => void;
  onClickClearIcon?: () => void;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

const UserInfoEditInputV2: FC<UserInfoEditInputV2Props> = memo(
  ({
    icon: Icon,
    //
    label,
    //
    register,
    error,
    //
    onClickClearIcon,
    onFocusInput,
    //
    inputAttributes,
  }) => {
    const styleInputError = error?.message && style["input--error"];

    return (
      <div className={style["input-with-error"]}>
        <div
          onClick={onFocusInput}
          className={`${style["input__wrapper"]} ${styleInputError}`}
        >
          <div className={style["input__content"]}>
            {Icon && (
              <div className={style["icon-wrapper"]}>
                <Icon />
              </div>
            )}
            <fieldset className={style["fieldset"]}>
              <input
                className={`${style["input"]} ${HELIO_INPUT_STYLE}`}
                placeholder=""
                {...register}
                {...inputAttributes}
              />
              <label
                className={`${style["input-placeholder"]} ${HELIO_INPUT_PLACEHOLDER_STYLE} `}
              >
                {label}
              </label>
              <button
                onClick={(e) => (e.stopPropagation(), onClickClearIcon?.())}
                className={style["icon-clear"]}
              >
                <IconCustomClearInputV2 />
              </button>
            </fieldset>
          </div>
        </div>
        <div className={style["error-message"]}>
          <span className={style["error-message__text"]}>{error?.message}</span>
        </div>
      </div>
    );
  }
);

export default UserInfoEditInputV2;
