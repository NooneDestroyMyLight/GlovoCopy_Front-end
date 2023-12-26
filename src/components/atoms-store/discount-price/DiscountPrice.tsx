import { FC, memo } from "react";
import style from "./DiscountPrice.module.scss";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";

interface DiscountPriceProps {
  price: number;
  discountPrice: number;
  //
  classNameSize?: string;
}

const DiscountPrice: FC<DiscountPriceProps> = memo(
  ({ discountPrice, price, classNameSize }) => {
    return (
      <div
        className={`${style["discount-price__wrapper"]} ${
          classNameSize && classNameSize
        }`}
      >
        <span className={style["product-price"]}>
          {utilsFormatedPrice(discountPrice)}₴
        </span>
        <span className={style["product-price__original"]}>
          {utilsFormatedPrice(price)}₴
        </span>
      </div>
    );
  }
);

export default DiscountPrice;
