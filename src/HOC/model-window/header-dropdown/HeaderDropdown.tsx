import { FC, ReactNode, memo } from "react";
import style from "./HeaderDropdown.module.scss";

interface HeaderDropdownProps {
  children: ReactNode;
}

const HeaderDropdown: FC<HeaderDropdownProps> = memo(({ children }) => {
  return (
    <div className={style["dropdown__wrapper"]}>
      <ul className={style["dropdown"]}>{children}</ul>
    </div>
  );
});
export default HeaderDropdown;
