import { FC } from "react";
import style from "./StoreDeliveryFee.module.scss";

const StoreDeliveryFee: FC = ({}) => {
  return (
    <img
      src="/src/assets/icons-store-page/store-delivery-fee/DeliveryFeeLight.png"
      alt="rating"
      className={style["store-delivery-fee"]}
    />
  );
};
export default StoreDeliveryFee;
