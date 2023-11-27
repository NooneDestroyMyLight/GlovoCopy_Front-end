import { FC, memo } from "react";
import style from "./LoaderTwoDrots.module.scss";

const LoaderTwoDots: FC = memo(() => (
  <div className={style["loading-two-dots"]}>
    <div className={style["loading-two-dots__container"]}></div>
  </div>
));
export default LoaderTwoDots;
