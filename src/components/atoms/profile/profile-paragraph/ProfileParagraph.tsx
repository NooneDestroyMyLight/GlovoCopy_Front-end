import { FC, ReactNode, memo } from "react";
import style from "./ProfileParagraph.module.scss";

interface ProfileParagraphProps {
  children: ReactNode;
}

const ProfileParagraph: FC<ProfileParagraphProps> = memo(({ children }) => {
  return <div className={style["profile-paragraph"]}>{children}</div>;
});

export default ProfileParagraph;
