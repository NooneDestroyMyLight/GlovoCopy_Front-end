import { FC } from "react";

import style from "./Password.module.scss";

import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
import { PASSWORD_DATA, PASSWORD_TEMPLATE } from "./password.data";

interface PasswordProps {
  onButtonClick?: () => void;
}

const Password: FC<PasswordProps> = ({ onButtonClick }) => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle text={PASSWORD_TEMPLATE.passwordTitle}>
          <ProfileButton
            onButtonClick={onButtonClick}
            text={PASSWORD_TEMPLATE.buttonText}
          />
        </ProfileParagraphTitle>
        <p>{PASSWORD_DATA.password}</p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default Password;
