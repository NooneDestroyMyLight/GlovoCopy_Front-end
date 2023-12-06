import { FC, memo } from "react";
import style from "./ProfileStore.module.scss";

const ProfileStore: FC = memo(({}) => {
  return (
    <svg
      data-v-0571b354=""
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="34"
      height="34"
      viewBox="0 0 32 32"
      data-e2e-id="user-profile-trigger"
    >
      <g
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M25.0801 24.1107c-2.2971-3.0455-5.4822-5.5086-9.0186-5.5086-3.7536 0-7.12573 2.128-9.44431 5.5086"></path>{" "}
        <circle cx="16" cy="13.5874" r="4.91841"></circle>{" "}
        <circle cx="16.0001" cy="16.0001" r="13.0909"></circle>
      </g>
    </svg>
  );
});

export default ProfileStore;
