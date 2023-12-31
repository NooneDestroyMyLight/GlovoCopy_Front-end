import { FC, useRef } from "react";
import style from "./Store.module.scss";
//
import { STORE_DATA } from "./Store.data";
import HeaderStore from "../../tamplates-store/header-store-page/HeaderStore";
import PathToStore from "../../atoms-store/path-to-store/PathToStore";
import StoreTopic from "../../molecules-store/store-topic/StoreTopic";
import StoreCart from "../../organisms-store/store-cart/StoreCart";
import StoreCatalogue from "../../molecules-store/store-catalogue/StoreCatalogue";
import StoreBody from "../../organisms-store/store-body/StoreBody";
import {
  CatalogueIWithRef,
  STORE_CATALOGUE_LIST_DATA,
} from "../../organisms-store/store-body/storeBody.data";
import StoreHeaderStickyHeader from "../../molecules-store/store-header-sticky/StoreHeaderStickyHeader";
import { PATH_TO_STORE_DATA } from "../../atoms-store/path-to-store/pathToStore.data";
//
import { useOverlayHeaderView } from "../../../hooks/useOverlayHeaderView";
import { useTypedSelector } from "../../../hooks/hook-redux/useTypedSelector";

const Store: FC = ({}) => {
  const catalogueList = STORE_CATALOGUE_LIST_DATA.map(
    (item): CatalogueIWithRef => {
      return {
        ...item,
        ref: useRef<HTMLElement>(null),
      };
    }
  );

  const [isSticky, divRef] = useOverlayHeaderView(false);
  const { cart } = useTypedSelector((state) => state.cart);

  return (
    <main className={style["store"]}>
      <StoreHeaderStickyHeader
        storeName={PATH_TO_STORE_DATA.storeName}
        isSticky={isSticky}
      />
      <section className={style["store-image"]}>
        <picture>
          <img
            src={STORE_DATA.storeBackgroundImg}
            alt="store-image"
            className={style["store-image__img"]}
          />
          <div className={style["store-image__overlay"]} />
        </picture>
      </section>
      <HeaderStore />
      <section className={style["store__body"]}>
        <PathToStore />
        <section className={style["store__container"]}>
          <div className={style["topic"]}>
            <StoreTopic discount={STORE_DATA.storeDiscount} />
          </div>
          <div className={style["cart"]}>
            <div
              className={`${style["cart__container"]} ${
                isSticky && style["store_sticky-el"]
              }`}
            >
              <StoreCart isClosed={STORE_DATA.isClosed} cartItems={cart} />
            </div>
          </div>
          <div className={style["catalogue"]}>
            <div
              className={`${style["catalogue__container"]} ${
                isSticky && style["store_sticky-el"]
              }`}
            >
              <StoreCatalogue catalogueList={catalogueList} />
            </div>
          </div>
          <div className={style["products-list"]}>
            <StoreBody
              catalogueList={catalogueList}
              isClosed={STORE_DATA.isClosed}
              catalogueListRef={divRef}
            />
          </div>
        </section>
      </section>
    </main>
  );
};
export default Store;
