import { FC, memo } from "react";
import style from "./MWStoreProductDetailTitle.module.scss";

interface MWStoreProductDetailTitleProps {
  text: string;
}

const MWStoreProductDetailTitle: FC<MWStoreProductDetailTitleProps> = memo(
  ({ text }) => {
    return (
      <h4
        className={`${style["mw-store-product-detail-title"]} ${style.title}`}
      >
        {text}
      </h4>
    );
  }
);

export default MWStoreProductDetailTitle;
