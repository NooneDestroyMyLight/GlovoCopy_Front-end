import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import style from "./StoreCustomProductCategory.module.scss";
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
import { ICustomizationItem } from "../../../types/IProduct";

interface CustomizationItemProps {
  customization: ICustomizationItem;
  handlerAddCustomization: (customizationItem: ICustomizationItem) => void;
  isDisabled: boolean;
  isSelected: boolean;
}

const CustomizationItem: FC<CustomizationItemProps> = memo(
  ({ customization, isDisabled, isSelected, handlerAddCustomization }) => {
    const { name, price } = customization;
    return (
      <button
        onClick={() => handlerAddCustomization(customization)}
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
  handlerAddCustomization: (customizationItem: ICustomizationItem) => void;
  selectedItems: ICustomizationItem[];
}

const StoreCustomProductCategory: FC<CustomProductCategoryProps> = memo(
  ({
    storeCustomProductCategory: {
      customizationsList,
      maxCustomizations,
      title,
      //
    },
    handlerAddCustomization,
    selectedItems,
  }) => {
    const isDisabled = useMemo(
      () =>
        selectedItems.filter(
          (item) =>
            customizationsList.filter((inner) => inner.id === item.id).length
        ).length >= maxCustomizations,
      [
        selectedItems.filter(
          (item) =>
            customizationsList.filter((inner) => inner.id === item.id).length
        ).length,
      ]
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
          {customizationsList.map((customization) => {
            // const isDisabled =
            //   selectedItems.length >= maxCustomizations ? true : false;
            // const isSelected = selectedItems.some(
            //   (selected) => selected.id === customization.id
            // );

            // useEffect(() => {
            //   if (isAlreadySelected)
            //     isAlreadySelected.map(
            //       (item) =>
            //         item.id === customization.id &&
            //         !selectedItems.some(
            //           (selectedItem) => selectedItem.id === item.id
            //         ) &&
            //         selectedItemValidation(item)
            //     );
            //   console.log(isAlreadySelected);
            // }, [isAlreadySelected, selectedItemValidation]);

            const isSelected = selectedItems.some(
              (item) => item.id === customization.id
            );

            // const handler = useMemo(
            //   () => handlerAddCustomization,
            //   [isSelected, isDisabled]
            // );

            return (
              <CustomizationItem
                customization={customization}
                key={customization.id}
                handlerAddCustomization={handlerAddCustomization}
                isDisabled={isDisabled}
                isSelected={isSelected}
              />
            );
          })}
        </ul>
      </li>
    );
  }
);

export default StoreCustomProductCategory;
