import { FC, memo } from "react";
import style from "./MWStoreProductDetailPictures.module.scss";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

interface MWStoreProductDetailPicturesProps {
  src: string;
}

const MWStoreProductDetailPictures: FC<MWStoreProductDetailPicturesProps> =
  memo(({ src }) => {
    return (
      <div className={style["mw-store-product-detail-pictures"]}>
        <InnerImageZoom src={src} hideHint className={style["img"]} />
      </div>
    );
  });

export default MWStoreProductDetailPictures;
