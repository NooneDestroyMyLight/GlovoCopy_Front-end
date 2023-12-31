import { FC, memo } from "react";
import style from "./StoreCustomProductList.module.scss";
import StoreCustomProductCategory from "../../molecules-store/store-custom-product-category/StoreCustomProductCategory";
import { IStoreCustomProductCategory } from "../../molecules-store/store-custom-product-category/storeCustomProductCategory.data";
import { ICustomizationItem } from "../../../types/IProduct";

interface StoreCustomProductListProps {
  customProductsList: IStoreCustomProductCategory[];
  handlerAddCustomization: (customizationItem: ICustomizationItem) => void;
  //
  selectedItems: ICustomizationItem[];
}

const StoreCustomProductList: FC<StoreCustomProductListProps> = memo(
  ({ customProductsList, handlerAddCustomization, selectedItems }) => {
    return (
      <ul className={style["store-custom-product-list"]}>
        {customProductsList.map((category) => (
          <StoreCustomProductCategory
            storeCustomProductCategory={category}
            key={category.id}
            handlerAddCustomization={handlerAddCustomization}
            selectedItems={selectedItems}
          />
        ))}
      </ul>
    );
  }
);

export default StoreCustomProductList;

//STORE_CUSTOM_LIST_DATA.StoreCustomProductList
