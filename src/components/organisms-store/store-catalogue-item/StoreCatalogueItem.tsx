import { FC } from "react";
import style from "./StoreCatalogueItem.module.scss";

import StoreProductCard from "../../molecules-store/store-product-card/StoreProductCard";
import { CatalogueI } from "../store-body/storeBody.data";

interface StoreCatalogueItemProps {
  Icon?: FC;
  catalogue: CatalogueI;
}

const StoreCatalogueItem: FC<StoreCatalogueItemProps> = ({
  Icon,
  catalogue,
}) => {
  const { productList, title } = catalogue;

  return (
    <div className={style["store-catalogue-item"]}>
      <div className={style["store-catalogue-item__title"]}>
        {Icon && (
          <div className={style["icon"]}>
            <Icon />
          </div>
        )}
        <h3>{title}</h3>
      </div>
      <ul className={style["products-list"]}>
        {productList.map((item, index) => (
          <StoreProductCard product={item} key={index} />
        ))}
      </ul>
    </div>
  );
};
export default StoreCatalogueItem;
