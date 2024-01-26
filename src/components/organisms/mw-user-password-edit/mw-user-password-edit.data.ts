import { RegisterOptions } from "react-hook-form";
import IconUserPassword from "../../../assets/icon-user-info/icon-user-password/IconUserPassword";

export const TEMPLATE_MW_USER_PASSWORD_EDIT = {
  mw_title: "Пароль" as string,
  message_default_password_strong_UA: "Надійність паролю: " as string,
  //
  input_icon_password: IconUserPassword as any,
  input_icon_password_view: IconUserPassword as any,
  input_icon_password_hide: IconUserPassword as any,
  //
  input_label_password_old: "Старий пароль" as string,
  input_label_password_new: "Пароль" as string,
  input_label_password_new_confirm: "Введіть пароль ще раз" as string,
  //
  input_alt_password_old: "password-old" as string,
  input_alt_password_new: "password-new" as string,
  input_alt_password_new_confirm: "password-confirm" as string,
  //
  input_type_password: "password" as "password", // React.HTMLInputTypeAttribute
  //
  input_message_count_symbol: "Мінімальна кількість символів у паролі: 9: ",
  button_text: "Зберегти" as string,
  //
  imput_attribute_max_length: 28,
};

const {
  input_alt_password_old,
  input_alt_password_new,
  input_alt_password_new_confirm,
  //
  input_message_count_symbol,
  imput_attribute_max_length,
} = TEMPLATE_MW_USER_PASSWORD_EDIT;

const ERRORS_USER_PASSWORD_EDIT = {
  input_field_password_old: {
    required_UA: "",
  },
  input_field_password_new: {
    required_UA: "",
  },
  input_field_password_new_confirm: {
    required_UA: "",
  },
};

const { input_field_password_new } = ERRORS_USER_PASSWORD_EDIT;

export interface IUserPasswordEdit {
  input_password_old: string;
  input_password_new: string;
  input_password_new_confirm: string;
}

export interface IValidFormField {
  field_name: string;
  field_options?: RegisterOptions<any>;
  input_attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const VALID_USER_PASSWORD_EDIT = {
  input_field_password_old: {
    field_name: "password_old",
    field_options: {
      required: { value: true, message: input_field_password_new.required_UA },
    },
    input_attributes: {
      "aria-label": input_alt_password_old,
      maxLength: imput_attribute_max_length,
    },
  } as IValidFormField,
  input_field_password_new: {
    field_name: "password_new",
    field_options: {
      required: true,
      minLength: { value: 9, message: input_message_count_symbol },
      maxLength: { value: imput_attribute_max_length, message: "maxLength" },
    },
    input_attributes: {
      "aria-label": input_alt_password_new,
      maxLength: imput_attribute_max_length,
    },
  } as IValidFormField,
  input_field_password_new_confirm: {
    field_name: "password_new_confirm",
    input_attributes: {
      "aria-label": input_alt_password_new_confirm,
      maxLength: imput_attribute_max_length,
    },
  } as IValidFormField,
};

export const TEMPLATE_MESSAGE_STRONGIFY_USER_PASSWORD_UA = {
  very_low: "Надто слабкий",
  medium: "Непоганий",
  good: "Надійний",
  very_good: "Максимально надійний💪",
};

// export let MESSAGE_STRONGIFY_USER_PASSWORD_UA: string[] = ["Надто слабкий"];
