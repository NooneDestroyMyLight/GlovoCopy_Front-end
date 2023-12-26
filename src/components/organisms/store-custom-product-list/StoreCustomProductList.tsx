import { FC } from "react";
import style from "./StoreCustomProductList.module.scss";
import StoreCustomProductCategory from "../../molecules-store/store-custom-product-category/StoreCustomProductCategory";
import { IStoreCustomProductCategory } from "../../molecules-store/store-custom-product-category/storeCustomProductCategory.data";
import { ICustomizationItem } from "../../atoms-store/customization-item/customizationItem.data";

interface StoreCustomProductListProps {
  customProductsList: IStoreCustomProductCategory[];
  setGlobalSelectedItem: React.Dispatch<
    React.SetStateAction<ICustomizationItem[]>
  >;
}

const StoreCustomProductList: FC<StoreCustomProductListProps> = ({
  customProductsList,
  setGlobalSelectedItem,
}) => {
  return (
    <ul className={style["store-custom-product-list"]}>
      {customProductsList.map((category) => (
        <StoreCustomProductCategory
          storeCustomProductCategory={category}
          key={category.id}
          setGlobalSelectedItem={setGlobalSelectedItem}
        />
      ))}
    </ul>
  );
};

export default StoreCustomProductList;

//STORE_CUSTOM_LIST_DATA.StoreCustomProductList
