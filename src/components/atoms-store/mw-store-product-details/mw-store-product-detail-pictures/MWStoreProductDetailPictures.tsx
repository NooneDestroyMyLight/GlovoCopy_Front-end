import { FC } from "react";
import style from "./MWStoreProductDetailPictures.module.scss";

interface MWStoreProductDetailPicturesProps {}

const MWStoreProductDetailPictures: FC<
  MWStoreProductDetailPicturesProps
> = ({}) => {
  return <div className={style["mw-store-product-detail-pictures"]}></div>;
};

export default MWStoreProductDetailPictures;
