import { FC, memo, useCallback, useState } from "react";
import style from "./StoreCustomProductCategory.module.scss";
//
import { ICustomizationItem } from "../../atoms-store/customization-item/customizationItem.data";
//
import IconAddToCart from "../../../assets/icons-store-page/store-add-to-cart/IconAddToCart";
import {
  IStoreCustomProductCategory,
  Store_Custom_Product_Category_TEMPLATE,
} from "./storeCustomProductCategory.data";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
import {
  SRC_ICON_STORE_DISABLED_CUSTOMIZATION_ITEM,
  SRC_ICON_STORE_SELECTED_CUSTOMIZATION_ITEM,
} from "../../../assets/icons/icon-src-const";

interface CustomizationItemProps {
  customization: ICustomizationItem;
  selectedItemValidation: (customizationItem: ICustomizationItem) => void;
  isDisabled: boolean;
  isSelected: boolean;
}

const CustomizationItem: FC<CustomizationItemProps> = memo(
  ({ customization, isDisabled, isSelected, selectedItemValidation }) => {
    const { name, price } = customization;
    return (
      <button
        onClick={() => selectedItemValidation(customization)}
        disabled={isDisabled && !isSelected}
        className={`${style["customization-item"]} ${
          isDisabled && !isSelected && style["customization-item--disabled"]
        } 
        ${isSelected && style["customization-item--selected"]} 
        `}
      >
        <div className={style["customization-item__container"]}>
          <span className={style["customization-item__text"]}>
            {name}
            <span className={style["price"]}>
              {` +${utilsFormatedPrice(price)}
          
          ${STORE_TEMPLATE.currencySymbol}`}
            </span>
          </span>

          <div className={style["icon__wrapper"]}>
            {isSelected && (
              <img src={SRC_ICON_STORE_SELECTED_CUSTOMIZATION_ITEM} />
            )}
            {isDisabled && !isSelected && (
              <img src={SRC_ICON_STORE_DISABLED_CUSTOMIZATION_ITEM} />
            )}
            {!isDisabled && !isSelected && <IconAddToCart />}
          </div>
        </div>
      </button>
    );
  }
);

interface CustomProductCategoryProps {
  storeCustomProductCategory: IStoreCustomProductCategory;
  setGlobalSelectedItem: React.Dispatch<
    React.SetStateAction<ICustomizationItem[]>
  >;
}

const StoreCustomProductCategory: FC<CustomProductCategoryProps> = memo(
  ({
    storeCustomProductCategory: {
      customizationsList,
      maxCustomizations,
      title,
    },
    setGlobalSelectedItem,
  }) => {
    const [selectedItems, setSelectedItem] = useState<ICustomizationItem[]>([]);

    const selectedItemValidation = useCallback(
      (customizationItem: ICustomizationItem) => {
        if (selectedItems.some((item) => item.id === customizationItem.id)) {
          const filteredItem = selectedItems.filter(
            (item) => item.id !== customizationItem.id
          );
          setSelectedItem(filteredItem);
          setGlobalSelectedItem(filteredItem);
        } else {
          setSelectedItem([...selectedItems, customizationItem]);
          setGlobalSelectedItem([...selectedItems, customizationItem]);
        }
      },
      [selectedItems, setSelectedItem]
    );

    return (
      <li className={style["custom-product-category"]}>
        <div className={style["custom-product-category__title"]}>
          <h4 className={style["title"]}>{title}</h4>
          <span
            className={style["sub-title"]}
          >{`${Store_Custom_Product_Category_TEMPLATE.subTitle}${maxCustomizations} `}</span>
        </div>
        <ul className={"custom-products_list"}>
          {customizationsList.map((customization) => (
            <CustomizationItem
              customization={customization}
              key={customization.id}
              selectedItemValidation={selectedItemValidation}
              isDisabled={selectedItems.length >= maxCustomizations}
              isSelected={selectedItems.some(
                (selected) => selected.id === customization.id
              )}
            />
          ))}
        </ul>
      </li>
    );
  }
);

export default StoreCustomProductCategory;
