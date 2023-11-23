import { FC } from "react";
import style from "./Flag.module.scss";

const FlagMedium: FC = ({}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style["icon"]}
    >
      <path
        d="M6.06738 12.9718H20.1758L15.9013 7.32023L20.1758 1.67969L6.06738 1.67969V11.0465L6.06738 22.1238"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default FlagMedium;
