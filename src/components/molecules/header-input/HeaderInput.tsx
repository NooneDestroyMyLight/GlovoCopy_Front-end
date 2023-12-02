import { FC, memo } from "react";
import style from "./HeaderInput.module.scss";
//
import cn from "classnames";
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
import { HEADER_TEMPLATE } from "../../templates/header/header.data";
//

interface HeaderInputI {}

const HeaderInput: FC<HeaderInputI> = memo(({}) => {
  console.log("HeaderInput RERENDER");
  return (
    <form className={style.headerInput}>
      <input
        type="text"
        placeholder=""
        className={`${style.headerInput__input}`}
      />
      <li className={style.headerInput__placeholder}>
        <InputHolder />
        <span className={style.text}>{HEADER_TEMPLATE.inputPlaceholder}</span>
      </li>
    </form>
  );
});

export default HeaderInput;
