import { FC, useEffect } from "react";
import style from "./StoreCatalogue.module.scss";
import { STORE_CATALOGUE_TEMPLATE } from "./storeCatalogue.data";
//
import StoreCatalogueIcon from "../../../assets/icons-store-page/store-catalogue/StoreCatalogueIcon";
import { CatalogueIWithRef } from "../../organisms-store/store-body/storeBody.data";
import { useInView } from "../../../hooks/useInView";

interface StoreCatalogueProps {
  catalogueList: CatalogueIWithRef[];
}

const StoreCatalogue: FC<StoreCatalogueProps> = ({ catalogueList }) => {
  const refArr = catalogueList.map((item) => item.ref);

  const isInView = useInView(refArr);

  // useEffect(() => console.log(isInView), [isInView]);

  return (
    <div className={`${style["store-catalogue"]}`}>
      <div className={style["store-catalogue__title"]}>
        {/* LINK*/}
        <StoreCatalogueIcon />
        <span className={style["store-catalogue__title__text"]}>
          {STORE_CATALOGUE_TEMPLATE.title}
        </span>
      </div>
      <ul className={style["store-catalogue__list"]}>
        {catalogueList.map((item, index) => {
          // const isInView = useInView(item.ref);

          return (
            <li
              onClick={() =>
                item.ref.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              } //
              className={style["store-catalogue__item"]}
            >
              <span
                className={`${
                  isInView === item.title &&
                  style["store-catalogue__link_active"]
                }`}
              >
                <button
                  className={`${style["store-catalogue__link"]} `}
                  // href={item.link}
                >
                  {/* Active there*/}
                  {/*add link to that type of product */}
                  {item.title}
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default StoreCatalogue;
