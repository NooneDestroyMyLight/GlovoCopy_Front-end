import { FC, useCallback, useState } from "react";
import style from "./MWStoreProductDetailExtend.module.scss";
import { ICustomizationItem, IProduct } from "../../../types/IProduct";
import StoreCustomProductList from "../../organisms/store-custom-product-list/StoreCustomProductList";
import MWStoreProductDetailCustom from "../../organisms-store/mw-store-product-detail--custom/MWStoreProductDetailCustom";
import { STORE_CUSTOM_LIST_DATA } from "../../organisms/store-custom-product-list/storeCustomProductList.data";

interface MWStoreProductDetailExtendProps {
  product: IProduct;
  toggleMW: () => void;
}

const MWStoreProductDetailExtend: FC<MWStoreProductDetailExtendProps> = ({
  product,
  toggleMW,
}) => {
  const [selectedGlobalItems, setGlobalSelectedItem] = useState<
    ICustomizationItem[]
  >([]);

  const handlerAddCustomization = useCallback(
    (customizationItem: ICustomizationItem): void => {
      if (
        selectedGlobalItems.some((item) => item.id === customizationItem.id)
      ) {
        const filteredItem = selectedGlobalItems.filter(
          (item) => item.id !== customizationItem.id
        );
        setGlobalSelectedItem(filteredItem);
      } else {
        setGlobalSelectedItem([...selectedGlobalItems, customizationItem]);
      }
    },
    [selectedGlobalItems]
  );

  return (
    <div className={style["mw-store-product-detail--extend"]}>
      <StoreCustomProductList
        customProductsList={STORE_CUSTOM_LIST_DATA.StoreCustomProductList}
        handlerAddCustomization={handlerAddCustomization}
      />
      <MWStoreProductDetailCustom
        product={product}
        toggleMW={toggleMW}
        key={product.id}
        //
        selectedGlobalItems={selectedGlobalItems}
      />
    </div>
  );
};
export default MWStoreProductDetailExtend;
