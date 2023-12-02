import { FC } from "react";
import style from "./Promocode.module.scss";
import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
import { PHONE_TEMPLATE } from "./promocode.data";

interface PromoCodeProps {}

const PromoCode: FC = () => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle text={PHONE_TEMPLATE.promocodeTitle}>
          <ProfileButton text={PHONE_TEMPLATE.buttonText} />
        </ProfileParagraphTitle>
        <p>{PHONE_TEMPLATE.promocodePlaceholder}</p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default PromoCode;
