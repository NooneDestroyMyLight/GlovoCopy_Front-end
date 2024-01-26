import style from "./StoreCartMobile.module.scss";

import { FC } from "react";
import ReactDOM from "react-dom";

import { utilsFormatedPrice } from "../../../utils/formatedPrice";
import { ITextIncertType, funTextIncert } from "../../../utils/funTextIncert";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
import {
  CART_ITEM_DATA,
  CART_ITEM_TEMPLATE,
} from "../store-cart/storeCart.data";
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";

interface PageStoreCartMobileProps {
  totalCartCost: number;
  totalProductCount: number;
}
const StoreCartMobile: FC<PageStoreCartMobileProps> = ({
  totalCartCost,
  totalProductCount,
}) => {
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

  const lineProgress = (totalCartCost / CART_ITEM_DATA.breakCredit) * 100;
  document.documentElement.style.setProperty(
    "--percentage",
    `${lineProgress > 100 ? 100 : lineProgress}%`
  );

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

  return ReactDOM.createPortal(
    <div className={style["page-store-cart--mobile"]}>
      {totalProductCount > 0 && (
        <button
          className={`${STYLE_MW_LOCATION_BUTTON} ${style["button-confirm-order"]}`}
        >
          {`${
            CART_ITEM_TEMPLATE.buttonText
          } (${totalProductCount}) за ${utilsFormatedPrice(totalCartCost)} ${
            CART_ITEM_TEMPLATE.currency
          }`}
        </button>
      )}
      <button
        className={`${style["page-store-cart--mobile__message"]} ${
          lineProgress > 100 &&
          style["page-store-cart--mobile__message--hidden"]
        }`}
      >
        <span className={style["progress-line"]} />
        <span
          className={`${style["progress-line"]} ${style["progress-line__percentage"]}`}
        />
        {lineProgress > 100 ? (
          <span className={style["message_text"]}>{messageSuccess}</span>
        ) : (
          <>
            {/* <i className={style["icon"]} /> */}
            <span className={style["message_text"]}>{messsage}</span>
          </>
        )}
      </button>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
  {
    /*onClickMWOpen*/
  }
};

export default StoreCartMobile;
