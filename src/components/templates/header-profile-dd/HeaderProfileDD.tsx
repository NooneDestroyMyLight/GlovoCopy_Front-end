import { FC, memo } from "react";
import style from "./HeaderProfileDD.module.scss";
//Icon
import Profile from "../../../assets/icons/header-auth/profile--desktop/Profile";
//
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { Return } from "react-cool-onclickoutside";
import ProfileInfo from "../../organisms/profile-info/ProfileInfo";
//

interface HeaderProfileDDProps {
  Icon: FC;
  isOpen?: boolean;
  handleToggle: () => void;
  handleClickOutside: Return;
}

const HeaderProfileDD: FC<HeaderProfileDDProps> = memo(
  ({ isOpen, handleToggle, handleClickOutside, Icon }) => {
    return (
      <div ref={handleClickOutside} className={style["header-profile"]}>
        <button
          onClick={handleToggle}
          className={style["header-profile__icon"]}
        >
          <Icon />
        </button>
        {isOpen && (
          <HeaderDropdown>
            <ProfileInfo />
          </HeaderDropdown>
        )}
      </div>
    );
  }
);

export default HeaderProfileDD;
