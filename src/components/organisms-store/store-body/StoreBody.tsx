import { FC, memo } from "react";
import style from "./StoreBody.module.scss";
import { motion } from "framer-motion";
//
import { CatalogueIWithRef } from "./storeBody.data";
import StoreClosedBanner from "../../atoms-store/store-closed-banner/StoreClosedBanner";
import StoreCatalogueItem from "../store-catalogue-item/StoreCatalogueItem";
import StoreInputSearch from "../../atoms-store/store-input-search/StoreInputSearch";

interface StoreBodyProps {
  catalogueList: CatalogueIWithRef[];
  isClosed: boolean;
  catalogueListRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const StoreBody: FC<StoreBodyProps> = memo(
  ({ catalogueList, isClosed, catalogueListRef }) => {
    return (
      <div className={style["store-products-list"]}>
        <StoreInputSearch />
        {isClosed && <StoreClosedBanner />}
        <div className={style["catalogue-list"]} ref={catalogueListRef}>
          {catalogueList.map((catalogue, index) => (
            <motion.div>
              <StoreCatalogueItem
                key={index}
                refEl={catalogue.ref}
                // Icon={StorePopularListIcon}
                catalogue={catalogue}
                isClosed={isClosed}
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
);
export default StoreBody;
