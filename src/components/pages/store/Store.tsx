import { FC } from "react";
import style from "./Store.module.scss";
//
import { STORE_DATA } from "./Store.data";
import HeaderStore from "../../tamplates-store/header-store-page/HeaderStore";
import PathToStore from "../../atoms-store/path-to-store/PathToStore";
import StoreTopic from "../../molecules-store/store-topic/StoreTopic";
import StoreCard from "../../molecules/store-card/StoreCard";
import StoreCart from "../../organisms-store/store-cart/StoreCart";
import StoreProductsList from "../../organisms-store/store-products-list/StoreProductsList";
import StoreCatalogue from "../../molecules-store/store-catalogue/StoreCatalogue";

const Store: FC = ({}) => {
  return (
    <main className={style["store"]}>
      <section className={style["store-image"]}>
        <picture>
          <img
            src={STORE_DATA.storeImg}
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
            <StoreTopic />
          </div>
          <div className={style["cart"]}>
            <StoreCart />
          </div>
          <div className={style["catalogue"]}>
            <StoreCatalogue />
          </div>
          <div className={style["products-list"]}>
            <StoreProductsList />
          </div>
          {/*store-topic*/} {/*cart*/}
          {/*store-catalogue*/} {/*store-search-input*/}
          {/*list*/}
        </section>
      </section>
    </main>
  );
};
export default Store;
