import { FC, memo } from "react";
import style from "./IconUserEmail.module.scss";
import { IconI as IconProps } from "../../../types/IIcon";

const IconUserEmail: FC<IconProps> = memo(({ color }) => {
  return (
    <svg
      data-v-ffebda10=""
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      // {...SvgAttributes}
      className={`${style["icon-user-email"]} ${color && color}`}
    >
      <rect
        x="3"
        y="5.70703"
        width="18.0098"
        height="13.5"
        rx="2"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linejoin="round"
        className={`${style["icon-user-email"]} ${color && color}`}
      ></rect>
      <path
        d="M20.2445 6.46289L12.0073 13.4053L3.68555 6.46289"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${style["icon-user-email"]} ${color && color}`}
      ></path>
    </svg>
  );
});

export default IconUserEmail;
