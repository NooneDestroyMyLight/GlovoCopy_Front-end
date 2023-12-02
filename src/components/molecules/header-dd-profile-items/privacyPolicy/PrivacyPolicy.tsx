import { FC } from "react";
import style from "./PrivacyPolicy.module.scss";
import { PRIVACY_POLICY_TEMPLATE } from "./privacyPolicy.data";
//
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
//
import ToggleSwitch from "../../../atoms/toggle-switch/ToggleSwitch";

interface PrivacyPolicyProps {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle
          text={PRIVACY_POLICY_TEMPLATE.privacyPolicyTitle}
        />
        <p
          className={`${style["privacyPolicy__sub-title"]} ${style["privacyPolicy__font"]}`}
        >
          {PRIVACY_POLICY_TEMPLATE.subTitle}
        </p>
        <p
          className={`${style["privacyPolicy__disclaimer"]} ${style["privacyPolicy__font"]}`}
        >
          {PRIVACY_POLICY_TEMPLATE.description}
        </p>
      </ProfileParagraph>
      <ProfileParagraph>
        <ProfileParagraphTitle>
          <div className={style["privacyPolicy__push-notifi"]}>
            <p className={style["privacyPolicy__push-notifi__title"]}>
              {PRIVACY_POLICY_TEMPLATE.pushMessageTitle}
            </p>
            <div className={style["privacyPolicy__push-notifi__toggle"]}>
              <ToggleSwitch />
            </div>
          </div>
        </ProfileParagraphTitle>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default PrivacyPolicy;
