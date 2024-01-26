import { FC, memo } from "react";
import style from "./StoreTopic.module.scss";
import { PATH_TO_STORE_DATA } from "../../atoms-store/path-to-store/pathToStore.data";
import { STORE_TOPIC_DATA, STORE_TOPIC_TEMPLATE } from "./storeTopic.data";
import StoreRating from "../../../assets/icons-store-page/store-rating/StoreRating";
import StoreDeliveryFee from "../../../assets/icons-store-page/store-delivery-fee/StoreDeliveryFee";
import StoreDeliveryTime from "../../../assets/icons-store-page/store-delivery-time/StoreDeliveryTime";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";

interface StoreTopicMarkProps {
  value: string;
}

const StoreTopicMark: FC<StoreTopicMarkProps> = memo(({ value }) => {
  const text = `-${value} ${STORE_TOPIC_TEMPLATE.isDiscountTemp}`;

  return (
    <div className={style["store-topic-mark"]}>
      <img
        src="/src/assets/icons-store-page/store-discount-icon/PromoTagIcon.png"
        alt="store-topic-mark"
        className={style["store-topic-mark__icon"]}
      />
      {text}
    </div>
  );
});

interface StoreTopicProps {
  discount: string;
}

const StoreTopic: FC<StoreTopicProps> = memo(({ discount }) => {
  return (
    <div className={style["store-topic"]}>
      <div className={style["store-topic__content"]}>
        <h2 className={style["store-topic__title"]}>
          {PATH_TO_STORE_DATA.storeName}
        </h2>
        {discount && <StoreTopicMark value={discount} />}
        <div className={style["store-topic__info"]}>
          <div className={style["store-topic__info__item"]}>
            <div className={style["icon"]}>
              <StoreRating />
            </div>
            {STORE_TOPIC_DATA.rating}
          </div>
          {STORE_TOPIC_DATA.deliveryTime && (
            <div className={style["store-topic__info__item"]}>
              <div className={style["icon"]}>
                <StoreDeliveryTime />
              </div>
              {STORE_TOPIC_DATA.deliveryTime}
            </div>
          )}
          <div className={style["store-topic__info__item"]}>
            <div className={style["icon"]}>
              <StoreDeliveryFee />
            </div>
            {`${utilsFormatedPrice(STORE_TOPIC_DATA.deliveryFee)} ${
              STORE_TEMPLATE.currencySymbol
            }`}
          </div>
        </div>
        <div className={style["store-topic__notes"]}></div>
      </div>
    </div>
  );
});
export default StoreTopic;
