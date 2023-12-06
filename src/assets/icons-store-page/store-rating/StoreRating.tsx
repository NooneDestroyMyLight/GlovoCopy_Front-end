import { FC } from "react";
import style from "./StoreRaiting.module.scss";

const StoreRating: FC = ({}) => {
  return (
    <img
      src="/src/assets/icons-store-page/store-rating/RatingExcellentLight.png"
      alt="rating"
      className={style["store-rating"]}
    />
  );
};
export default StoreRating;
