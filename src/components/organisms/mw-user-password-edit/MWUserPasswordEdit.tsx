import { FC, useCallback, useEffect, useMemo, useState } from "react";
import style from "./MWUserPasswordEdit.module.scss";
//Components
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import UserInfoEditInput from "../../molecules/user-info-edit-input/UserInfoEditInput";
import UserInfoEditInputPasswordWrapper from "../../wrapper-components/wrapper-userinfo-edit-input-password/WrapperUserInfoEditInputPassword";
//Styles
import {
  MW_BODY_GENREAL,
  STYLE_MW_BODY_PASSWORD,
} from "../../tamplates-store/mw-window-body/MWWindowBody.style";
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
//Template
import {
  TEMPLATE_MW_USER_PASSWORD_EDIT,
  VALID_USER_PASSWORD_EDIT,
  IUserPasswordEdit,
} from "./mw-user-password-edit.data";
//Util
import { utilPasswordCheckStrogify } from "../../../utils/password/password-check-stongify.validator";
//Hook's
import { SubmitHandler, useForm } from "react-hook-form";
import { STYLE_MW_CONTENT_PHONE } from "../../../HOC/model-window/ModelWindow.style";
import { error } from "console";

//sub-util
function utilIsValid(isEqial: boolean, formValid: boolean) {
  if (isEqial && formValid) return false;
  return true;
}
function utilMessageSymbolCount(str: string): string {
  return str?.length >= 9
    ? message_default_password_strong
    : input_message_count_symbol;
}
//destr-data
const {
  mw_title,
  //
  input_icon_password,
  //
  input_label_password_old,
  input_label_password_new,
  message_default_password_strong_UA: message_default_password_strong,
  input_label_password_new_confirm,
  //
  input_alt_password_old,
  input_alt_password_new,
  input_alt_password_new_confirm,
  //
  input_message_count_symbol,
  //
  button_text,
} = TEMPLATE_MW_USER_PASSWORD_EDIT;
const {
  input_field_password_old: password_old,
  input_field_password_new: password_new,
  input_field_password_new_confirm: password_new_confirm,
} = VALID_USER_PASSWORD_EDIT;

const STYLE_CUSTOM_MW_BODY = `${MW_BODY_GENREAL} ${STYLE_MW_BODY_PASSWORD}`;

interface MWUserPasswordEditProps {
  isMWOpen: boolean;
  mwToggle: () => void;
}

const MWUserPasswordEdit: FC<MWUserPasswordEditProps> = ({
  isMWOpen,
  mwToggle,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    resetField,
    reset,
    formState: { errors, isValid: isFormValid },
  } = useForm<IUserPasswordEdit>({ mode: "onChange" });

  const [passwordStrongifyMessage, setPasswordStrongifyMessage] = useState<
    string | undefined
  >();
  const [isPasswordEqual, setIsPasswordEqual] = useState<boolean>(true);

  const registerPasswordOld = useMemo(() => {
    return { ...register("input_password_old", password_old.field_options) };
  }, [register, reset, errors.input_password_old, isFormValid]);

  const registerPasswordNew = useMemo(() => {
    return {
      ...register("input_password_new", { ...password_new.field_options }),
    };
  }, [register, reset, errors.input_password_new, isFormValid]);

  const registerPasswordNewConfirm = useMemo(() => {
    return {
      ...register("input_password_new_confirm", password_new.field_options),
    };
  }, [register, reset, errors.input_password_new_confirm, isFormValid]);

  useEffect(() => {
    const subscription = watch(
      ({ input_password_new, input_password_new_confirm }) => {
        setPasswordStrongifyMessage(
          utilPasswordCheckStrogify(input_password_new)
        );
        const isEquel = input_password_new === input_password_new_confirm;
        isEquel ? setIsPasswordEqual(true) : setIsPasswordEqual(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [watch, isPasswordEqual, setIsPasswordEqual]);

  const onClearButtonClickFieldPasswordOld = useCallback((): void => {
    resetField("input_password_old");
  }, [resetField]);

  useEffect(() => {
    if (isMWOpen) {
      reset();
    }
  }, [isMWOpen]);

  const onSubmit: SubmitHandler<IUserPasswordEdit> = (data) => {
    console.log(data);
    // console.log(input_password_old);
    // console.log(input_password_new);
    // console.log(input_password_new_confirm);
  };

  return (
    <ModelWindow
      toggleMW={mwToggle}
      isOpen={isMWOpen}
      className={STYLE_MW_CONTENT_PHONE}
    >
      <MWWindowBody
        className={STYLE_CUSTOM_MW_BODY}
        handleCloseWindow={mwToggle}
      >
        <section className={style["mw-user-password-edit"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className={style["title"]}>{mw_title}</h4>
            <div className={style["input__wrapper"]}>
              <UserInfoEditInput
                Icon={input_icon_password}
                label={input_label_password_old}
                register={registerPasswordOld}
                inputAttributes={password_old.input_attributes}
                //
                onClickClearInputButton={onClearButtonClickFieldPasswordOld}
              />
            </div>
            <div className={style["input__wrapper"]}>
              <UserInfoEditInputPasswordWrapper
                Icon={input_icon_password}
                label={input_label_password_new}
                //
                register={registerPasswordNew}
                inputAttributes={password_new.input_attributes}
              />
              <span className={style["input-message"]}>
                {utilMessageSymbolCount(getValues("input_password_new"))}
              </span>
              <span>{passwordStrongifyMessage}</span>
            </div>
            <div className={style["input__wrapper"]}>
              <UserInfoEditInputPasswordWrapper
                Icon={input_icon_password}
                label={input_label_password_new_confirm}
                //
                register={registerPasswordNewConfirm}
                //
                inputAttributes={password_new_confirm.input_attributes}
              />
              <span className={style["input-message"]}>
                {utilMessageSymbolCount(
                  getValues("input_password_new_confirm")
                )}
              </span>
              <span>{}</span>
            </div>
            <div className={style["button-confirm__wrapper"]}>
              <button
                type="submit"
                disabled={utilIsValid(isPasswordEqual, isFormValid)}
                className={STYLE_MW_LOCATION_BUTTON}
              >
                {button_text}
              </button>
            </div>
            {/* <button type="reset">reset</button> */}
          </form>
        </section>
      </MWWindowBody>
    </ModelWindow>
  );
};
export default MWUserPasswordEdit;
