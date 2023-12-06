import { FC } from "react";
import style from "./StoreTopic.module.scss";
import { PATH_TO_STORE_DATA } from "../../atoms-store/path-to-store/pathToStore.data";
import { STORE_TOPIC_DATA } from "./storeTopic.data";
import StoreRating from "../../../assets/icons-store-page/store-rating/StoreRating";
import StoreDeliveryFee from "../../../assets/icons-store-page/store-delivery-fee/StoreDeliveryFee";
import StoreDeliveryTime from "../../../assets/icons-store-page/store-delivery-time/StoreDeliveryTime";

interface StoreTopicProps {}

const StoreTopic: FC<StoreTopicProps> = ({}) => {
  return (
    <div className={style["store-topic"]}>
      <div className={style["store-topic__content"]}>
        <h2 className={style["store-topic__title"]}>
          {PATH_TO_STORE_DATA.storeName}
        </h2>
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
            {new Intl.NumberFormat("uk-UA").format(
              STORE_TOPIC_DATA.deliveryFee
            )}
            ₴
          </div>
        </div>
        <div className={style["store-topic__notes"]}>d</div>
      </div>
    </div>
  );
};
export default StoreTopic;
