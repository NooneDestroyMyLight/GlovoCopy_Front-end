import { FC, memo } from "react";
import style from "./MwLocationPrevButton.module.scss";
import { IconI } from "../../../types/icon";

interface MwLocationPrevButtonI extends IconI {
  onIconClick?: () => void;
}

const MwLocationPrevButton: FC<MwLocationPrevButtonI> = memo(
  ({ onIconClick }) => {
    return (
      <svg
        data-v-73d9b59b=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        //
        className={style["mw-delivery-address__prev-button"]}
        //
        onClick={onIconClick}
      >
        <path
          d="M13.2321 5.29495C13.6215 4.90329 14.2547 4.90145 14.6463 5.29084C15.0078 5.65027 15.0372 6.21742 14.7333 6.6106L14.6504 6.70505L11.0018 10.97L14.7084 15.295C15.0678 15.6565 15.0939 16.2238 14.7878 16.6152L14.7043 16.7092C14.3428 17.0686 13.7755 17.0947 13.384 16.7885L13.2901 16.705L8.88264 11.6759C8.52468 11.3158 8.49714 10.7513 8.80003 10.3598L8.88264 10.2658L13.2321 5.29495Z"
          fill="#595959"
        />
      </svg>
    );
  }
);

export default MwLocationPrevButton;
