import { FC } from "react";
import style from "./Order.module.scss";

const Order: FC = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style["order"]}
    >
      <g filter="url(#a)">
        <path
          d="M29.374 32.353c4.351-2.955 8.693-6.796 9.525-11.382.823-4.596-1.866-9.919-5.65-13.858C29.464 3.173 24.602.636 19.456.105c-5.137-.53-10.55.956-13.906 4.312C2.202 7.773.91 12.989.953 17.875c.035 4.886 1.397 9.432 4.187 12.97 2.782 3.529 6.983 6.049 11.263 6.28 4.28.231 8.62-1.818 12.971-4.772Z"
          fill="#FFDE99"
        />
      </g>
      <circle
        cx="11.313"
        cy="11.031"
        r="2.156"
        stroke="#292929"
        stroke-width="1.438"
      />
      <circle
        cx="11.313"
        cy="18.219"
        r="2.156"
        stroke="#292929"
        stroke-width="1.438"
      />
      <circle
        cx="11.313"
        cy="25.406"
        r="2.156"
        stroke="#292929"
        stroke-width="1.438"
      />
      <path
        stroke="#292929"
        stroke-width="1.438"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.063 11.031h11.5M17.063 18.219h11.5M17.063 25.406h11.5"
      />
      <defs>
        <filter
          id="a"
          x=".952"
          y="0"
          width="38.095"
          height="38.961"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.818" />
          <feColorMatrix values="0 0 0 0 0.882353 0 0 0 0 0.623529 0 0 0 0 0.0901961 0 0 0 0.5 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1094_22833"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1094_22833"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Order;
