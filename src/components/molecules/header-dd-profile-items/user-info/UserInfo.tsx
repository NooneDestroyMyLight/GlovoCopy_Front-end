import { FC } from "react";
import style from "./UserInfo.module.scss";
//
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
import { USER_INFO_DATA, TEMPLATE_USER_INFO } from "./userInfo.data";
import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";

const { text_button, text_email, text_name } = TEMPLATE_USER_INFO;

interface UserInfoProps {
  onButtonClick?: () => void;
}

const UserInfo: FC<UserInfoProps> = ({ onButtonClick }) => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle text={text_name}>
          <ProfileButton text={text_button} onButtonClick={onButtonClick} />
        </ProfileParagraphTitle>
        <p>{USER_INFO_DATA.name}</p>
      </ProfileParagraph>
      <ProfileParagraph>
        <ProfileParagraphTitle text={text_email} />
        <p>{USER_INFO_DATA.email}</p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default UserInfo;
