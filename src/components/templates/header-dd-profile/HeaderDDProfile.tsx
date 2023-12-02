import { FC, memo } from "react";
import style from "./HeaderDDProfile.module.scss";
//Icon
import Profile from "../../../assets/icons/header-auth/Profile";
//
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { Return } from "react-cool-onclickoutside";
import ProfileInfo from "../../organisms/profile-info/ProfileInfo";
//

interface HeaderDDProfileProps {
  isOpen?: boolean;
  handleToggle: () => void;
  handleClickOutside: Return;
}

const HeaderDDProfile: FC<HeaderDDProfileProps> = memo(
  ({ isOpen, handleToggle, handleClickOutside }) => {
    return (
      <div ref={handleClickOutside} className={style["header-profile"]}>
        <div onClick={handleToggle} className={style["header-profile__icon"]}>
          <Profile />
        </div>
        {isOpen && (
          <HeaderDropdown>
            <ProfileInfo />
          </HeaderDropdown>
        )}
      </div>
    );
  }
);

export default HeaderDDProfile;
