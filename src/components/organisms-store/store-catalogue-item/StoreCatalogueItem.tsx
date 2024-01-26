import { FC, memo, useMemo } from "react";
import style from "./StoreCatalogueItem.module.scss";
//
import StoreProductCard, {
  StoreProductInCartMobile,
} from "../../molecules-store/store-product-card/StoreProductCard";
import { ICatalogue } from "../store-body/storeBody.data";
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import { useExclusiveMWToggle } from "../../../hooks/useExclusiveMWToggle";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import MWStoreProductDetail from "../mw-product-detail/MWStoreProductDetail";
import {
  MW_BODY_EXTENDED,
  MW_BODY_GENREAL,
} from "../../tamplates-store/mw-window-body/MWWindowBody.style";

import MWStoreProductDetailExtend from "../../tamplates-store/mw-store-product-detail--extend/MWStoreProductDetailExtend";
import { ICartProduct } from "../../../types/IProductCart";
import { IProduct } from "../../../types/IProduct";
//

interface StoreCatalogueItemProps {
  Icon?: FC;
  refEl?: React.RefObject<HTMLElement>;
  cartItems: ICartProduct[];
  //
  isClosed: boolean;
  //
  // catalogue: ICatalogue;
  productList: IProduct[];
  title: string;
}

const StoreCatalogueItem: FC<StoreCatalogueItemProps> = memo(
  ({ refEl, Icon, productList, title, isClosed, cartItems }) => {
    // const { productList, title } = catalogue;
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
            const alreadyInCartProduct = useMemo(
              () => cartItems.filter((item) => item.id === product.id),
              [cartItems.filter((item) => item.id === product.id)]
            );

            return (
              <>
                <div onClick={funArray[index]}>
                  <div>
                    <StoreProductCard
                      product={product}
                      key={product.id}
                      isClosed={isClosed}
                      isCustomization={Boolean(product.customizations)}
                    />
                  </div>
                  {alreadyInCartProduct.map((product, index) => (
                    <StoreProductInCartMobile product={product} key={index} />
                  ))}
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
