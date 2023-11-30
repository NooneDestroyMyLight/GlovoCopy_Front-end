interface MWLocationSlideTemplateI {
  h2: string;
  button?: {
    // className: string;
    text: string;
  };
}

// const SLIDE_TEMPLATE = {};

export const MW_LOCATION_SLIDES_TEMPLATE: MWLocationSlideTemplateI[] = [
  { h2: "Виберіть адресу доставки" },
  { h2: "Виберіть адресу доставки" },
  {
    h2: "Вкажіть вашу адресу на карті",
    button: {
      text: "Вибрати цей пункт",
    },
  },
  {
    h2: "Введіть адресу доставки",
    button: {
      text: "Далі",
    },
  },
  {
    h2: "Адреса доставки",
    button: {
      text: "Підтвердити Адресу",
    },
  },
];
