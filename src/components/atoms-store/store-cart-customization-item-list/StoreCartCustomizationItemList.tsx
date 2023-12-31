import { FC } from "react";
import style from "./StoreCartCustomizationItemList.module.scss";
import { ICustomizationItem } from "../../../types/IProduct";
import { STORE_CART_CUSTOMIZATION_ITEM_LIST_TEMPLATE } from "./storeCartCustomizationItemList.data";
import { ICartProduct } from "../../../types/IProductCart";

interface StoreCartCustomizationItemListProps {
  customizationList: ICustomizationItem[];
  product: ICartProduct;
  mwToggle: (product: ICartProduct) => void;
}

const StoreCartCustomizationItemList: FC<
  StoreCartCustomizationItemListProps
> = ({ customizationList, product, mwToggle }) => {
  return (
    <article className={style["store-cart-customization-item-list"]}>
      <span>{customizationList.map((item) => item.name).join(", ")}</span>{" "}
      <button
        className={style["store-cart-customization-item-list__button"]}
        onClick={() => mwToggle(product)}
      >
        {STORE_CART_CUSTOMIZATION_ITEM_LIST_TEMPLATE.button}
      </button>
    </article>
  );
};
export default StoreCartCustomizationItemList;
