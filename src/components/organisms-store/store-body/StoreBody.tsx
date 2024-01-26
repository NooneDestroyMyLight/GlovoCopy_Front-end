import { FC, memo } from "react";
import style from "./StoreBody.module.scss";

import {
  CatalogueIWithRef,
  STORE_BODY_TEMPLATE,
  STORE_CATEGORY_DATA,
} from "./storeBody.data";
//
import StoreClosedBanner from "../../atoms-store/store-closed-banner/StoreClosedBanner";
import StoreCatalogueItem from "../store-catalogue-item/StoreCatalogueItem";
import StoreInputSearch from "../../atoms-store/store-input-search/StoreInputSearch";
//
import { ICartProduct } from "../../../types/IProductCart";
import { IProduct } from "../../../types/IProduct";

const SimilarCategory: FC = () => {
  return (
    <section
      className={`${style["similar-category"]} ${style["similar-category__margin"]}`}
    >
      <h4 className={style["template-text"]}>
        {STORE_BODY_TEMPLATE.similarCategory}
      </h4>
      <ul className={style["similar-category__list"]}>
        {STORE_CATEGORY_DATA.map((storeCategory) => (
          <li className={style["store-category"]}>{storeCategory.text}</li>
        ))}
      </ul>
    </section>
  );
};

interface StoreBodyProps {
  catalogueList: CatalogueIWithRef[];
  isClosed: boolean;
  catalogueListRef?: React.MutableRefObject<HTMLDivElement | null>;
  //
  cartItems: ICartProduct[];
  searchingResult?: IProduct[];
}

const StoreBody: FC<StoreBodyProps> = memo(
  ({
    catalogueList,
    isClosed,
    catalogueListRef,
    cartItems,
    searchingResult,
  }) => {
    return (
      <div className={style["store-products-list"]}>
        <div className={style["store-products-list__search-input"]}>
          <StoreInputSearch />
        </div>
        {isClosed && <StoreClosedBanner />}
        <div className={style["catalogue-list"]} ref={catalogueListRef}>
          {searchingResult ? (
            <StoreCatalogueItem
              //
              cartItems={cartItems}
              // Icon={StorePopularListIcon}
              // catalogue={catalogue}
              isClosed={isClosed}
              //
              productList={searchingResult as IProduct[]}
              title={STORE_BODY_TEMPLATE.searchResultTitle}
            />
          ) : (
            catalogueList.map((catalogue) => (
              <StoreCatalogueItem
                key={catalogue.id}
                refEl={catalogue.ref}
                //
                cartItems={cartItems}
                // Icon={StorePopularListIcon}
                // catalogue={catalogue}
                isClosed={isClosed}
                //
                productList={catalogue.productList}
                title={catalogue.title}
              />
            ))
          )}
        </div>
        <SimilarCategory />
      </div>
    );
  }
);
export default StoreBody;
