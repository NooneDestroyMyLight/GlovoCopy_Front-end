import { FC, memo } from "react";
import style from "./OrdersStore.module.scss";

const OrdersStore: FC = memo(({}) => {
  return (
    <svg
      data-v-0571b354=""
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      data-e2e-id="user-orders-trigger"
    >
      <g stroke="#FFFFFF" stroke-width="2">
        <circle cx="5.5" cy="6.66815" r="3"></circle>{" "}
        <circle cx="5.5" cy="16.66815" r="3"></circle>{" "}
        <circle cx="5.5" cy="26.66815" r="3"></circle>{" "}
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 6.66815h16m-16 10h16m-16 10h16"
        ></path>
      </g>
    </svg>
  );
});

export default OrdersStore;
