import { FC, useState } from "react";
import style from "./MWStoreProductDetailExtend.module.scss";
import { IProduct } from "../../../types/IProduct";
import StoreCustomProductList from "../../organisms/store-custom-product-list/StoreCustomProductList";
import MWStoreProductDetailCustom from "../../organisms-store/mw-store-product-detail--custom/MWStoreProductDetailCustom";
import { STORE_CUSTOM_LIST_DATA } from "../../organisms/store-custom-product-list/storeCustomProductList.data";
import { ICustomizationItem } from "../../atoms-store/customization-item/customizationItem.data";

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

  return (
    <div className={style["mw-store-product-detail--extend"]}>
      <StoreCustomProductList
        customProductsList={STORE_CUSTOM_LIST_DATA.StoreCustomProductList}
        setGlobalSelectedItem={setGlobalSelectedItem}
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
