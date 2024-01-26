import { FC, memo } from "react";
import style from "./ProfileButton.module.scss";

interface ProfileButtonProps {
  text: string;
  onButtonClick?: () => void;
}
const ProfileButton: FC<ProfileButtonProps> = memo(
  ({ text, onButtonClick }) => {
    return (
      <button onClick={onButtonClick} className={style["profile__button"]}>
        {text}
      </button>
    );
  }
);

export default ProfileButton;
