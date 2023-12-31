import { FC, memo } from "react";
import style from "./DropdownBlack.module.scss";
import { IconI } from "../../../types/IIcon";

//styles icon_size
export const DD_ICON_SMALL = style.small;
export const DD_ICON_MEDIUM = style.medium;

interface DropdownBlackProps extends IconI {
  color?: string;
}

const DropdownBlack: FC<DropdownBlackProps> = memo(({ color, className }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.8394 13.2229C10.4786 13.6002 9.90919 13.6292 9.51628 13.31L9.42196 13.2229L5.34902 8.96465C4.95939 8.55729 4.96084 7.89834 5.35226 7.49284C5.71356 7.11853 6.28086 7.09102 6.67245 7.4094L6.76647 7.49621L10.1316 11.014L13.4949 7.49621C13.8546 7.12018 14.4217 7.08997 14.8147 7.40649L14.9091 7.49284C15.2704 7.86715 15.2994 8.45742 14.9953 8.86641L14.9123 8.96465L10.8394 13.2229Z"
        fill={color ? color : "black"}
      />
    </svg>
  );
});

export default DropdownBlack;
