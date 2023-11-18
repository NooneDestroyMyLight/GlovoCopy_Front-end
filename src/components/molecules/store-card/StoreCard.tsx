import { FC, memo } from "react";
import style from "./StoreCard.module.scss";
import { StoreCardDataI } from "../../templates/store-suggestions/storeSuggestions.data";

interface StoreCardI {
  item: StoreCardDataI;
}

const StoreCard: FC<StoreCardI> = memo(({ item }) => {
  const { src, category, name, ratingScore, ratingVotes, diskont } = item;
  return (
    <button className={style["store-suggestion-item"]}>
      <div className={style["store-suggestion-item__img-wrapper"]}>
        <div className={style["store-suggestion-item__img-container"]}>
          <img src={src} alt={name} className={style["img"]} />
          <span className={style["category"]}>{category}</span>
        </div>
        {diskont && <label className={style["diskont"]}>{diskont}</label>}
      </div>
      <ul className={style["store-suggestion-item__descr"]}>
        <span className={style["name"]}>{name}</span>
        <li className={style["stats"]}>
          {/* <div className={style["icon"]}>ICON</div> */}
          <img
            src="/src/assets/icons/store-suggestion/rating_good.png"
            alt="Значок рейтингу закладу"
            className={style["rating-icon"]}
          />
          <span className={style["stats__rating-score"]}>{ratingScore}</span>
          <span className={style["stats__rating-votes"]}>({ratingVotes})</span>
        </li>
      </ul>
    </button>
  );
});

export default StoreCard;
