import { FC, memo, useEffect, useRef } from "react";
import style from "./StoreCatalogueItem.module.scss";

import StoreProductCard from "../../molecules-store/store-product-card/StoreProductCard";
import { CatalogueI } from "../store-body/storeBody.data";
//
import { useInView } from "react-intersection-observer";

interface StoreCatalogueItemProps {
  Icon?: FC;
  refEl: React.RefObject<HTMLElement>;
  catalogue: CatalogueI;
}

const StoreCatalogueItem: FC<StoreCatalogueItemProps> = memo(
  ({ refEl, Icon, catalogue }) => {
    const { productList, title } = catalogue;

    return (
      <section ref={refEl} className={style["store-catalogue-item"]}>
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
      </section>
    );
  }
);
export default StoreCatalogueItem;
