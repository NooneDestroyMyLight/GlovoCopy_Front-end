import { FC, memo } from "react";
import style from "./PathToStore.module.scss";
import { PATH_TO_STORE_DATA } from "./pathToStore.data";
import PathToStoreSeparator from "../../../assets/icons-store-page/path-to-store-separator/PathToStoreSeparator";
import { WHITE } from "../../../assets/icons/location-small/locationSmall.data";

const PathToStore: FC = memo(({}) => {
  return (
    <nav
      className={`${style["path-to-store__margin"]} ${style["path-to-store--hidden"]}`}
    >
      <ul className={style["path-to-store"]}>
        <span className={style["path-to-store__link"]}>
          {PATH_TO_STORE_DATA.cityName}
        </span>
        <PathToStoreSeparator color={WHITE} />
        <span
          className={`${style["path-to-store__link"]} ${style["path-to-store__link_active"]}`}
        >
          {PATH_TO_STORE_DATA.storeName}
        </span>
      </ul>
    </nav>
  );
});

export default PathToStore;
