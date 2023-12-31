import { FC, memo } from "react";
import style from "./StoreCatalogueItem.module.scss";
//
import StoreProductCard from "../../molecules-store/store-product-card/StoreProductCard";
import { CatalogueI } from "../store-body/storeBody.data";
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import { useExclusiveMWToggle } from "../../../hooks/useExclusiveMWToggle";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import MWStoreProductDetail from "../mw-product-detail/MWStoreProductDetail";
import {
  MW_BODY_EXTENDED,
  MW_BODY_GENREAL,
} from "../../tamplates-store/mw-window-body/MWWindowBody.style";

import MWStoreProductDetailExtend from "../../tamplates-store/mw-store-product-detail--extend/MWStoreProductDetailExtend";
//

interface StoreCatalogueItemProps {
  Icon?: FC;
  refEl: React.RefObject<HTMLElement>;
  catalogue: CatalogueI;
  //
  isClosed: boolean;
}

const StoreCatalogueItem: FC<StoreCatalogueItemProps> = memo(
  ({ refEl, Icon, catalogue, isClosed }) => {
    const { productList, title } = catalogue;
    const [isMwOpen, currentProduct, closeMW, funArray] = useExclusiveMWToggle(
      productList.map((product) => product.id + "")
    );

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
          {productList.map((product, index) => {
            return (
              <>
                <div onClick={funArray[index]}>
                  <StoreProductCard
                    product={product}
                    key={product.id}
                    isClosed={isClosed}
                    isCustomization={Boolean(product.customizations)}
                  />
                </div>
                {!isClosed && +currentProduct === product.id && (
                  <ModelWindow toggleMW={closeMW} isOpen={isMwOpen}>
                    {product.customizations ? (
                      <MWWindowBody
                        className={MW_BODY_EXTENDED}
                        handleCloseWindow={closeMW}
                      >
                        <MWStoreProductDetailExtend
                          product={product}
                          toggleMW={closeMW}
                          key={product.id}
                        />
                      </MWWindowBody>
                    ) : (
                      <MWWindowBody
                        className={MW_BODY_GENREAL}
                        handleCloseWindow={closeMW}
                      >
                        <MWStoreProductDetail
                          product={product}
                          key={product.id}
                          toggleMW={closeMW}
                        />
                      </MWWindowBody>
                    )}
                  </ModelWindow>
                )}
              </>
            );
          })}
        </ul>
      </section>
    );
  }
);
export default StoreCatalogueItem;
