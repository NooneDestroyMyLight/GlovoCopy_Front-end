import { FC, memo } from "react";
import style from "./ProfileInfo.module.scss";
//
import Password from "../../molecules/header-dd-profile-items/password/Password";
import PaymentMethod from "../../molecules/header-dd-profile-items/paymant-method/PaymentMethod";
import Phone from "../../molecules/header-dd-profile-items/phone/Phone";
import PrivacyPolicy from "../../molecules/header-dd-profile-items/privacyPolicy/PrivacyPolicy";
import PromoCode from "../../molecules/header-dd-profile-items/promocode/Promocode";
import UserInfo from "../../molecules/header-dd-profile-items/user-info/UserInfo";
//
import ProfileButton from "../../atoms/profile/profile-button/ProfileButton";
import ProfileItem from "../../atoms/profile/profile-item/ProfileItem";
import { PROFILE_INFO_TEMPLATE } from "./profileInfo.data";

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = memo(({}) => {
  return (
    <>
      <div className={style["profile-title"]}>
        <p className={style["profile-title__text"]}>
          {PROFILE_INFO_TEMPLATE.title}
        </p>
      </div>
      <UserInfo />
      <Phone />
      <Password />
      <PaymentMethod />
      <PrivacyPolicy />
      <PromoCode />
      <ProfileItem>
        <div className={style["profile__button"]}>
          <ProfileButton text={PROFILE_INFO_TEMPLATE.exit} />
        </div>
      </ProfileItem>
    </>
  );
});

export default ProfileInfo;
