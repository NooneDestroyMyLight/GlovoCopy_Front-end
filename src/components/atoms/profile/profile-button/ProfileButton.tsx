import { FC, memo } from "react";
import style from "./ProfileButton.module.scss";

interface ProfileButtonProps {
  text: string;
}
const ProfileButton: FC<ProfileButtonProps> = memo(({ text }) => (
  <p className={style["profile__button"]}>{text}</p>
));

export default ProfileButton;
