import { FC, memo } from "react";
import style from "./HeaderUserOrders.module.scss";
import Order from "../../../assets/icons/header-auth/Order";
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { HEADER_USER_ORDERS_TEMPLATE } from "./HeaderUserOrders.data";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";

interface HeaderUserOrdersProps {
  isOpen?: boolean;
  handleToggle: () => void;
  ref: Return;
}

const HeaderUserOrders: FC<HeaderUserOrdersProps> = memo(
  ({ isOpen: isDDOpen, handleToggle, ref }) => {
    return (
      <div ref={ref} className={style["header-user-orders"]}>
        <button onClick={handleToggle}>
          <Order />
        </button>
        {isDDOpen && (
          <HeaderDropdown>
            <p
              className={`${style["header-user-orders__dropdown-title"]} ${style["font"]}`}
            >
              {HEADER_USER_ORDERS_TEMPLATE.title}
            </p>
            <div
              className={style["header-user-orders__dropdown__content--empty"]}
            >
              <p>{HEADER_USER_ORDERS_TEMPLATE.empty}</p>
              <p>{HEADER_USER_ORDERS_TEMPLATE.descr}</p>
            </div>
          </HeaderDropdown>
        )}
      </div>
    );
  }
);
export default HeaderUserOrders;
