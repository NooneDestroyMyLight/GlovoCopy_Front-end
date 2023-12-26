import { FC, memo } from "react";
import style from "./StoreCart.module.scss";
import {
  CART_ITEM_DATA,
  CART_ITEM_TEMPLATE,
  STORE_CART_TEMPLATE,
} from "./storeCart.data";
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
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";

interface CartItemProps {
  product: ICartProduct;
}

const CartItem: FC<CartItemProps> = memo(
  ({ product: { count, name, price, discountPrice, id, discount } }) => {
    const totalActialPrice = count * getActualPrice(price, discountPrice);
    const totalOldPrice = count * price;
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
            {`${utilsFormatedPrice(totalActialPrice)} ${
              CART_ITEM_TEMPLATE.currency
            }`}
          </span>
        </div>
        {discount && (
          <div className={`${style["cart-item__detail"]} ${style["discount"]}`}>
            <div className={style["discount__mark"]}>
              <DiscountMark value={discount} />
            </div>
            <span className={style["discount__price"]}>
              {`${utilsFormatedPrice(totalOldPrice)} ${
                CART_ITEM_TEMPLATE.currency
              }`}
            </span>
          </div>
        )}
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

interface StoreCartMessageProps {
  totalCartCost: number;
}

const StoreCartMessage: FC<StoreCartMessageProps> = ({ totalCartCost }) => {
  let message = CART_ITEM_TEMPLATE.message.replace(/a|b/g, (match) => {
    if (match === "a")
      return (
        "" +
        utilsFormatedPrice(CART_ITEM_DATA.breakCredit) +
        ` ${STORE_TEMPLATE.currencySymbol}`
      );
    if (match === "b")
      return (
        "" +
        utilsFormatedPrice(CART_ITEM_DATA.saveCredit) +
        ` ${STORE_TEMPLATE.currencySymbol}`
      );
    else return match;
  });

  const lineProgress = (totalCartCost / CART_ITEM_DATA.breakCredit) * 100;

  document.documentElement.style.setProperty(
    "--percentage",
    `${lineProgress > 100 ? 100 : lineProgress}%`
  );

  // setTimeout(() => style["store-cart-message--visible"], 1000);

  // const test = setTimeout(() => style["store-cart-message--hidden"], 1000);
  // console.log(test);

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
          <span>{CART_ITEM_TEMPLATE.successfulMessage}</span>
        ) : (
          <>
            <i className={style["icon"]} />
            <span>
              {message
                .split(/\b/)
                .map((word, i) =>
                  isNaN(parseFloat(word)) ? (
                    word
                  ) : (
                    <strong key={i}>{word}</strong>
                  )
                )}
            </span>
          </>
        )}
      </div>
    </button>
  );
};

interface StoreCartProps {
  isClosed: boolean;
  cartItems: ICartProduct[];
}

const StoreCart: FC<StoreCartProps> = memo(({ cartItems, isClosed }) => {
  const totalProductCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const totalCartCost = cartItems.reduce(
    (total: number, { price, discountPrice, count }) =>
      (total += getActualPrice(price, discountPrice) * count),
    0
  );

  return (
    <div className={style["store-cart"]}>
      <h2 className={style["store-cart__title"]}>
        {STORE_CART_TEMPLATE.title}
      </h2>
      <div className={style["store-cart__placeholder"]}>
        {isClosed && <StoreCartPlaceholderClosed />}
        {!cartItems.length && <StoreCartPlaceholder />}
        {cartItems.length > 0 && (
          <div className={style["cart-items-list__wrapper"]}>
            <div className={style["cart-items-list"]}>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        {isClosed && (
          <p className={style["store-cart__placeholder__text"]}>
            {STORE_CART_TEMPLATE.isClosedCartText}
          </p>
        )}
        {!cartItems.length && !isClosed && (
          <p className={style["store-cart__placeholder__text"]}>
            {STORE_CART_TEMPLATE.emptyCartText}
          </p>
        )}
      </div>
      <StoreCartMessage totalCartCost={totalCartCost} />
      {cartItems.length > 0 && (
        <div
          className={`${style["confirm-order-button__wrapper"]} ${style["padding"]}`}
        >
          <button
            className={`${STYLE_MW_LOCATION_BUTTON} ${style["confirm-order-button"]}`}
          >
            {`${
              CART_ITEM_TEMPLATE.buttonText
            } (${totalProductCount}) за ${utilsFormatedPrice(totalCartCost)} ${
              CART_ITEM_TEMPLATE.currency
            }`}
          </button>
        </div>
      )}
      {/*delivery-discont + mw*/}
    </div>
  );
});
export default StoreCart;
