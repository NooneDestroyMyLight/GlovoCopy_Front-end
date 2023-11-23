import { FC, memo } from "react";

const Plus: FC = memo(({}) => {
  return (
    <svg
      data-v-ac01b0d8=""
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10"
        cy="10.001"
        rx="8.44824"
        ry="8.44824"
        stroke="var(--color-accent)"
        stroke-width="1.5"
      ></ellipse>{" "}
      <path
        d="M9.99967 5.41667V14.5833"
        stroke="var(--color-accent)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M14.5837 9.98503H5.41699"
        stroke="var(--color-accent)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
});

export default Plus;
