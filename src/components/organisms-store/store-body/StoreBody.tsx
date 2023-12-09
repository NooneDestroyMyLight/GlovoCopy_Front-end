import { FC, memo } from "react";
import style from "./StoreBody.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import { CatalogueIWithRef, STORE_BODY_TEMPLATE } from "./storeBody.data";
import StoreClosedBanner from "../../atoms-store/store-closed-banner/StoreClosedBanner";
import StoreCatalogueItem from "../store-catalogue-item/StoreCatalogueItem";
import StoreInputSearch from "../../atoms-store/store-input-search/StoreInputSearch";

interface StoreBodyProps {
  catalogueList: CatalogueIWithRef[];
}

const StoreBody: FC<StoreBodyProps> = memo(({ catalogueList }) => {
  const isClosed: boolean = false;

  return (
    <div className={style["store-products-list"]}>
      {/* <form className={style["search-form"]}>
        <fieldset className={style["search-input__fieldset"]}>
        <InputHolder />
        <input
        role={"search"}
        placeholder={placeholder}
        className={style["search-input"]}
        />
        </fieldset>
      </form> */}
      <StoreInputSearch />
      {isClosed && <StoreClosedBanner />}
      {catalogueList.map((catalogue, index) => (
        <motion.div>
          <StoreCatalogueItem
            key={index}
            refEl={catalogue.ref}
            // Icon={StorePopularListIcon}
            catalogue={catalogue}
          />
        </motion.div>
      ))}
    </div>
  );
});
export default StoreBody;
