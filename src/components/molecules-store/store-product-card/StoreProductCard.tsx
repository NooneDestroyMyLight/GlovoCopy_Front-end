import { FC, memo } from "react";
import style from "./StoreProductCard.module.scss";
import { ProductI } from "../../../types/ProductI";
//
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import IconAddToCart from "../../../assets/icons-store-page/store-add-to-cart/IconAddToCart";
import DiscountPrice from "../../atoms-store/discount-price/DiscountPrice";
import DiscountMark from "../../atoms-store/discount-mark/DiscountMark";

interface StoreProductCardProps {
  product: ProductI;
  isClosed: boolean;
}

const StoreProductCard: FC<StoreProductCardProps> = memo(
  ({ product, isClosed }) => {
    const { imgSmall, name, descr, price, discount, discountPrice } = product;

    return (
      <li className={style["store-product-card"]}>
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
              {utilsFormatedPrice(price)}₴
            </span>
          )}
          {!isClosed && (
            <button
              className={style["butt__add-to-cart"]}
              onClick={() => console.log("handleAddProductToCart")}
            >
              <IconAddToCart />
            </button>
          )}
        </div>
      </li>
    );
  }
);
export default StoreProductCard;
