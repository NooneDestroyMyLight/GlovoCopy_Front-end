import { FC, memo, useCallback, useState } from "react";
import style from "./HeaderStoreMobile.module.scss";
import { ICatalogue } from "../../organisms-store/store-body/storeBody.data";
import IconStoreArrowLarge from "../../../assets/icons-store-page/icon-store-arrow-large/IconStoreArrowLarge";

const BUTTON_SWITCH_LANGUAGE = {
  src: "/public/store-icon/icon-lenguage/translations-badge-mobile.svg",
  alt: "button-switch-language",
};

const BUTTON_SEARCH = {
  src: "/public/store-icon/icon-search-input--mobile/header-search-icon.svg",
  alt: "button-search",
};

interface NavCategoryMobileProps {
  isSelected: boolean;
  category: ICatalogue;
  onCategoryClick: () => void;
}

const NavCategoryMobile: FC<NavCategoryMobileProps> = memo(
  ({ category, isSelected, onCategoryClick }) => {
    return (
      <button
        onClick={onCategoryClick}
        className={`${style["nav-category--mobile__item"]} ${
          isSelected && style["nav-category--mobile__item--active"]
        }`}
      >
        {category.title}
      </button>
    );
  }
);

interface HeaderStoreMobileProps {
  storeName: string;
  categoriesList: ICatalogue[];
  //
  isSticky: boolean;
}

const HeaderStoreMobile: FC<HeaderStoreMobileProps> = ({
  categoriesList,
  storeName: name,
  //
  isSticky,
}) => {
  const [currnetCategory, setCategory] = useState<number | null>(null);

  return (
    <header
      className={`${style["header-store--mobile"]} ${
        isSticky && style["header-store--sticky"]
      }`}
    >
      <div className={style["topic--mobile"]}>
        <button className={style["button-previous"]}>
          <div className={style["button-previous__icon-wrapper"]}>
            <IconStoreArrowLarge />
          </div>
        </button>
        {/*вернутся на предедущую*/}
        <h3 className={style["store-name"]}>{name}</h3>
        <button className={style["button-switch-language"]}>
          <img
            className={style["button-switch-language__icon"]}
            src={BUTTON_SWITCH_LANGUAGE.src}
            alt={BUTTON_SWITCH_LANGUAGE.alt}
          />
        </button>
        <button className={style["button-search"]}>
          <img
            className={style["button-search__icon"]}
            src={BUTTON_SEARCH.src}
            alt={BUTTON_SEARCH.alt}
          />
        </button>
      </div>
      <nav className={style["nav-category--mobile"]}>
        {categoriesList.map((category) => {
          const { id } = category;
          const onCategoryClick = useCallback(
            () => setCategory(id),
            [id, setCategory]
          );

          return (
            <NavCategoryMobile
              category={category}
              key={id}
              onCategoryClick={onCategoryClick}
              isSelected={currnetCategory === id}
            />
          );
        })}
      </nav>
    </header>
  );
};

export default HeaderStoreMobile;
