import { FC, memo } from "react";
import style from "./IconUserName.module.scss";
import { IconI as IconProps } from "../../../types/IIcon";

const IconUserName: FC<IconProps> = memo(({ color }) => {
  return (
    <svg
      data-v-ffebda10=""
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M20.5581 19.4364C19.9582 17.1204 18.9473 15.3197 17.4523 14.1025C15.9521 12.881 14.0449 12.3125 11.781 12.3125C9.5171 12.3125 7.60997 12.881 6.10978 14.1025C4.61475 15.3197 3.60386 17.1204 3.00398 19.4364C2.97216 19.5592 2.95605 19.6856 2.95605 19.8125C2.95605 20.6409 3.62763 21.3125 4.45606 21.3125L19.106 21.3125C19.2329 21.3125 19.3593 21.2964 19.4821 21.2646C20.2841 21.0568 20.7658 20.2383 20.5581 19.4364ZM20.5581 19.4364L19.8435 19.6214L20.5581 19.4363C20.5581 19.4364 20.5581 19.4364 20.5581 19.4364Z"
        stroke="#292929"
        stroke-width="1.5"
        className={`${style["icon-user-name"]} ${color && color}`}
      ></path>
      <path
        d="M16.3972 7.69761C16.3972 5.14843 14.3305 3.08203 11.7816 3.08203C9.23217 3.08203 7.16602 5.14819 7.16602 7.69761C7.16602 10.2466 9.23241 12.3132 11.7816 12.3132C14.3303 12.3132 16.3972 10.2463 16.3972 7.69761Z"
        stroke="#292929"
        stroke-width="1.5"
        className={`${style["icon-user-name"]} ${color && color}`}
      ></path>
    </svg>
  );
});

export default IconUserName;
