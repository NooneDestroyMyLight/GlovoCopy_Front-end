import { FC, ReactNode, memo } from "react";
import style from "./ProfileParagraphTitle.module.scss";

interface ProfileParagraphProps {
  children?: ReactNode;
  text?: string;
}

const ProfileParagraphTitle: FC<ProfileParagraphProps> = memo(
  ({ text, children }) => {
    return (
      <p className={style["profile-paragraph__title"]}>
        {text}
        {children}
      </p>
    );
  }
);

export default ProfileParagraphTitle;
