import { FC } from "react";
import style from "./CreditCard.module.scss";

const CreditCard: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-test-id="credit-card-icon"
      className={style["credit-card"]}
    >
      <path
        d="M1.4846 7.06663H19.7332"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="square"
      ></path>{" "}
      <path
        d="M3.51367 9.84397H6.16622"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M8.22949 9.84397H9.81633"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M10.3144 18.3628H4C2.34314 18.3628 1 17.0197 1 15.3628V6C1 4.34314 2.34315 3 4 3H17.331C18.9879 3 20.331 4.34315 20.331 6V8.84373"
        stroke="#292929"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 22.625C21.3137 22.625 24 19.9387 24 16.625C24 13.3113 21.3137 10.625 18 10.625C14.6863 10.625 12 13.3113 12 16.625C12 19.9387 14.6863 22.625 18 22.625ZM18.0001 12.9751C18.3591 12.9751 18.6501 13.2661 18.6501 13.6251V15.9751H21.0001C21.3591 15.9751 21.6501 16.2661 21.6501 16.6251C21.6501 16.9841 21.3591 17.2751 21.0001 17.2751H18.6501V19.6251C18.6501 19.9841 18.3591 20.2751 18.0001 20.2751C17.6411 20.2751 17.3501 19.9841 17.3501 19.6251V17.2751H15.0001C14.6411 17.2751 14.3501 16.9841 14.3501 16.6251C14.3501 16.2661 14.6411 15.9751 15.0001 15.9751H17.3501V13.6251C17.3501 13.2661 17.6411 12.9751 18.0001 12.9751Z"
        fill="#00A082"
      ></path>
    </svg>
  );
};
export default CreditCard;
