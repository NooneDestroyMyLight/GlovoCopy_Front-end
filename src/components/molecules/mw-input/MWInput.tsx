import { FC, ReactNode, memo } from "react";
import style from "./MWInput.module.scss";
//

interface MWInputI {
  icon?: ReactNode;
}

const MWInput: FC<MWInputI> = memo(({ icon }) => {
  return (
    <div className={style["mw-input__wrapper"]}>
      <input type="text" />
    </div>
  );
});

export default MWInput;
