import { FC, memo, useCallback, useMemo, useState } from "react";
import style from "./MWUserPhoneEdit.module.scss";
//Component
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
//Style
import { MW_BODY_PHONE } from "../../tamplates-store/mw-window-body/MWWindowBody.style";

import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import { STYLE_MW_CONTENT_PHONE } from "../../../HOC/model-window/ModelWindow.style";
//Template & Interface
import {
  IInputUserPhone,
  MW_USER_PHONE_EDIT_TEMPLATE,
  VALID_INPUT_USER_PHONE_NUMBER_EDIT,
} from "./wWUserPhoneEdit.data";
//Hook's
import { SubmitHandler, useForm } from "react-hook-form";
import useOnclickOutside from "react-cool-onclickoutside";

import UserInfoEditInputV2, {
  UserInfoEditInputV2Props,
} from "../../molecules/user-info-edit-input-v2/UserInfoEditInputV2";

const {
  img_phone,
  img_alt_phone,
  mw_title,
  mw_sub_title,
  code_country,
  phone,
  button_text,
  term_condition,
  //
  country_codes_list,
  country_code_default_value_UA,
} = MW_USER_PHONE_EDIT_TEMPLATE;

const { field_options, input_attributes } = VALID_INPUT_USER_PHONE_NUMBER_EDIT;

interface InputPhoneProps extends UserInfoEditInputV2Props {
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  countryCode: string;
}

export const InputPhone: FC<InputPhoneProps> = memo(
  ({
    label,
    //
    register,
    //
    error,
    setCountryCode,
    countryCode,
    onFocusInput,
    onClickClearIcon,
    //
    inputAttributes,
  }) => {
    const [isDDOpen, setIsDDOpen] = useState<boolean>(false);

    const onClickSelectItem = (arg: string) => {
      setCountryCode(arg);
      setIsDDOpen(false);
    };

    const ref = useOnclickOutside(() => {
      setIsDDOpen(false);
    });

    const styleInputError = error?.message && style["input--error"];

    return (
      <div ref={ref} className={style["input-phone"]}>
        <div
          className={`${style["selector__wrapper"]} ${styleInputError}`}
          onClick={() => !isDDOpen && setIsDDOpen(true)}
        >
          <div className={style["selector__content"]}>
            <label className={style["selector__title"]}>{code_country}</label>

            <div className={style["selector__control"]}>
              {countryCode}
              <div className={style["selector-icon-wrapper"]}></div>
            </div>
            <ul
              className={`${style["select-dropdown"]} ${
                !isDDOpen && style["select-dropdown--hide"]
              }`}
            >
              {country_codes_list.map((countryCode) => {
                const {
                  flag,
                  countryNameEn,
                  countryNameLocal,
                  countryCallingCode,
                } = countryCode;

                const selectItemText: string = `${flag} ${countryNameEn} (${countryNameLocal}) (${
                  "+" + countryCallingCode
                }) `;

                return (
                  <li
                    onClick={() =>
                      onClickSelectItem(`${flag}+${countryCallingCode}`)
                    }
                    className={style["select-item"]}
                  >
                    {selectItemText}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <UserInfoEditInputV2
          label={label}
          //
          register={register}
          error={error}
          //
          onClickClearIcon={onClickClearIcon}
          onFocusInput={onFocusInput}
          //
          inputAttributes={inputAttributes}
        />
      </div>
    );
  }
);

interface MWUserPhoneEditProps {
  isMwOpen: boolean;
  mwToggle: () => void;
}

const MWUserPhoneEdit: FC<MWUserPhoneEditProps> = memo(
  ({ isMwOpen, mwToggle }) => {
    const [countryCode, setCountryCode] = useState<string>(
      country_code_default_value_UA
    );

    const {
      register,
      handleSubmit,
      formState: { errors },
      setFocus,
      resetField,
    } = useForm<IInputUserPhone>({ mode: "onChange" });

    const onSubmit: SubmitHandler<IInputUserPhone> = ({ phone_number }) => {
      console.log("Success");
      console.log(`${countryCode}${phone_number}`);
    };

    const onFocusInput = useCallback(() => {
      setFocus("phone_number");
    }, [setFocus]);
    const onClickClearInput = useCallback(
      () => resetField("phone_number"),
      [resetField]
    );

    const registerPhoneNumber = useMemo(() => {
      return {
        ...register("phone_number", field_options),
      };
    }, [register]);

    return (
      <ModelWindow
        toggleMW={mwToggle}
        isOpen={isMwOpen}
        // position={STYLE_MW_PHONE}
        className={STYLE_MW_CONTENT_PHONE}
      >
        <MWWindowBody className={MW_BODY_PHONE} handleCloseWindow={mwToggle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className={style["mw-user-phone-edit"]}>
              <img src={img_phone} alt={img_alt_phone} height={80} />
              <h2 className={style["mw-user-phone-edit__title"]}>{mw_title}</h2>
              <p
                className={`${style["mw-user-phone-edit__sub-title"]} ${style["mw-user-phone-edit__sub-title__wrapper"]}`}
              >
                {mw_sub_title}
              </p>
              <InputPhone
                label={phone}
                //
                register={registerPhoneNumber}
                error={errors.phone_number}
                //
                setCountryCode={setCountryCode}
                countryCode={countryCode}
                //
                onFocusInput={onFocusInput}
                onClickClearIcon={onClickClearInput}
                //
                inputAttributes={input_attributes}
              />
              <div className={style["mw-user-phone-edit__bottom-panel"]}>
                <button className={style["button-confirm__wrapper"]}>
                  <button
                    type="submit"
                    className={`${STYLE_MW_LOCATION_BUTTON} ${style["button-confirm"]}`}
                  >
                    {button_text}
                  </button>
                </button>
                <p className={style["mw-user-phone-edit__term-condition"]}>
                  {term_condition}
                </p>
              </div>
            </section>
          </form>
        </MWWindowBody>
      </ModelWindow>
    );
  }
);
export default MWUserPhoneEdit;
