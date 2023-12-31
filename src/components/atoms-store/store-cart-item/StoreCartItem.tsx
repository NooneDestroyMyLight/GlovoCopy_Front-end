import { FC, memo } from "react";
import style from "./StoreCartItem.module.scss";
import IconStoreDecrease from "../../../assets/icons-store-page/icon-store-decrease/IconStoreDecrease";
import IconStoreIncrease from "../../../assets/icons-store-page/icon-store-increase/IconStoreIncrease";
//
import { useActions } from "../../../hooks/hook-redux/useActions";
import { ICartProduct } from "../../../types/IProductCart";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
import { getFinalPrice } from "../../../utils/getFinalPrice";
import { CART_ITEM_TEMPLATE } from "../../organisms-store/store-cart/storeCart.data";
import DiscountMark from "../discount-mark/DiscountMark";
import StoreCartCustomizationItemList from "../store-cart-customization-item-list/StoreCartCustomizationItemList";

interface CartItemProps {
  product: ICartProduct;
  mwToggle: (product: ICartProduct) => void;
}

const _ = undefined;

const CartItem: FC<CartItemProps> = memo(({ product, mwToggle }) => {
  const { count, name, price, discountPrice, discount, customizations } =
    product;

  const totalActialPrice = getFinalPrice(
    price,
    count,
    discountPrice,
    customizations?.reduce((total, item) => (total += item.price), 0)
  );
  //
  const totalOldPrice = getFinalPrice(
    price,
    count,
    _,
    customizations?.reduce((total, item) => (total += item.price), 0)
  );

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
          {`${utilsFormatedPrice(totalActialPrice)}${
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
      <div
        className={`${style["cart-item__buttons"]} ${style["cart-item__detail"]}`}
      >
        <button onClick={() => decrease(product)}>
          <div className={style["icon__wrapper"]}>
            <IconStoreDecrease />
          </div>
        </button>
        {customizations ? (
          <StoreCartCustomizationItemList
            customizationList={customizations}
            product={product}
            //
            mwToggle={mwToggle}
          />
        ) : (
          <div />
        )}
        <button onClick={() => increase(product)}>
          <div className={style["icon__wrapper"]}>
            <IconStoreIncrease />
          </div>
        </button>
      </div>
    </li>
  );
});

export default CartItem;
