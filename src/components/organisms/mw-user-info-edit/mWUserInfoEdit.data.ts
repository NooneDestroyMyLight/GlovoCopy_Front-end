import { RegisterOptions } from "react-hook-form";
import IconUserEmail from "../../../assets/icon-user-info/icon-user-email/IconUserEmail";
import IconUserName from "../../../assets/icon-user-info/icon-user-name/IconUserName";

export const MW_USER_INFO_EDIT_TEMPLATE = {
  mw_title: "Інформація про вас" as string,
  //
  input_icon_user_name: IconUserName as any,
  input_icon_user_email: IconUserEmail as any,
  //
  input_label_user_name: "Ім'я" as string,
  input_label_user_email: "Адреса ел.пошти" as string,
  //
  input_alt_user_name: "name" as string,
  input_alt_user_email: "email" as string,
  //
  button_text: "Зберегти" as string,
  //
  // input_attributes_user_name: "name" as string,
  // input_attributes_user_email: "email" as string
};

const { input_alt_user_name } = MW_USER_INFO_EDIT_TEMPLATE;

export interface IUserInfoEdit {
  input_user_name: string;
  input_user_email: string;
}

const ERRORS_USER_INFO_EDIT = {
  input_field_user_name: {
    required_UA: "Необхідно вказати им'я",
  },
  input_field_user_email: {
    required_UA: "Необхідно вказати адресу ел.пошти",
  },
};
const { input_field_user_email, input_field_user_name } = ERRORS_USER_INFO_EDIT;

export const VALID_USER_INFO_EDIT = {
  input_field_user_name: {
    field_name: "input_user_name" as keyof IUserInfoEdit,
    field_options: {
      required: input_field_user_name.required_UA,
    } as RegisterOptions<IUserInfoEdit, keyof IUserInfoEdit>,
    input_attributes: {
      "aria-label": input_alt_user_name,
      maxLength: 100,
    } as React.InputHTMLAttributes<HTMLInputElement>,
  },
  input_field_user_email: {
    field_name: "input_user_email" as keyof IUserInfoEdit,
    field_options: {
      required: input_field_user_email.required_UA,
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "invalid email",
      },
    } as RegisterOptions<IUserInfoEdit, keyof IUserInfoEdit>,
    input_attributes: {
      "aria-label": input_alt_user_name,
      maxLength: 100,
    } as React.InputHTMLAttributes<HTMLInputElement>,
  },
};
