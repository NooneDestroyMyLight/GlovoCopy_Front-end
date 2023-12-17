import { FC, ReactNode } from "react";
import style from "./MWWindowBody.module.scss";
//
import CloseWindow from "../../../assets/icons/close-window/CloseWindow";

interface MWWindowBodyProps {
  children: ReactNode;
  handleCloseWindow: () => void;
}

const MWWindowBody: FC<MWWindowBodyProps> = ({
  children,
  handleCloseWindow,
}) => {
  return (
    <section className={style["mw-window-body"]}>
      <div className={style["mw-window-body__top-buttons-panel"]}>
        <div />
        <div onClick={handleCloseWindow}>
          <CloseWindow />
        </div>
      </div>
      <div className={style["mw-window-body__children"]}>{children}</div>
    </section>
  );
};

export default MWWindowBody;
