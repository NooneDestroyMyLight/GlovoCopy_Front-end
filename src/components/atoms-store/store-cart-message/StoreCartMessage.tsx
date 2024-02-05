import { FC, memo, useMemo } from "react";
import style from "./StoreCartMessage.module.scss";
//Template's&Data
import {
  CART_ITEM_TEMPLATE,
  CART_ITEM_DATA,
} from "../../organisms-store/store-cart/storeCart.data";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
//Util's
import { ITextIncertType, funTextIncert } from "../../../utils/funTextIncert";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//Component's
import MWStoreDeliveryFee from "../../organisms-store/mw-delivery-fee/MWStoreDeliveryFee";
//Hook's
import { useToggle } from "../../../hooks/useToggle";

interface StoreCartMessageProps {
  closeMW: () => void;
  totalCartCost: number;
}

export interface MessageProgressBarProps {
  percentage: number;
  isLineProgressComplete: boolean;
}

export const MessageProgressBar: FC<MessageProgressBarProps> = ({
  percentage,
  isLineProgressComplete,
}) => {
  document.documentElement.style.setProperty(
    "--percentage",
    `${isLineProgressComplete ? 100 : percentage}%`
  );
  return (
    <>
      <span className={style["progress-line"]} />
      <span
        className={`${style["progress-line"]} ${style["progress-line__percentage"]}`}
      />
    </>
  );
};

const StoreCartMessage: FC<StoreCartMessageProps> = memo(
  ({ totalCartCost, closeMW }) => {
    const arrMessageTitle: ITextIncertType[] = useMemo(
      () => [
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
      ],
      []
    );

    const messageTitle = funTextIncert(
      CART_ITEM_TEMPLATE.message,
      arrMessageTitle
    );

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

    const lineProgressPercentage = useMemo(
      () => (totalCartCost / CART_ITEM_DATA.breakCredit) * 100,
      [totalCartCost, CART_ITEM_DATA.breakCredit]
    );
    const isLineProgressComplete = useMemo(
      () => lineProgressPercentage > 100,
      [lineProgressPercentage]
    );

    return (
      <>
        <button
          onClick={closeMW}
          disabled={isLineProgressComplete}
          className={`${style["store-cart-message"]} ${
            isLineProgressComplete && style["store-cart-message--hidden"]
          }`}
        >
          <MessageProgressBar
            percentage={lineProgressPercentage}
            isLineProgressComplete={isLineProgressComplete}
          />
          <div className={style["store-cart-message__content"]}>
            {isLineProgressComplete ? (
              <span>{messageSuccess}</span>
            ) : (
              <>
                {/* <i className={style["icon"]} /> */}
                <span>{messageTitle}</span>
              </>
            )}
          </div>
        </button>
      </>
    );
  }
);

export default StoreCartMessage;
