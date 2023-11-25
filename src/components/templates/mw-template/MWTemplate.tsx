import { FC, ReactNode, memo } from "react";
import style from "./MWTemplate.module.scss";

interface MWTemplateI {
  onIconClick?: () => void;
  className: string;
  children: ReactNode;
  AdditionIcon?: React.FC | false;
}

const MWTemplate: FC<MWTemplateI> = memo(
  ({ onIconClick, className, children, AdditionIcon }) => {
    console.log("MWTemplate RERENDER");
    return (
      <ul className={className}>
        {/* style["mw-template__set-address"]*/}
        <li className={style["close-icon__wrapper"]}>
          {AdditionIcon ? <AdditionIcon /> : <div className="empty" />}
          <i className={style["close-icon"]} onClick={onIconClick} />
        </li>
        <li className={style["content"]}>{children}</li>
      </ul>
    );
  }
);
export default MWTemplate;
