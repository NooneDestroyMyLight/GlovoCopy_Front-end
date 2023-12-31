import { FC, memo } from "react";
import { IconI } from "../../../types/IIcon";

const MapMarker_small: FC = memo(({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          fill="#2ABB9B"
          d="M12.955 5.232H30.34l-5.865 6.775 5.865 6.774H12.955z"
        />
        <path
          fill="#4A4A4A"
          fill-rule="nonzero"
          d="M12.952 20.013v13.572a.616.616 0 1 1-1.232 0V17.54c0-.022.001-.044.004-.065V5.232c0-.68.551-1.232 1.231-1.232H30.34c1.055 0 1.622 1.24.931 2.038l-5.167 5.969 5.167 5.968c.69.798.124 2.038-.931 2.038H12.955h-.003zm.003-14.781v13.55H30.34l-5.865-6.775 5.865-6.775H12.955z"
        />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M22.473 5.837a.616.616 0 0 1 .09 1.225l-.09.007-7.603-.001v7.535c0 .309-.228.565-.525.609l-.09.007a.616.616 0 0 1-.61-.525l-.007-.091v-8.15c0-.31.228-.565.525-.61l.091-.006h8.219z"
        />
      </g>
    </svg>
  );
});

export default MapMarker_small;
