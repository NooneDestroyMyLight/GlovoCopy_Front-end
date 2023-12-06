import { FC } from "react";
import style from "./StorePopularListIcon.module.scss";

const StorePopularListIcon: FC = ({}) => {
  return (
    <img
      src="/src/assets/icons-store-page/store-popular-list-icon/Top.png"
      alt="popular list"
      className={style["store-popular-list-icon"]}
    />
  );
};

export default StorePopularListIcon;
