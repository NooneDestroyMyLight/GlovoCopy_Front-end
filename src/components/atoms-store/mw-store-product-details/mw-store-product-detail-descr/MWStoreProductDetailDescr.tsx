import { FC } from "react";
import style from "./MWStoreProductDetailDescr.module.scss";

interface MWStoreProductDetailDescrProps {
  text: string;
}

const MWStoreProductDetailDescr: FC<MWStoreProductDetailDescrProps> = ({
  text,
}) => {
  return (
    <div className={style["mw-store-product-detail-descr"]}>
      <article className={style["mw-store-product-detail-descr__text"]}>
        {text}
      </article>
    </div>
  );
};

export default MWStoreProductDetailDescr;
