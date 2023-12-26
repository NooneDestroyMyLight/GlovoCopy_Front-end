import { FC, memo } from "react";
import style from "./IconStoreDecrease.module.scss";

const src = "./minus-new-disabled.svg";
const alt = "icon decrease disabled";

const IconStoreDecreaseDisabled: FC = memo(({}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={style["icon-store-decrease-disabled"]}
    >
      <circle cx="12" cy="12" r="12" fill="#EEEEEE" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.2002 13H16.8002C17.3525 13 17.8002 12.5523 17.8002 12C17.8002 11.4477 17.3525 11 16.8002 11H7.2002C6.64791 11 6.2002 11.4477 6.2002 12C6.2002 12.5523 6.64791 13 7.2002 13Z"
        fill="#D8D8D8"
      />
    </svg>
  );
});
export default IconStoreDecreaseDisabled;
