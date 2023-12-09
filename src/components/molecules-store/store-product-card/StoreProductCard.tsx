import { FC } from "react";
import style from "./StoreProductCard.module.scss";
import { ProductI } from "../../../types/ProductI";
//
import IconAddToCart from "../../../assets/icons-store-page/store-add-to-cart/IconAddToCart";

interface StoreProductCardProps {
  product: ProductI;
}

const StoreProductCard: FC<StoreProductCardProps> = ({ product }) => {
  const { imgSmall, name, descr, price } = product;

  const isClosed: boolean = true;

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
          <p className={style["store-product-card__descr"]}>{descr}</p>
        </div>
      </div>
      <div className={style["store-product-card__row-bottom"]}>
        <span className={style["product-price"]}>
          {new Intl.NumberFormat("uk-UA").format(price)}₴
        </span>
        {!isClosed && (
          <button className={style["butt__add-to-cart"]}>
            <IconAddToCart />
          </button>
        )}
      </div>
    </li>
  );
};
export default StoreProductCard;
