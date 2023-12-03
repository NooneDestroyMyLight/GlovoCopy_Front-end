import { FC, memo } from "react";
import style from "./Orders.module.scss";
import { ORDERS_TEMPLATE } from "./orderss.data";

interface OrdersProps {
  isTitle?: boolean;
}

const Orders: FC<OrdersProps> = memo(({ isTitle = true }) => {
  return (
    <div>
      {isTitle && (
        <p className={`${style["orders-title"]} ${style["font"]}`}>
          {ORDERS_TEMPLATE.title}
        </p>
      )}
      <div className={style["orders--empty"]}>
        <p className={style["placeholder"]}>{ORDERS_TEMPLATE.empty}</p>
        <p className={style["descr"]}>{ORDERS_TEMPLATE.descr}</p>
      </div>
    </div>
  );
});
export default Orders;
