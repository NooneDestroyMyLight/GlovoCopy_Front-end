import { FC } from "react";
import style from "./UserInfo.module.scss";
//
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
import { USER_INFO_DATA, USER_INFO_TEMPLATE } from "./userInfo.data";
import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";

interface UserInfoProps {}

const UserInfo: FC<UserInfoProps> = () => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle text={USER_INFO_TEMPLATE.name}>
          <ProfileButton text={USER_INFO_TEMPLATE.buttonText} />
        </ProfileParagraphTitle>
        <p>{USER_INFO_DATA.name}</p>
      </ProfileParagraph>
      <ProfileParagraph>
        <ProfileParagraphTitle text={USER_INFO_TEMPLATE.email} />
        <p>{USER_INFO_DATA.email}</p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default UserInfo;
