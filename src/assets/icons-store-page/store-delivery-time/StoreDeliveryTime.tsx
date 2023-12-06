import { FC } from "react";
import style from "./StoreDeliveryTime.module.scss";

const StoreDeliveryTime: FC = ({}) => {
  return (
    <img
      src="/src/assets/icons-store-page/store-delivery-time/EtaLight.png"
      alt="rating"
      className={style["store-delivery-time"]}
    />
  );
};
export default StoreDeliveryTime;
