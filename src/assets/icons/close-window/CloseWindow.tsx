import { FC, memo } from "react";
import style from "./CloseWindow.module.scss";

interface CloseWindowProps {
  onIconClick: () => void;
}

const CloseWindow: FC<CloseWindowProps> = memo(({ onIconClick }) => (
  <i className={style["close-window"]} onClick={onIconClick} />
));

export default CloseWindow;
