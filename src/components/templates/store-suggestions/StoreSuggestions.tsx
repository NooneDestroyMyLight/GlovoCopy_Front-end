import { FC, memo } from "react";
import style from "./StoreSuggestions.module.scss";
//
import { StoreCardDataI } from "./storeSuggestions.data";
import StoreCard from "../../molecules/store-card/StoreCard";

interface StoreSuggestionsI {
  title: string;
  titleIconSrc: string;
  products: StoreCardDataI[];
}

const StoreSuggestions: FC<StoreSuggestionsI> = memo(
  ({ title, products, titleIconSrc }) => {
    return (
      <section className={style["store-suggestions"]}>
        <ul
          className={`${style["layout-container"]} ${style["store-suggestions__container"]}`}
        >
          <li className={style["title-wrapper"]}>
            <img src={titleIconSrc} className={style["icon"]} />
            <h2 className={style["title"]}>{title}</h2>
          </li>
          <ul className={style["list"]}>
            {/*Don't forget about key*/}
            {products.map((item) => (
              <StoreCard item={item} key={item.name} />
            ))}
          </ul>
        </ul>
      </section>
    );
  }
);

export default StoreSuggestions;
