import { FC } from "react";
import style from "./StoreCart.module.scss";
import StoreCartPlaceholder from "../../../assets/icons-store-page/store-cart-placeholder/StoreCartPlaceholder";
import { STORE_CART_TEMPLATE } from "./storeCart.data";

const StoreCart: FC = ({}) => {
  const isClosed: boolean = false;

  return (
    <div className={style["store-cart"]}>
      <h2 className={style["store-cart__title"]}>
        {STORE_CART_TEMPLATE.title}
      </h2>
      <div className={style["store-cart__placeholder"]}>
        <StoreCartPlaceholder />
        <p className={style["store-cart__placeholder__text"]}>
          {STORE_CART_TEMPLATE.emptyCartText}
        </p>
      </div>
      {/*delivery-discont + mw*/}
    </div>
  );
};
export default StoreCart;
