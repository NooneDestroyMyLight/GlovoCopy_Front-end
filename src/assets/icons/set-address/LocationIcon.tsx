import { FC, memo } from "react";

const LocationIcon: FC = memo(({}) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.5" cy="16" r="16" fill="#E9F8F5" />
      <g clip-path="url(#clip0_4333:7487)">
        <path
          d="M8.8143 15.5711C8.53343 15.711 8.4197 16.0509 8.56025 16.3304C8.64026 16.4895 8.79081 16.6019 8.96668 16.6338L14.8351 17.696L15.9025 23.5354C15.9462 23.7748 16.1388 23.9596 16.3808 23.9943C16.4076 23.9982 16.4345 24.0001 16.4615 24C16.6771 24.0001 16.8742 23.8789 16.9705 23.6871C20.0616 17.5355 22.4833 11.9703 23.4591 9.67439C23.6326 9.26616 23.2234 8.86519 22.8157 9.04355C20.489 10.0612 14.8197 12.5832 8.8143 15.5711Z"
          fill="#00A082"
        />
      </g>
      <defs>
        <clipPath id="clip0_4333:7487">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(8.5 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default LocationIcon;
