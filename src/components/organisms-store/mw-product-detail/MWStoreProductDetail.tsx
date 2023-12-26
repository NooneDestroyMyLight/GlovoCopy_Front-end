import { FC, useState } from "react";
import style from "./MWStoreProductDetail.module.scss";
import { IProduct } from "../../../types/IProduct";
//
import { MW_STORE_PRODUCT_DETAIL__TEMPLATE } from "./mWStoreProductDetail.data";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//

import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";

//
import DiscountMark from "../../atoms-store/discount-mark/DiscountMark";
import { useActions } from "../../../hooks/hook-redux/useActions";
import MWStoreProductDetailCounter from "../../atoms-store/mw-store-product-details/mw-store-product-detail-counter/MWStoreProductDetailCounter";
import MWStoreProductDetailPrice from "../../atoms-store/mw-store-product-details/mw-store-product-detail-price/MWStoreProductDetailPrice";

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

  const finalPrice = discountPrice
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
        <MWStoreProductDetailPrice
          price={price}
          discount={discount}
          discountPrice={discountPrice}
        />
        <div className={style["descr__wrapper"]}>
          <p className={style["descr"]}>{descr}</p>
        </div>
        <div className={style["counter__wrapper"]}>
          <MWStoreProductDetailCounter count={count} setCount={setCount} />
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
