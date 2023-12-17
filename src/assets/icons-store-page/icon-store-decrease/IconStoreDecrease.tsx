import { FC, memo } from "react";
import style from "./IconStoreDecrease.module.scss";

const src = "./minus-new.svg";
const alt = "icon decrease";

const IconStoreDecrease: FC = memo(({}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={style["icon-store-decrease"]}
    >
      <circle cx="12.5586" cy="12" r="12" fill="#E9F8F5" />
      <path
        d="M17.3588 11L13.5588 10.999H11.5588L7.75879 11L7.64217 11.0068C7.14483 11.0645 6.75879 11.4872 6.75879 12L6.76552 12.1166C6.82328 12.614 7.24595 13 7.75879 13L11.5588 12.999H13.5588L17.3588 13L17.4754 12.9933C17.9727 12.9355 18.3588 12.5129 18.3588 12L18.3521 11.8834C18.2943 11.3861 17.8716 11 17.3588 11Z"
        fill="#00A082"
      />
    </svg>
  );
});
export default IconStoreDecrease;
