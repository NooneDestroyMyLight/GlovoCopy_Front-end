import { FC } from "react";
import style from "./MWStoreProductDetailPrice.module.scss";
import DiscountPrice from "../../discount-price/DiscountPrice";
import { DISCOUNT_PRICE_STYLE_LARGE } from "../../discount-price/discountPrice.style";
import { STORE_TEMPLATE } from "../../../pages/store/Store.data";
import { utilsFormatedPrice } from "../../../../utils/formatedPrice";

interface MWStoreProductDetailPriceProps {
  discount: string;
  discountPrice: number | undefined;
  price: number;
}

const MWStoreProductDetailPrice: FC<MWStoreProductDetailPriceProps> = ({
  discount,
  discountPrice,
  price,
}) => {
  return (
    <div className={style["mw-store-product-detail-price"]}>
      {discount ? (
        <DiscountPrice
          discountPrice={discountPrice as number}
          price={price}
          classNameSize={DISCOUNT_PRICE_STYLE_LARGE}
        />
      ) : (
        <span className={style["price"]}>{`${utilsFormatedPrice(price)} ${
          STORE_TEMPLATE.currencySymbol
        }`}</span>
      )}
    </div>
  );
};

export default MWStoreProductDetailPrice;
