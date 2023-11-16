import { FC, memo } from "react";
import style from "./HeaderInput.module.scss";
//
import cn from "classnames";
import InputHolder from "../../../assets/icons/input-holder/InputHolder";
//

interface HeaderInputI {}

const HEADER_INPUT_PLACEHOLDER = "Search";

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
        <span className={style.text}>{HEADER_INPUT_PLACEHOLDER}</span>
      </li>
    </form>
  );
});

export default HeaderInput;
