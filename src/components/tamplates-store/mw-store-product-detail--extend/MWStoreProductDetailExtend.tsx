import { FC, memo, useCallback, useState } from "react";
import style from "./MWStoreProductDetailExtend.module.scss";
import { ICustomizationItem, IProduct } from "../../../types/IProduct";
import StoreCustomProductList from "../../organisms/store-custom-product-list/StoreCustomProductList";
import MWStoreProductDetailCustom from "../../organisms-store/mw-store-product-detail--custom/MWStoreProductDetailCustom";
import { STORE_CUSTOM_LIST_DATA } from "../../organisms/store-custom-product-list/storeCustomProductList.data";
import { ICartProduct } from "../../../types/IProductCart";

interface MWStoreProductDetailExtendProps {
  product: IProduct;
  toggleMW: () => void;
  //
  editableProduct?: ICartProduct;
}

const MWStoreProductDetailExtend: FC<MWStoreProductDetailExtendProps> = memo(
  ({
    product,
    toggleMW,
    //
    editableProduct,
  }) => {
    const [selectedGlobalItems, setGlobalSelectedItems] = useState<
      ICustomizationItem[]
    >(
      editableProduct?.customizations ? [...editableProduct.customizations] : []
    );

    const handlerAddCustomization = useCallback(
      (customizationItem: ICustomizationItem): void => {
        if (
          selectedGlobalItems.some((item) => item.id === customizationItem.id)
        ) {
          const filteredItem = selectedGlobalItems.filter(
            (item) => item.id !== customizationItem.id
          );
          setGlobalSelectedItems(filteredItem);
        } else {
          setGlobalSelectedItems([...selectedGlobalItems, customizationItem]);
        }
      },
      [selectedGlobalItems, setGlobalSelectedItems]
    );

    return (
      <div className={style["mw-store-product-detail--extend"]}>
        <StoreCustomProductList
          customProductsList={STORE_CUSTOM_LIST_DATA.StoreCustomProductList}
          handlerAddCustomization={handlerAddCustomization}
          //
          selectedItems={selectedGlobalItems}
        />
        <MWStoreProductDetailCustom
          product={product}
          editableProduct={editableProduct}
          //
          toggleMW={toggleMW}
          key={product.id}
          //
          selectedGlobalItems={selectedGlobalItems}
        />
      </div>
    );
  }
);
export default MWStoreProductDetailExtend;
