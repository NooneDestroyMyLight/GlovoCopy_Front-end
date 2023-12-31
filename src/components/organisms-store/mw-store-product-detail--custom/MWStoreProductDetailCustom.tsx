import { FC, memo, useCallback, useMemo, useState } from "react";
import style from "./MWStoreProductDetailCustom.module.scss";
//
import MWStoreProductDetailPictures from "../../atoms-store/mw-store-product-details/mw-store-product-detail-pictures/MWStoreProductDetailPictures";
import MWStoreProductDetailTitle from "../../atoms-store/mw-store-product-details/mw-store-product-detail-title/MWStoreProductDetailTitle";
import MWStoreProductDetailPrice from "../../atoms-store/mw-store-product-details/mw-store-product-detail-price/MWStoreProductDetailPrice";
import MWStoreProductDetailDescr from "../../atoms-store/mw-store-product-details/mw-store-product-detail-descr/MWStoreProductDetailDescr";
import MWStoreProductDetailCounter from "../../atoms-store/mw-store-product-details/mw-store-product-detail-counter/MWStoreProductDetailCounter";
import MWStoreProductDetailButton from "../../atoms-store/mw-store-product-details/mw-store-product-detail-button/MWStoreProductDetailButton";
//
import { ICartProduct } from "../../../types/IProductCart";
import { STYLE_MW_STORE_PRODUCT_DETAIL_BUTTON } from "../../atoms-store/mw-store-product-details/mw-store-product-detail-button/MWStoreProductDetailButton.style";
import { ICustomizationItem, IProduct } from "../../../types/IProduct";
import { useActions } from "../../../hooks/hook-redux/useActions";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import { MW_STORE_PRODUCT_DETAIL__TEMPLATE } from "../mw-product-detail/mWStoreProductDetail.data";
import { getFinalPrice } from "../../../utils/getFinalPrice";
import { useButtonDisabled } from "../../../hooks/useButtonDisabled";

interface MWStoreProductDetailCustomProps {
  product: IProduct;
  editableProduct?: ICartProduct;
  //
  toggleMW: () => void;
  //
  selectedGlobalItems?: ICustomizationItem[];
  //
}

const MWStoreProductDetailCustom: FC<MWStoreProductDetailCustomProps> = memo(
  ({ product, toggleMW, selectedGlobalItems, editableProduct }) => {
    const { descr, discount, imgBig, name, price, discountPrice } = product;
    const [count, setCount] = useState<number>(
      editableProduct?.count ? editableProduct.count : 1
    );
    const [isDisabled, handlerToggle] = useButtonDisabled();
    const { addToCart, editCartItem } = useActions();

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
      handlerToggle();
      addToCart({
        ...product,
        count: count,
        customizations: selectedGlobalItems as ICustomizationItem[],
      });
      toggleMW();
    }, [count, selectedGlobalItems, isDisabled]);

    const handlerEditCartItem = useCallback(() => {
      handlerToggle();
      editCartItem({
        editedProduct: {
          ...product,
          count: count,
          customizations: selectedGlobalItems as ICustomizationItem[],
        },
        initialProduct: editableProduct as ICartProduct,
      });
      toggleMW();
    }, [count, selectedGlobalItems, isDisabled]);

    return (
      <div className={style["mw-store-product-detail--custom"]}>
        <MWStoreProductDetailPictures src={imgBig} />
        <MWStoreProductDetailTitle text={name} />
        <MWStoreProductDetailPrice
          discount={discount}
          discountPrice={discountPrice}
          price={price}
        />
        <div
          className={style["mw-store-product-detail--custom__descr-position"]}
        >
          <MWStoreProductDetailDescr text={descr} />
        </div>
        <div
          className={style["mw-store-product-detail--custom__counter-position"]}
        >
          <MWStoreProductDetailCounter count={count} setCount={setCount} />
        </div>
        <div
          className={style["mw-store-product-detail--custom__button-position"]}
        >
          <MWStoreProductDetailButton
            className={STYLE_MW_STORE_PRODUCT_DETAIL_BUTTON}
            handler={editableProduct ? handlerEditCartItem : handlerAddToCart}
            text={buttonText}
            //
            disabled={isDisabled}
          />
        </div>
      </div>
    );
  }
);
export default MWStoreProductDetailCustom;
