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
import { TEMPLATE_PROFILE_INFO } from "./profileInfo.data";

const { text_exit_UA, text_title_UA } = TEMPLATE_PROFILE_INFO;

interface ProfileInfoProps {
  onClicksArrayFun: (() => void)[];
}

const ProfileInfo: FC<ProfileInfoProps> = memo(({ onClicksArrayFun }) => {
  return (
    <>
      <div className={style["profile-title"]}>
        <p className={style["profile-title__text"]}>{text_title_UA}</p>
      </div>
      <UserInfo onButtonClick={onClicksArrayFun[0]} />
      <Phone onButtonClick={onClicksArrayFun[1]} />
      <Password onButtonClick={onClicksArrayFun[2]} />
      <PaymentMethod />
      <PrivacyPolicy />
      <PromoCode />
      <ProfileItem>
        <div className={style["profile__button"]}>
          <ProfileButton text={text_exit_UA} />
        </div>
      </ProfileItem>
    </>
  );
});

export default ProfileInfo;
