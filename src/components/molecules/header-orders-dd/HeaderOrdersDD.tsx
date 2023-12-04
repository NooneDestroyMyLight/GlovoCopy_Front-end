import { FC, memo } from "react";
import style from "./HeaderOrdersDD.module.scss";
//
import Order from "../../../assets/icons/header-auth/Order";
//
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { Return } from "react-cool-onclickoutside";
import Orders from "../../organisms/orders/Orders";

interface HeaderOrdersDDProps {
  isOpen?: boolean;
  handleToggle: () => void;
  handleClickOutside: Return;
}

const HeaderOrdersDD: FC<HeaderOrdersDDProps> = memo(
  ({ isOpen: isDDOpen, handleToggle, handleClickOutside }) => {
    return (
      <div ref={handleClickOutside} className={style["header-user-orders"]}>
        <button onClick={handleToggle}>
          <Order />
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
