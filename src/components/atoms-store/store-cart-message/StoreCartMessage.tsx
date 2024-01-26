import { FC } from "react";
import {
  CART_ITEM_TEMPLATE,
  CART_ITEM_DATA,
} from "../../organisms-store/store-cart/storeCart.data";
import style from "./StoreCartMessage.module.scss";
import { ITextIncertType, funTextIncert } from "../../../utils/funTextIncert";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";

interface StoreCartMessageProps {
  totalCartCost: number;
}

const StoreCartMessage: FC<StoreCartMessageProps> = ({ totalCartCost }) => {
  const TEXT_ARRAY: ITextIncertType[] = [
    {
      component: (
        <strong>
          {utilsFormatedPrice(CART_ITEM_DATA.breakCredit) +
            " " +
            STORE_TEMPLATE.currencySymbol}
        </strong>
      ),
      order: 1,
    },
    {
      component: (
        <strong>
          {utilsFormatedPrice(CART_ITEM_DATA.saveCredit) +
            " " +
            STORE_TEMPLATE.currencySymbol}
        </strong>
      ),
      order: 2,
    },
  ];

  const messsage = funTextIncert(CART_ITEM_TEMPLATE.message, TEXT_ARRAY);

  const messageSuccess = funTextIncert(CART_ITEM_TEMPLATE.successfulMessage, [
    {
      component: (
        <strong>{`${utilsFormatedPrice(CART_ITEM_DATA.saveCredit)}${
          STORE_TEMPLATE.currencySymbol
        }`}</strong>
      ),
      order: 1,
    },
  ]);

  const lineProgress = (totalCartCost / CART_ITEM_DATA.breakCredit) * 100;
  document.documentElement.style.setProperty(
    "--percentage",
    `${lineProgress > 100 ? 100 : lineProgress}%`
  );

  return (
    <button
      className={`${style["store-cart-message"]} ${
        lineProgress > 100 && style["store-cart-message--hidden"]
      }`}
    >
      <span className={style["progress-line"]} />
      <span
        className={`${style["progress-line"]} ${style["progress-line__percentage"]}`}
      />
      <div className={style["store-cart-message__content"]}>
        {lineProgress > 100 ? (
          <span>{messageSuccess}</span>
        ) : (
          <>
            {/* <i className={style["icon"]} /> */}
            <span className={style[""]}>{messsage}</span>
          </>
        )}
      </div>
    </button>
  );
};

export default StoreCartMessage;
