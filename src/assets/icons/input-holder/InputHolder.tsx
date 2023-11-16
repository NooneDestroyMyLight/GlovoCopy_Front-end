import { FC } from "react";
import style from "./InputHolder.module.scss";

const InputHolder: FC = ({}) => {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6.7207" r="5" stroke="#9B9B9B" stroke-width="1.6" />
      <path
        d="M9.39648 10.7227L12.0004 13.7203"
        stroke="#9B9B9B"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InputHolder;
