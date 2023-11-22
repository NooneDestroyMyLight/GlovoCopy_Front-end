import { FC } from "react";
import style from "./Flag.module.scss";

const Flag: FC = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="25"
      viewBox="0 0 21 25"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#4a4a4a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M1.9 12.8V24M14.525 8.306l6.077 7.02H1.967V1.286h18.635l-6.077 7.02z" />
      </g>
    </svg>
  );
};

export default Flag;
