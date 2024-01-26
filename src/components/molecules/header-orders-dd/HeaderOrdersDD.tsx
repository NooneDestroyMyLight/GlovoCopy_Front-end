import { FC, memo } from "react";
import style from "./HeaderOrdersDD.module.scss";
//
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { Return } from "react-cool-onclickoutside";
import Orders from "../../organisms/orders/Orders";

interface HeaderOrdersDDProps {
  Icon: FC;
  isOpen?: boolean;
  handleToggle: () => void;
  handleClickOutside: Return;
}

const HeaderOrdersDD: FC<HeaderOrdersDDProps> = memo(
  ({ isOpen: isDDOpen, handleToggle, handleClickOutside, Icon }) => {
    return (
      <div ref={handleClickOutside} className={style["header-user-orders"]}>
        <button
          onClick={handleToggle}
          className={style["header-user-orders__button"]}
        >
          <Icon />
        </button>
        {isDDOpen && (
          <HeaderDropdown>
            <Orders />
          </HeaderDropdown>
        )}
      </div>
    );
  }
);
export default HeaderOrdersDD;
