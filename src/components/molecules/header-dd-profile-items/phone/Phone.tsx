import { FC } from "react";
import style from "./Phone.module.scss";
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";
import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import { PHONE_TEMPLATE } from "./phone.data";

interface PhoneProps {}

const Phone: FC = () => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle text={PHONE_TEMPLATE.phoneTitle}>
          <ProfileButton text={PHONE_TEMPLATE.buttonText} />
        </ProfileParagraphTitle>
        <p className={style["phone-placeholder"]}>
          {PHONE_TEMPLATE.placeholder}
        </p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default Phone;
