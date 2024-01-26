import countryCode from "country-codes-list";
import { RegisterOptions } from "react-hook-form";

export const MW_USER_PHONE_EDIT_TEMPLATE = {
  img_phone: "/public/icon-user-info-edit/img-phone.svg" as string,
  img_alt_phone: "img-phone-edit" as string,
  //
  mw_title: "Додати номер телефону" as string,
  mw_sub_title:
    "Ми надішлемо SMS-повідомлення з кодом для верифікації номера" as string,
  //
  code_country: "Код країни" as string,
  phone: "Телефон" as string,
  //
  button_text: "Продовжити",
  //
  term_condition:
    "Цей сайт захищений reCAPTCHA, і застосовуються Політика конфіденційності та Умови обслуговування Google.",
  country_codes_list: countryCode.all(),
  country_code_default_value_UA: "🇺🇦+380",
  //
  input_attribute_max_length: 27,
  input_alt_phone_number: "phone-number",
};

const { input_attribute_max_length, input_alt_phone_number } =
  MW_USER_PHONE_EDIT_TEMPLATE;

export interface IInputUserPhone {
  phone_number: string;
}

const ERROR_MESSAGE = "Невірний номер телефона";

export const VALID_INPUT_USER_PHONE_NUMBER_EDIT = {
  field_name: "phone_number" as keyof IInputUserPhone,
  error_message: ERROR_MESSAGE,
  field_options: {
    required: ERROR_MESSAGE,
    pattern: {
      value: /^\d+$/,
      message: "Номер повинен містити лише цифри",
    },
    minLength: { value: 5, message: ERROR_MESSAGE },
    maxLength: { value: input_attribute_max_length, message: ERROR_MESSAGE },
  } as RegisterOptions<IInputUserPhone, keyof IInputUserPhone>,
  input_attributes: {
    "aria-label": input_alt_phone_number,
    maxLength: 27,
    type: "tel",
    onKeyPress: (e) => (!isNaN(+e.key) ? e : e.preventDefault()), //Validate number
  } as React.InputHTMLAttributes<HTMLInputElement>,
  // error_message: "Невірний номер телефона",
};
