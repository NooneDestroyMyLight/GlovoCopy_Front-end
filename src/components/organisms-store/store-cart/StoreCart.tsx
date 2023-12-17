import { FC } from "react";
import style from "./StoreCart.module.scss";
import StoreCartPlaceholder from "../../../assets/icons-store-page/store-cart-placeholder/StoreCartPlaceholder";
import { STORE_CART_TEMPLATE } from "./storeCart.data";
import StoreCartPlaceholderClosed from "../../../assets/icons-store-page/store-cart-placeholder-closed/StoreCartPlaceholderClosed";

interface StoreCartProps {
  isClosed: boolean;
}

const StoreCart: FC<StoreCartProps> = ({ isClosed }) => {
  // const isClosed: boolean = false;

  return (
    <div className={style["store-cart"]}>
      <h2 className={style["store-cart__title"]}>
        {STORE_CART_TEMPLATE.title}
      </h2>
      <div className={style["store-cart__placeholder"]}>
        {isClosed ? <StoreCartPlaceholderClosed /> : <StoreCartPlaceholder />}
        <p className={style["store-cart__placeholder__text"]}>
          {isClosed
            ? STORE_CART_TEMPLATE.isClosedCartText
            : STORE_CART_TEMPLATE.emptyCartText}
        </p>
      </div>
      {/*delivery-discont + mw*/}
    </div>
  );
};
export default StoreCart;
