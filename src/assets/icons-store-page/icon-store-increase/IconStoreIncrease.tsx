import { FC, memo } from "react";
import style from "./IconStoreIncrease.module.scss";

const src = "./plus-new (1).svg";
const alt = "increase icon";

const IconStoreIncrease: FC = memo(({}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={style["icon-store-increase"]}
    >
      <circle cx="12.0586" cy="12" r="12" fill="#E9F8F5" />
      <path
        d="M12.0588 6.2002C12.5716 6.2002 12.9943 6.58624 13.0521 7.08357L13.0588 7.2002V10.9992L16.8588 11.0002C17.3716 11.0002 17.7943 11.3862 17.8521 11.8836L17.8588 12.0002C17.8588 12.513 17.4727 12.9357 16.9754 12.9935L16.8588 13.0002L13.0588 12.9992V16.8002C13.0588 17.313 12.6727 17.7357 12.1754 17.7935L12.0588 17.8002C11.546 17.8002 11.1233 17.4142 11.0655 16.9168L11.0588 16.8002V12.9992L7.25879 13.0002C6.74595 13.0002 6.32328 12.6142 6.26552 12.1168L6.25879 12.0002C6.25879 11.4874 6.64483 11.0647 7.14217 11.0069L7.25879 11.0002L11.0588 10.9992V7.2002C11.0588 6.68736 11.4448 6.26469 11.9422 6.20692L12.0588 6.2002Z"
        fill="#00A082"
      />
    </svg>
  );
});
export default IconStoreIncrease;
