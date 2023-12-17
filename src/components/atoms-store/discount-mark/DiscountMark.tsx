import { FC, memo } from "react";
import style from "./DiscountMark.module.scss";

interface DiscountMarkProps {
  value: string;
}
const DiscountMark: FC<DiscountMarkProps> = memo(({ value }) => (
  <div className={style["discount-mark"]}>-{value}</div>
));

export default DiscountMark;
