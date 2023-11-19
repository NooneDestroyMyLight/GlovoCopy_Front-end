import { FC, ReactNode } from "react";
import style from "./MWTemplate.module.scss";

interface MWTemplateI {
  onIconClick?: () => void;
  children: ReactNode;
}

const MWTemplate: FC<MWTemplateI> = ({ onIconClick, children }) => {
  return (
    <ul className={style["mw-template__set-address"]}>
      <li className={style["close-icon__wrapper"]}>
        <i className={style["close-icon"]} onClick={onIconClick} />
      </li>
      {children}
    </ul>
  );
};
export default MWTemplate;
