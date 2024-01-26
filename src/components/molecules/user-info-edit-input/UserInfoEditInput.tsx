import { FC, memo } from "react";
//Style's
import style from "./UserInfoEditInput.module.scss";
import { STYLE_BUTTON_CLEAR_INPUT } from "../../../styles/button-clear-input/ButtonClearInput.style";
//Type's
import { UseFormRegisterReturn } from "react-hook-form";

export interface UserInfoEditInputProps {
  Icon: FC;
  inputButtonCustomIcon?: FC;
  label: string;
  //
  register?: UseFormRegisterReturn<any>;
  onClickClearInputButton?: () => void;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

const UserInfoEditInput: FC<UserInfoEditInputProps> = memo(
  ({
    Icon,
    inputButtonCustomIcon: ButtonCustomIcon,
    label,
    //
    register,
    onClickClearInputButton,
    //
    inputAttributes,
  }) => {
    return (
      <div className={style["user-info-edit-input"]}>
        <div className={style["icon"]}>
          <Icon />
        </div>
        <fieldset className={style["fieldset"]}>
          <input
            placeholder=""
            //   name={input_alt_userName}
            className={style["input"]}
            {...register}
            {...inputAttributes}
          />
          <label
            className={`${style["input-label"]} ${style["input-placeholder"]}`}
          >
            {label}
          </label>
          {ButtonCustomIcon ? (
            <div className={style["button-custom__wrapper"]}>
              <ButtonCustomIcon />
              {/*Expaple: password eye*/}
            </div>
          ) : (
            <div className={style["button-clear__wrapper"]}>
              {/* Add onClick*/}
              <button
                // disabled={!onClickClearInputButton ? true : false}
                onClick={(e) => (
                  e.stopPropagation(), onClickClearInputButton?.()
                )}
                className={`${style["button-clear-input--size"]} ${STYLE_BUTTON_CLEAR_INPUT}`}
              ></button>
            </div>
          )}
        </fieldset>
      </div>
    );
  }
);

export default UserInfoEditInput;
