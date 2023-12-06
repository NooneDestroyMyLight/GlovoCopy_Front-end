import { FC } from "react";
import style from "./StoreCatalogue.module.scss";
import {
  STORE_CATALOGUE_DATA,
  STORE_CATALOGUE_TEMPLATE,
} from "./storeCatalogue.data";
//
import StoreCatalogueIcon from "../../../assets/icons-store-page/store-catalogue/StoreCatalogueIcon";

interface StoreCatalogueProps {}

const StoreCatalogue: FC<StoreCatalogueProps> = ({}) => {
  return (
    <div className={style["store-catalogue"]}>
      <div className={style["store-catalogue__title"]}>
        {/* LINK*/}
        <StoreCatalogueIcon />
        <span className={style["store-catalogue__title__text"]}>
          {STORE_CATALOGUE_TEMPLATE.title}
        </span>
      </div>
      <ul className={style["store-catalogue__list"]}>
        {STORE_CATALOGUE_DATA.map((item) => (
          <li className={style["store-catalogue__item"]}>
            <a
              className={`${style["store-catalogue__link"]} ${style["store-catalogue__link_active"]}`}
              href={item.link}
            >
              {/* Active there*/}
              {/*add link to that type of product */}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StoreCatalogue;
