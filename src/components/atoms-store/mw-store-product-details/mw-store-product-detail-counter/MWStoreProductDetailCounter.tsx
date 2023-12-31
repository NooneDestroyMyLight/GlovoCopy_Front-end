import { FC, memo } from "react";
import style from "./MWStoreProductDetailCounter.module.scss";
//
import IconStoreDecreaseDisabled from "../../../../assets/icons-store-page/icon-store-decrease--disabled/IconStoreDecrease";
import IconStoreDecrease from "../../../../assets/icons-store-page/icon-store-decrease/IconStoreDecrease";
import IconStoreIncrease from "../../../../assets/icons-store-page/icon-store-increase/IconStoreIncrease";

interface ProductCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isDisabled?: boolean;
}

const MWStoreProductDetailCounter: FC<ProductCounterProps> = memo(
  ({ count, setCount, isDisabled }) => {
    return (
      <div className={style["mw-store-product-detail-counter"]}>
        <button
          disabled={count === 1 || isDisabled}
          onClick={() => setCount(count - 1)}
          //
          className={style["button-counter"]}
        >
          {count === 1 ? <IconStoreDecreaseDisabled /> : <IconStoreDecrease />}
        </button>
        <div className={style["product-count"]}>{count}</div>
        <button
          className={style["button-counter"]}
          onClick={() => setCount(count + 1)}
          //
          disabled={isDisabled}
        >
          <IconStoreIncrease />
        </button>
      </div>
    );
  }
);

export default MWStoreProductDetailCounter;
