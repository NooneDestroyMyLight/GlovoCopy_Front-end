import { FC } from "react";
import style from "./StoreCartCustomizationItemList.module.scss";
import { ICustomizationItem } from "../../../types/IProduct";

interface StoreCartCustomizationItemListProps {
  customizationList: ICustomizationItem[];
}

const StoreCartCustomizationItemList: FC<
  StoreCartCustomizationItemListProps
> = ({ customizationList }) => {
  return (
    <ul className={style["store-cart-customization-item-list"]}>
      {customizationList.map((item) => (
        <span>{item.name}</span>
      ))}
    </ul>
  );
};
export default StoreCartCustomizationItemList;
