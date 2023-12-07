import { FC } from "react";
import style from "./Store.module.scss";
//
import { STORE_DATA } from "./Store.data";
import HeaderStore from "../../tamplates-store/header-store-page/HeaderStore";
import PathToStore from "../../atoms-store/path-to-store/PathToStore";
import StoreTopic from "../../molecules-store/store-topic/StoreTopic";
import StoreCart from "../../organisms-store/store-cart/StoreCart";
import StoreCatalogue from "../../molecules-store/store-catalogue/StoreCatalogue";
import StoreBody from "../../organisms-store/store-body/StoreBody";

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
            <div className={style["cart__container"]}>
              <StoreCart />
            </div>
          </div>
          <div className={style["catalogue"]}>
            <div className={style["catalogue__container"]}>
              <StoreCatalogue />
            </div>
          </div>
          <div className={style["products-list"]}>
            <StoreBody />
          </div>
        </section>
      </section>
    </main>
  );
};
export default Store;
