import { FC, memo } from "react";
import style from "./StoreCart.module.scss";
import { CART_ITEM_TEMPLATE, STORE_CART_TEMPLATE } from "./storeCart.data";
import { ICartProduct } from "../../../types/IProductCart";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
import { useActions } from "../../../hooks/hook-redux/useActions";
import { getActualPrice } from "../../../utils/getActualPrice";
//
import StoreCartPlaceholder from "../../../assets/icons-store-page/store-cart-placeholder/StoreCartPlaceholder";
import StoreCartPlaceholderClosed from "../../../assets/icons-store-page/store-cart-placeholder-closed/StoreCartPlaceholderClosed";
import IconStoreIncrease from "../../../assets/icons-store-page/icon-store-increase/IconStoreIncrease";
import IconStoreDecrease from "../../../assets/icons-store-page/icon-store-decrease/IconStoreDecrease";
import DiscountMark from "../../atoms-store/discount-mark/DiscountMark";

interface CartItemProps {
  product: ICartProduct;
}

const CartItem: FC<CartItemProps> = memo(
  ({ product: { count, name, price, discountPrice, id, discount } }) => {
    const totalPrice = count * getActualPrice(price, discountPrice);
    const { increase, decrease } = useActions();

    return (
      <li className={style["cart-item"]}>
        <div className={style["cart-item__detail"]}>
          <span className={`${style["cart-item__count"]} ${style["font"]}`}>
            {count}х
          </span>
          <span className={`${style["cart-item__name"]} ${style["font"]}`}>
            {name}
          </span>
          <span className={`${style["cart-item__price"]} ${style["font"]}`}>
            {`${utilsFormatedPrice(totalPrice)} ${CART_ITEM_TEMPLATE.currency}`}
          </span>
        </div>
        <div className={style["discount-mark"]}>
          {discount && <DiscountMark value={discount} />}
        </div>
        <div className={style["cart-item__buttons"]}>
          <button onClick={() => decrease({ id: id, count: count })}>
            <div className={style["icon__wrapper"]}>
              <IconStoreDecrease />
            </div>
          </button>
          <button onClick={() => increase(id)}>
            <div className={style["icon__wrapper"]}>
              <IconStoreIncrease />
            </div>
          </button>
        </div>
      </li>
    );
  }
);

interface StoreCartProps {
  isClosed: boolean;
  cartItems: ICartProduct[];
}

const StoreCart: FC<StoreCartProps> = memo(({ cartItems, isClosed }) => {
  // const isClosed: boolean = false;

  return (
    <div className={style["store-cart"]}>
      <h2 className={style["store-cart__title"]}>
        {STORE_CART_TEMPLATE.title}
      </h2>
      <div className={style["store-cart__placeholder"]}>
        {isClosed && <StoreCartPlaceholderClosed />}
        {!cartItems.length && <StoreCartPlaceholder />}
        {cartItems.length > 0 &&
          cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        <p className={style["store-cart__placeholder__text"]}>
          {isClosed && STORE_CART_TEMPLATE.isClosedCartText}
          {!cartItems.length && STORE_CART_TEMPLATE.emptyCartText}
        </p>
      </div>

      {/*delivery-discont + mw*/}
    </div>
  );
});
export default StoreCart;
