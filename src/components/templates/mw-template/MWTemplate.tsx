import { FC, ReactNode } from "react";
import style from "./MWTemplate.module.scss";

interface MWTemplateI {
  onIconClick?: () => void;
  className: string;
  children: ReactNode;
}

const MWTemplate: FC<MWTemplateI> = ({ onIconClick, children, className }) => {
  console.log(className);
  return (
    <ul className={className}>
      {/* style["mw-template__set-address"]*/}
      <li className={style["close-icon__wrapper"]}>
        <i className={style["close-icon"]} onClick={onIconClick} />
      </li>
      {children}
    </ul>
  );
};
export default MWTemplate;
