import { FC } from "react";
import style from "./PathToStoreSeparator.module.scss";
import { IconI } from "../../../types/icon";

const PathToStoreSeparator: FC<IconI> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-v-3addcd6e=""
      className={style["path-to-store__separator"]}
    >
      <path
        d="M10.7679 18.705C10.3785 19.0967 9.74534 19.0985 9.35368 18.7092C8.99215 18.3497 8.96277 17.7826 9.26666 17.3894L9.34957 17.295L12.9982 13.03L9.2916 8.70505C8.93216 8.34352 8.90608 7.77621 9.21224 7.38481L9.29571 7.29084C9.65724 6.93141 10.2245 6.90533 10.6159 7.21149L10.7099 7.29495L15.1174 12.3241C15.4753 12.6842 15.5029 13.2487 15.2 13.6402L15.1174 13.7342L10.7679 18.705Z"
        fill={color}
      ></path>
    </svg>
  );
};
export default PathToStoreSeparator;
