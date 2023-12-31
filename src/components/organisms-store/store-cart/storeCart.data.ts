import { DEFAULT_LABEL } from "../../../utils/funTextIncert";

export const STORE_CART_TEMPLATE = {
  title: "Ваше заказ",
  placeholderImg: "",
  emptyCartText:
    "Пока что корзина пуста. Добавленные вами продукты будут отображаться здесь!",
  isClosedCartText: "Тимчасово не працює",
};

export const CART_ITEM_TEMPLATE = {
  currency: "грн",
  buttonText: "Замовити продукти",
  message: `Закажіть на ${DEFAULT_LABEL}1, щоб зекономити ${DEFAULT_LABEL}2 на зборах!`,
  successfulMessage: `🎉 Ура, ви зекономили ${DEFAULT_LABEL}1 !`,
};

export const CART_ITEM_DATA = {
  breakCredit: 100,
  saveCredit: 10,
};
