import { RegisterOptions } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";

export interface setLocationInfoField {
  name: string;
  fieldName: keyof UserLocationI;
  fieldOptions?: RegisterOptions<UserLocationI, keyof UserLocationI>;
}

interface SET_LOCATION_INFO_TEMPLATE_I {
  title: string;
  fieldsPlaceholder: setLocationInfoField[];
  button: string;
}

const REQUIRED_MESSAGE = "*Обов'язково";

export const SET_LOCATION_INFO_TEMPLATE: SET_LOCATION_INFO_TEMPLATE_I = {
  title: "Введіть адресу доставки",
  //
  fieldsPlaceholder: [
    {
      name: "*Назва вулиці",
      fieldName: "street",
      fieldOptions: { required: `${REQUIRED_MESSAGE} "*Назва вулиці"` },
    },
    {
      name: "*Номер вулиці",
      fieldName: "streetNumber",
      fieldOptions: { required: `${REQUIRED_MESSAGE} "*Номер вулиці"` },
    },
    {
      name: "*Назва бізнесу / будівлі",
      fieldName: "building",
      fieldOptions: {
        required: `${REQUIRED_MESSAGE} "*Назва бізнесу / будівлі"`,
      },
    },
    {
      name: "*Номер поверху",
      fieldName: "floor",
      fieldOptions: { required: `${REQUIRED_MESSAGE} "*Номер поверху"` },
    },
    //
    {
      name: "*Район / Зона / Сектор (необов'язково)",
      fieldName: "disctrict",
    },
    {
      name: "*Поштовий індекс (необов'язково)",
      fieldName: "index",
    },
    {
      name: "*Додаткова інформація (необов'язково)",
      fieldName: "description",
    },
  ],
  //
  button: "Далі",
};

export const SET_LOCATION_INFO_DATA: [] = [];
