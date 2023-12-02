import { FC, ReactNode, memo } from "react";
import style from "./ProfileItem.module.scss";

interface ProfileItemProps {
  children?: ReactNode;
}

const ProfileItem: FC<ProfileItemProps> = memo(({ children }) => {
  return (
    <div className={style["profile-item"]}>
      <div className={style["profile-item__descr"]}>{children}</div>
    </div>
  );
});

export default ProfileItem;
