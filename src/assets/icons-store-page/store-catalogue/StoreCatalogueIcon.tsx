import { FC, memo } from "react";
import style from "./StoreCatalogueIcon.module.scss";
import { IconI } from "../../../types/IIcon";

const StoreCatalogueIcon: FC<IconI> = memo(({}) => {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
      <rect
        x="7.07422"
        width="5.14286"
        height="5.14286"
        rx="1"
        fill="#00A082"
      />
      <rect
        x="7.07422"
        y="6.85742"
        width="5.14286"
        height="5.14286"
        rx="1"
        fill="#00A082"
      />
      <rect
        x="0.21875"
        width="5.14286"
        height="5.14286"
        rx="1"
        fill="#00A082"
      />
      <rect
        x="0.21875"
        y="6.85742"
        width="5.14286"
        height="5.14286"
        rx="1"
        fill="#00A082"
      />
    </svg>
  );
});
export default StoreCatalogueIcon;
