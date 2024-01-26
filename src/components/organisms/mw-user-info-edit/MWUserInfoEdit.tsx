import { FC, memo, useCallback, useMemo } from "react";
import style from "./MWUserInfoEdit.module.scss";
//components
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import UserInfoEditInputV2 from "../../molecules/user-info-edit-input-v2/UserInfoEditInputV2";
import {
  IUserInfoEdit,
  MW_USER_INFO_EDIT_TEMPLATE,
  VALID_USER_INFO_EDIT,
} from "./mWUserInfoEdit.data";
//Style's
import {
  MW_BODY_GENREAL,
  STYLE_MW_BODY_PASSWORD,
} from "../../tamplates-store/mw-window-body/MWWindowBody.style";
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import { STYLE_COLOR_ERROR } from "../../../assets/icon-user-info/icon-user-email/iconUserEmail.style";
import { STYLE_MW_CONTENT_PHONE } from "../../../HOC/model-window/ModelWindow.style";
// data & template
import { SubmitHandler, useForm } from "react-hook-form";

const STYLE_CUSTOM = `${MW_BODY_GENREAL} ${STYLE_MW_BODY_PASSWORD}`;

const {
  mw_title,
  input_icon_user_name: Icon_user_name,
  input_icon_user_email: Icon_user_email,
  //
  input_label_user_name,
  input_label_user_email,
} = MW_USER_INFO_EDIT_TEMPLATE;

const { input_field_user_name: user_name, input_field_user_email: user_email } =
  VALID_USER_INFO_EDIT;

interface MWUserInfoEditProps {
  isMwOpen: boolean;
  mwToggle: () => void;
  //
  // userInfo: any;
}

const MWUserInfoEdit: FC<MWUserInfoEditProps> = memo(
  ({ isMwOpen, mwToggle }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setFocus,
      resetField,
    } = useForm<IUserInfoEdit>({ mode: "onChange" });

    const onSubmit: SubmitHandler<IUserInfoEdit> = ({
      input_user_name,
      input_user_email,
    }) => {
      console.log("Success");
      console.log(`${input_user_name}${input_user_email}`);
    };

    const onFocusInputUserName = useCallback(() => {
      setFocus("input_user_name");
    }, [setFocus]);

    const onFocusInputUserEmail = useCallback(() => {
      setFocus("input_user_email");
    }, [setFocus]);

    const onClickClearInputUserName = useCallback(
      () => resetField("input_user_name"),
      [resetField]
    );

    const onClickClearInputUserEmail = useCallback(
      () => resetField("input_user_email"),
      [resetField]
    );

    const registerInputUserName = useMemo(() => {
      return {
        ...register("input_user_name", user_name.field_options),
      };
    }, [register]);

    const registerInputUserEmail = useMemo(() => {
      return {
        ...register("input_user_email", user_email.field_options),
      };
    }, [register]);

    const IconUserName = useCallback(
      () => (
        <Icon_user_name
          color={errors.input_user_name?.message && STYLE_COLOR_ERROR}
        />
      ),
      [errors.input_user_name?.message]
    );
    const IconUserEmail = useCallback(
      () => (
        <Icon_user_email
          color={errors.input_user_email?.message && STYLE_COLOR_ERROR}
        />
      ),
      [errors.input_user_email?.message]
    );

    return (
      <ModelWindow
        toggleMW={mwToggle}
        isOpen={isMwOpen}
        className={STYLE_MW_CONTENT_PHONE}
      >
        <MWWindowBody className={STYLE_CUSTOM} handleCloseWindow={mwToggle}>
          <section className={style["mw-user-info"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>{/* Overlay  mwToggle*/}</div>
              <h4 className={style["mw-user-info__title"]}>{mw_title}</h4>
              <div className={style["mw-user-info__fieldset"]}>
                <UserInfoEditInputV2
                  icon={IconUserName}
                  label={input_label_user_name}
                  //
                  onFocusInput={onFocusInputUserName}
                  onClickClearIcon={onClickClearInputUserName}
                  //
                  register={registerInputUserName}
                  error={errors.input_user_name}
                />
              </div>
              <div className={style["mw-user-info__fieldset"]}>
                <UserInfoEditInputV2
                  icon={IconUserEmail}
                  label={input_label_user_email}
                  //
                  onFocusInput={onFocusInputUserEmail}
                  onClickClearIcon={onClickClearInputUserEmail}
                  //
                  register={registerInputUserEmail}
                  error={errors.input_user_email}
                />
              </div>
              <div className={style["button-confirm__wrapper"]}>
                <button type="submit" className={STYLE_MW_LOCATION_BUTTON}>
                  {MW_USER_INFO_EDIT_TEMPLATE.button_text}
                </button>
              </div>
            </form>
          </section>
        </MWWindowBody>
      </ModelWindow>
    );
  }
);

export default MWUserInfoEdit;

//<MWUserInfoEdit isMwOpen={isMwOpen} mwToggle={mWToggle} />
