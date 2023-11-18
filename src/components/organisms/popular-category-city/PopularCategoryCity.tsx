import { FC } from "react";
import style from "./PopularCategoryCity.module.scss";
import {
  PopularCategoryDataI,
  PopularCategoryTemplateI,
} from "./popularCategoryCity.data";

interface PopularCategoryCityI {
  template: PopularCategoryTemplateI;
  iconSrc: string;
  list: PopularCategoryDataI[];
}

const PopularCategoryCity: FC<PopularCategoryCityI> = ({
  template,
  iconSrc,
  list,
}) => {
  return (
    <section
      className={`${style["layout-container"]} ${style["popular-category"]}`}
    >
      <img
        src={iconSrc}
        role="presentation"
        loading="lazy"
        className={style["popular-category__icon"]}
      />
      <h2 className={style["popular-category__title"]}>{template.popular}</h2>
      <ul className={style["popular-category__list"]}>
        {/*Change button on link*/}
        {list.map((item) => (
          <button className={style["category-item"]}>{item.name}</button>
        ))}
      </ul>
    </section>
  );
};

export default PopularCategoryCity;
