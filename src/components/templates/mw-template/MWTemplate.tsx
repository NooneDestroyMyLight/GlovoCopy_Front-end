import { FC, ReactNode, memo } from "react";
import style from "./MWTemplate.module.scss";
import Button from "../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import CloseWindow from "../../../assets/icons/close-window/CloseWindow";

interface MWTemplateI {
  // className: string;
  children: ReactNode;
  //
  AdditionIcon?: React.FC | false;
  onIconClick?: () => void;
  //
  h2Text?: string;
  buttonText?: string;
  isButtonValid?: boolean;
}

const MWTemplate: FC<MWTemplateI> = memo(
  ({
    // className,
    children,
    //
    AdditionIcon,
    onIconClick,
    //button and h2
    h2Text,
    buttonText,
    isButtonValid,
  }) => {
    console.log("MWTemplate RERENDER");
    return (
      <ul className={style["mw-template__set-address"]}>
        {/* style["mw-template__set-address"]*/}
        <li className={style["close-icon__wrapper"]}>
          {AdditionIcon ? <AdditionIcon /> : <div className="empty" />}
          {/* <i className={style["close-icon"]} onClick={onIconClick} /> */}
          <div onClick={onIconClick}>
            <CloseWindow />
          </div>
        </li>
        <li className={style["content"]}>
          {h2Text && <h2 className={style["mw-location-title"]}>{h2Text}</h2>}
          {children}
          {buttonText && (
            <div className={style["button"]}>
              <Button
                className={STYLE_MW_LOCATION_BUTTON}
                text={buttonText}
                type="submit"
                //
                isDisabled={isButtonValid}
              />
            </div>
          )}
        </li>
      </ul>
    );
  }
);
export default MWTemplate;
