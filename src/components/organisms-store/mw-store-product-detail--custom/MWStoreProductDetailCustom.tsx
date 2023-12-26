import { FC, useCallback, useState } from "react";
import style from "./MWStoreProductDetailCustom.module.scss";
import MWStoreProductDetailPictures from "../../atoms-store/mw-store-product-details/mw-store-product-detail-pictures/MWStoreProductDetailPictures";
import MWStoreProductDetailTitle from "../../atoms-store/mw-store-product-details/mw-store-product-detail-title/MWStoreProductDetailTitle";
import MWStoreProductDetailPrice from "../../atoms-store/mw-store-product-details/mw-store-product-detail-price/MWStoreProductDetailPrice";
import MWStoreProductDetailDescr from "../../atoms-store/mw-store-product-details/mw-store-product-detail-descr/MWStoreProductDetailDescr";
import MWStoreProductDetailCounter from "../../atoms-store/mw-store-product-details/mw-store-product-detail-counter/MWStoreProductDetailCounter";
import MWStoreProductDetailButton from "../../atoms-store/mw-store-product-details/mw-store-product-detail-button/MWStoreProductDetailButton";
//
import { STYLE_MW_STORE_PRODUCT_DETAIL_BUTTON } from "../../atoms-store/mw-store-product-details/mw-store-product-detail-button/MWStoreProductDetailButton.style";
import { IProduct } from "../../../types/IProduct";
import { useActions } from "../../../hooks/hook-redux/useActions";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import { MW_STORE_PRODUCT_DETAIL__TEMPLATE } from "../mw-product-detail/mWStoreProductDetail.data";
import { getFinalPrice } from "../../../utils/getFinalPrice";
import { ICustomizationItem } from "../../atoms-store/customization-item/customizationItem.data";

interface MWStoreProductDetailCustomProps {
  product: IProduct;
  toggleMW: () => void;
  //
  selectedGlobalItems?: ICustomizationItem[];
}

const MWStoreProductDetailCustom: FC<MWStoreProductDetailCustomProps> = ({
  product,
  toggleMW,
  selectedGlobalItems,
}) => {
  const { descr, discount, imgBig, name, price, discountPrice } = product;

  const [count, setCount] = useState<number>(1);
  const { addToCart } = useActions();

  const finalPrice = getFinalPrice(
    price,
    count,
    discountPrice,
    selectedGlobalItems?.reduce((total, item) => (total += item.price), 0)
  );

  const buttonText: string = `${
    MW_STORE_PRODUCT_DETAIL__TEMPLATE.button
  } ${count} за ${utilsFormatedPrice(finalPrice)}`;

  const handlerAddToCart = useCallback(() => {
    addToCart({
      ...product,
      count: count,
    });
    toggleMW();
  }, [count]);

  return (
    <div className={style["mw-store-product-detail--custom"]}>
      <MWStoreProductDetailPictures />
      <MWStoreProductDetailTitle text={name} />
      <MWStoreProductDetailPrice
        discount={discount}
        discountPrice={discountPrice}
        price={price}
      />
      <MWStoreProductDetailDescr text={descr} />
      <MWStoreProductDetailCounter count={count} setCount={setCount} />
      <MWStoreProductDetailButton
        className={STYLE_MW_STORE_PRODUCT_DETAIL_BUTTON}
        handler={handlerAddToCart}
        text={buttonText}
      />
    </div>
  );
};
export default MWStoreProductDetailCustom;
