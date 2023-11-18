import { FC } from "react";
import style from "./GeneralCategoryItem.module.scss";

interface GeneralCategoryItemI {
  //   className: string;
  src: string;
  title: string;
  position: string;
}

const GeneralCategoryItem: FC<GeneralCategoryItemI> = ({
  src,
  title,
  position,
}) => (
  <li className={`${style["general-category__item"]} ${style[position]}`}>
    <div className={style["bubble__wrapper"]}>
      <div className={style["bubble"]}>
        <img src={src} alt={title} className={style["bubble-img"]} />
        <span className={style["bubble-title__mobile"]}>{title}</span>
      </div>
    </div>
    <span className={style["bubble-title__desktop-hidden"]}>{title}</span>
  </li>
);

export default GeneralCategoryItem;
