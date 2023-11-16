import { FC } from "react";
import style from "./GeneralCategory.module.scss";
import { generalCategory } from "./general-category.data";

interface GeneralCategoryItemI {
  //   className: string;
  src: string;
  title: string;
}

interface GeneralCategoryI {
  //   className: string;
}

const GeneralCategoryItem: FC<GeneralCategoryItemI> = ({ src, title }) => (
  <li className={style["general-category__item"]}>
    <div className={style["bubble__wrapper"]}>
      <div className={style["bubble"]}>
        <img src={src} alt={title} className={style["img"]} />
      </div>
    </div>
    <span className={style["title"]}>{title}</span>
  </li>
);

const GeneralCategory: FC<GeneralCategoryI> = ({}) => {
  return (
    <section className={style["general-category"]}>
      {/*Address*/}
      {/*CategoryList*/}
      <ul className={style["general-category__list"]}>
        {generalCategory.map((item) => (
          <GeneralCategoryItem
            title={item.title}
            src={item.src}
            key={item.src}
          />
        ))}
      </ul>
    </section>
  );
};

export default GeneralCategory;
