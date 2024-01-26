import { FC, memo } from "react";
import style from "./StoreProductCard.module.scss";
import { IProduct } from "../../../types/IProduct";
//
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import IconAddToCart from "../../../assets/icons-store-page/store-add-to-cart/IconAddToCart";
import DiscountPrice from "../../atoms-store/discount-price/DiscountPrice";
import DiscountMark from "../../atoms-store/discount-mark/DiscountMark";
import { useActions } from "../../../hooks/hook-redux/useActions";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
import { ICartProduct } from "../../../types/IProductCart";
import IconStoreDecrease from "../../../assets/icons-store-page/icon-store-decrease/IconStoreDecrease";
import IconStoreIncrease from "../../../assets/icons-store-page/icon-store-increase/IconStoreIncrease";
import { getFinalPrice } from "../../../utils/getFinalPrice";

const _ = undefined;

interface StoreProductInCartMobileProps {
  product: ICartProduct;
}

export const StoreProductInCartMobile: FC<StoreProductInCartMobileProps> = ({
  product,
}) => {
  const { price, count, name, customizations, discountPrice } = product;

  const totalActialPrice = getFinalPrice(
    price,
    count,
    discountPrice,
    customizations?.reduce((total, item) => (total += item.price), 0)
  );
  //
  const totalOldPrice = getFinalPrice(
    //discount
    price,
    count,
    _,
    customizations?.reduce((total, item) => (total += item.price), 0)
  );

  const { increase, decrease } = useActions();

  return (
    <div className={style["store-product-in-cart--mobile"]}>
      <div className={style["store-product-in-cart--mobile__left-block"]}>
        <span className={style["product-count"]}>{count}x</span>
        <button
          onClick={(e) => (e.stopPropagation(), decrease(product))}
          className={style["counter"]}
        >
          <div className={style["counter__icon"]}>
            <IconStoreDecrease />
          </div>
        </button>
      </div>
      <div className={style["store-product-in-cart--mobile__center-block"]}>
        <span className={style["name"]}>{name}</span>
        <ul className={style["customizations"]}>
          {customizations?.map((item) => item.name).join(", ")}
        </ul>
      </div>
      <div className={style["store-product-in-cart--mobile__right-block"]}>
        <span className={style["product-price"]}>
          {`${utilsFormatedPrice(totalActialPrice)} ${
            STORE_TEMPLATE.currencySymbol
          }`}
        </span>
        <button
          onClick={(e) => (e.stopPropagation(), increase(product))}
          className={style["counter"]}
        >
          <div className={style["counter__icon"]}>
            <IconStoreIncrease />
          </div>
        </button>
      </div>
    </div>
  );
};

interface StoreProductCardProps {
  product: IProduct;
  isClosed: boolean;
  isCustomization?: boolean;
}

const StoreProductCard: FC<StoreProductCardProps> = memo(
  ({ product, isClosed, isCustomization }) => {
    const { imgSmall, name, descr, price, discount, discountPrice } = product;

    const { addToCart } = useActions();

    const handlerAddToCart = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();
      addToCart({ ...product, count: 1 });
    };

    return (
      <>
        <div className={style["store-product-card__wrapper"]}>
          <div className={style["store-product-card"]}>
            <div className={style["store-product-card__row"]}>
              <img
                src={imgSmall}
                alt="PRODUCT_NAME"
                className={style["product-img"]}
              />
              <div className="store-product-card__info">
                <h4 className={style["store-product-card__title"]}>{name}</h4>
                {discount && <DiscountMark value={discount} />}
                <p className={style["store-product-card__descr"]}>{descr}</p>
              </div>
            </div>
            <div className={style["store-product-card__row-bottom"]}>
              {discount ? (
                discountPrice && (
                  <DiscountPrice discountPrice={discountPrice} price={price} />
                )
              ) : (
                <span className={style["product-price"]}>
                  {`${utilsFormatedPrice(price)} ${
                    STORE_TEMPLATE.currencySymbol
                  }`}
                </span>
              )}
              {!isClosed && (
                <button
                  className={style["butt__add-to-cart"]}
                  onClick={isCustomization ? undefined : handlerAddToCart}
                >
                  <div className={style["butt__add-to-cart__icon"]}>
                    <IconAddToCart />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);
export default StoreProductCard;
