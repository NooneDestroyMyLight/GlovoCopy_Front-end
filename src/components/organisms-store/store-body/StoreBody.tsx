import { FC, memo, useRef } from "react";
import style from "./StoreBody.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import {
  STORE_BODY_TEMPLATE,
  STORE_CATALOGUE_LIST_DATA,
} from "./storeBody.data";
import StoreClosedBanner from "../../atoms-store/store-closed-banner/StoreClosedBanner";
import StoreCatalogueItem from "../store-catalogue-item/StoreCatalogueItem";

import { useScroll } from "framer-motion";

const StoreBody: FC = memo(({}) => {
  const placeholder = `${STORE_BODY_TEMPLATE.inputPlaceholder} STORE_NAME`;

  const isClosed: boolean = false;

  const { scrollY } = useScroll();
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // console.log("Page scroll: ", latest);
  //   console.log(isInView);
  // });

  return (
    <div className={style["store-products-list"]}>
      <form className={style["search-form"]}>
        <fieldset className={style["search-input__fieldset"]}>
          <InputHolder />
          <input
            role={"search"}
            placeholder={placeholder}
            className={style["search-input"]}
          />
          {/* ADD search history to input*/}
        </fieldset>
        {/**/}
      </form>
      {isClosed && <StoreClosedBanner />}
      {STORE_CATALOGUE_LIST_DATA.map((catalogue) => (
        <motion.div>
          <StoreCatalogueItem
            // Icon={StorePopularListIcon}
            catalogue={catalogue}
          />
        </motion.div>
      ))}
      {/*Category item*/}
    </div>
  );
});
export default StoreBody;
