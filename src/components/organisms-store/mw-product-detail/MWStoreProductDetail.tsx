import { FC, useState } from "react";
import style from "./MWStoreProductDetail.module.scss";
import { IProduct } from "../../../types/IProduct";
//
import { MW_STORE_PRODUCT_DETAIL__TEMPLATE } from "./mWStoreProductDetail.data";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import IconStoreIncrease from "../../../assets/icons-store-page/icon-store-increase/IconStoreIncrease";
import IconStoreDecrease from "../../../assets/icons-store-page/icon-store-decrease/IconStoreDecrease";
import IconStoreDecreaseDisabled from "../../../assets/icons-store-page/icon-store-decrease--disabled/IconStoreDecrease";
//
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import DiscountPrice from "../../atoms-store/discount-price/DiscountPrice";
import { DISCOUNT_PRICE_STYLE_LARGE } from "../../atoms-store/discount-price/discountPrice.style";
//
import DiscountMark from "../../atoms-store/discount-mark/DiscountMark";
import { useActions } from "../../../hooks/hook-redux/useActions";

interface ProductCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductCounter: FC<ProductCounterProps> = ({ count, setCount }) => {
  return (
    <div className={style["product-counter"]}>
      <button
        disabled={count === 1}
        onClick={() => setCount(count - 1)}
        //
        className={style["button-counter"]}
      >
        {count === 1 ? <IconStoreDecreaseDisabled /> : <IconStoreDecrease />}
      </button>
      <div className={style["product-count"]}>{count}</div>
      <button
        className={style["button-counter"]}
        onClick={() => setCount(count + 1)}
      >
        <IconStoreIncrease />
      </button>
    </div>
  );
};

interface MWStoreProductDetailProps {
  product: IProduct;
  toggleMW: () => void;
}

const MWStoreProductDetail: FC<MWStoreProductDetailProps> = ({
  product,
  toggleMW,
}) => {
  const { imgBig, name, price, descr, discount, discountPrice } = product;
  const [count, setCount] = useState<number>(1);
  const { addToCart } = useActions();

  const finalPrice = discount
    ? (discountPrice as number) * count
    : price * count;

  const buttonText: string = `${
    MW_STORE_PRODUCT_DETAIL__TEMPLATE.button
  } ${count} за ${utilsFormatedPrice(finalPrice)}`;

  const handlerAddToCart = () => {
    addToCart({
      ...product,
      count: count,
    });
    toggleMW();
  };

  return (
    <div className={style["mw-product-detail"]}>
      <div className={style["mw-product-detail__content"]}>
        <div className={style["product-img__container"]}>
          <img src={imgBig} alt={name} className={style["product-img"]} />
        </div>
        <div className={style["discount-mark__wrapper"]}>
          {discount && <DiscountMark value={discount} />}
        </div>
        <h4 className={style["product-title"]}>{name}</h4>
        <div className={style["price__wrapper"]}>
          {discount ? (
            <DiscountPrice
              discountPrice={discountPrice as number}
              price={price}
              classNameSize={DISCOUNT_PRICE_STYLE_LARGE}
            />
          ) : (
            <span className={style["price"]}>{price}₴</span>
          )}
        </div>
        <div className={style["descr__wrapper"]}>
          <p className={style["descr"]}>{descr}</p>
        </div>
        <div className={style["counter__wrapper"]}>
          <ProductCounter count={count} setCount={setCount} />
        </div>
      </div>
      <div className={style["confirm-button__wrapper"]}>
        <button
          onClick={handlerAddToCart}
          type="submit"
          className={`${STYLE_MW_LOCATION_BUTTON} ${style["button"]}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MWStoreProductDetail;
