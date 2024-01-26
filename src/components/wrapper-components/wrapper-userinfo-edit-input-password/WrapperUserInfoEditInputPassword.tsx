import { FC, useState, useCallback, memo, useMemo } from "react";
//Icon
import IconUserPasswordHide from "../../../assets/icon-user-info/icon-user-password-hide/IconUserPasswordHide";
import IconUserPasswordShow from "../../../assets/icon-user-info/icon-user-password-show/IconUserPasswordShow";
//Components & Interface
import UserInfoEditInput, {
  UserInfoEditInputProps,
} from "../../molecules/user-info-edit-input/UserInfoEditInput";
//Template
import { TEMPLATE_MW_USER_PASSWORD_EDIT } from "../../organisms/mw-user-password-edit/mw-user-password-edit.data";

const { input_type_password } = TEMPLATE_MW_USER_PASSWORD_EDIT;

const INPUT_TYPE = {
  password: "password" as "password",
  text: "text" as "text",
};
const { password: PASSWORD, text: TEXT } = INPUT_TYPE;

interface UserInfoEditInputPasswordWrapperProps
  extends UserInfoEditInputProps {}

const UserInfoEditInputPasswordWrapper: FC<UserInfoEditInputPasswordWrapperProps> =
  memo(({ Icon: InputIcon, label, register, inputAttributes }) => {
    const [inputType, setInputType] = useState<"password" | "text">(
      input_type_password
    );

    const customAttributes = useMemo(() => {
      return { ...inputAttributes, type: inputType };
    }, [inputType, inputAttributes]);

    const CustomIcon = useCallback(() => {
      if (inputType === input_type_password)
        return (
          <button
            type="button"
            formEncType="button"
            onClick={(e) => (e.preventDefault(), setInputType(TEXT))} //onClick={(e) => setInputType(TEXT)}
          >
            <IconUserPasswordShow />
          </button>
        ); //show;
      if (inputType === TEXT)
        return (
          <button
            type="button"
            onClick={(e) => (e.preventDefault(), setInputType(PASSWORD))} //onClick={(e) =>  setInputType(PASSWORD)}
          >
            <IconUserPasswordHide />
          </button>
        ); //hide;
    }, [inputType, setInputType]);

    return (
      <UserInfoEditInput
        Icon={InputIcon}
        inputButtonCustomIcon={CustomIcon as any}
        label={label}
        //
        register={register}
        //
        inputAttributes={customAttributes}
      />
    );
  });

export default UserInfoEditInputPasswordWrapper;
