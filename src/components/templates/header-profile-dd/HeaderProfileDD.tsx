import { FC, memo } from "react";
import style from "./HeaderProfileDD.module.scss";
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import { Return } from "react-cool-onclickoutside";
import ProfileInfo from "../../organisms/profile-info/ProfileInfo";
import { useToggle } from "../../../hooks/useToggle";
import MWUserInfoEdit from "../../organisms/mw-user-info-edit/MWUserInfoEdit";
import MWUserPasswordEdit from "../../organisms/mw-user-password-edit/MWUserPasswordEdit";
import { useExclusiveMWToggle } from "../../../hooks/useExclusiveMWToggle";
import MWUserPhoneEdit from "../../organisms/mw-user-phone-edit/MWUserPhoneEdit";
//

interface HeaderProfileDDProps {
  Icon: FC;
  isOpen?: boolean;
  handleToggle: () => void;
  handleClickOutside: Return;
}

const MW_NAMES: string[] = [
  "mw-user-info-edit",
  "mw-user-phone-edit",
  "mw-user-password-edit",
];

const HeaderProfileDD: FC<HeaderProfileDDProps> = memo(
  ({ isOpen, handleToggle, handleClickOutside, Icon }) => {
    const [isMWOpen, currentMW, closeMW, funArray] =
      useExclusiveMWToggle(MW_NAMES);
    // console.log(funArray);

    const funArrayModify = funArray.map((item) => {
      return () => {
        handleToggle();
        item();
      };
    });

    console.log(currentMW);

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
            <ProfileInfo onClicksArrayFun={funArrayModify} />
          </HeaderDropdown>
        )}
        {currentMW === MW_NAMES[0] && (
          <MWUserInfoEdit isMwOpen={isMWOpen} mwToggle={closeMW} />
        )}
        {currentMW === MW_NAMES[1] && (
          <MWUserPhoneEdit isMwOpen={isMWOpen} mwToggle={closeMW} />
        )}
        {currentMW === MW_NAMES[2] && (
          <MWUserPasswordEdit isMwOpen={isMWOpen} mwToggle={closeMW} />
        )}
      </div>
    );
  }
);

export default HeaderProfileDD;
