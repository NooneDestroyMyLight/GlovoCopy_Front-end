import { FC, ReactNode } from "react";
import style from "./MWWindowBody.module.scss";
//
import CloseWindow from "../../../assets/icons/close-window/CloseWindow";

interface MWWindowBodyProps {
  children: ReactNode;
  handleCloseWindow: () => void;
  className: string;
}

const MWWindowBody: FC<MWWindowBodyProps> = ({
  children,
  handleCloseWindow,
  className,
}) => {
  return (
    <section className={`${style["mw-window-body"]} ${className}`}>
      <div className={style["mw-window-body__top-buttons-panel"]}>
        <div />
        <div className={style["icon-close-window"]} onClick={handleCloseWindow}>
          <CloseWindow />
        </div>
      </div>
      <div className={style["mw-window-body__children"]}>{children}</div>
    </section>
  );
};

export default MWWindowBody;
