import { FC, memo } from "react";
import style from "./CloseWindow.module.scss";

interface CloseWindowProps {}

const CloseWindow: FC = memo(({}) => <i className={style["close-window"]} />);

export default CloseWindow;
