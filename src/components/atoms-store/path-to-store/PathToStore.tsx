import { FC } from "react";
import style from "./PathToStore.module.scss";
import { PATH_TO_STORE_DATA } from "./pathToStore.data";
import PathToStoreSeparator from "../../../assets/icons-store-page/path-to-store-separator/PathToStoreSeparator";
import { WHITE } from "../../../assets/icons/location-small/locationSmall.data";

const PathToStore: FC = ({}) => {
  return (
    <div className={style["path-to-store"]}>
      <span className={style["path-to-store__link"]}>
        {PATH_TO_STORE_DATA.cityName}
      </span>
      <PathToStoreSeparator color={WHITE} />
      <span
        className={`${style["path-to-store__link"]} ${style["path-to-store__link_active"]}`}
      >
        {PATH_TO_STORE_DATA.storeName}
      </span>
    </div>
  );
};

export default PathToStore;
