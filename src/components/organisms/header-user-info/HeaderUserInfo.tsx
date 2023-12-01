import { FC, ReactNode, memo } from "react";
import style from "./HeaderUserInfo.module.scss";
import { HEADER_USER_ORDERS_TEMPLATE } from "./HeaderUserInfo.data";
//Icon
import Profile from "../../../assets/icons/header-auth/Profile";
import CreditCard from "../../../assets/icons/header-auth/CreditCard";
import CreditCardArrow from "../../../assets/icons/header-auth/credit-card__arrow/CreditCardArrow";
//
import ToggleSwitch from "../../atoms/toggle-switch/ToggleSwitch";
import HeaderDropdown from "../../../HOC/model-window/header-dropdown/HeaderDropdown";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";

interface ProfileDropdownItem {
  children?: ReactNode;
}

const ProfileDropdownItem: FC<ProfileDropdownItem> = memo(({ children }) => {
  return (
    <li className={style["profile__el"]}>
      <div className={style["profile__el__descr"]}>{children}</div>
    </li>
  );
});

interface HeaderUserInfoProps {
  isOpen?: boolean;
  handleToggle: () => void;
  ref: Return;
}

const HeaderUserInfo: FC<HeaderUserInfoProps> = memo(
  ({ isOpen, handleToggle, ref }) => {
    return (
      <div ref={ref} className={style["header-user-info"]}>
        <div onClick={handleToggle} className={style["header-user-info__icon"]}>
          <Profile />
        </div>
        {isOpen && (
          <HeaderDropdown>
            <div className={style["profile-header"]}>
              <p className={style["profile-header__title"]}>
                {HEADER_USER_ORDERS_TEMPLATE.title}
              </p>
            </div>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[0].name}
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.info[0].button}
                  </button>
                </p>
                <p>USERNAME</p>
              </div>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[0].email}
                </p>
                <p>USERNAME_Email</p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[1].phone}
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.info[0].button}
                  </button>
                </p>
                <p className={style["placeholder"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[1].placeholder}
                </p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[2].password}
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.info[0].button}
                  </button>
                </p>
                <p>**********</p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[3].paymentMethod}
                </p>
                <button
                  className={`${style["payment-options"]} ${style["profile__el__descr__item__divide"]}`}
                >
                  <CreditCard />
                  <span>{HEADER_USER_ORDERS_TEMPLATE.info[3].buttonText}</span>
                  <CreditCardArrow />
                </button>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[3].infoAboutComp}
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.info[3].button}
                  </button>
                </p>
                <p>-</p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[5].promocode}
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.info[5].button}
                  </button>
                </p>
                <p>-</p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  {HEADER_USER_ORDERS_TEMPLATE.info[4].title}
                </p>
                <p
                  className={`${style["marketing__sub-title"]} ${style["marketing__font"]}`}
                >
                  {HEADER_USER_ORDERS_TEMPLATE.info[4].subTitle}
                </p>
                <p
                  className={`${style["marketing__disclaimer"]} ${style["marketing__font"]}`}
                >
                  {HEADER_USER_ORDERS_TEMPLATE.info[4].descr}
                </p>
                <p className={style["field-title"]}>
                  <div className={style["marketing__push-notifi"]}>
                    <p className={style["marketing__push-notifi__text"]}>
                      {HEADER_USER_ORDERS_TEMPLATE.info[4].pushTitle}
                    </p>
                    <div className={style["marketing__push-notifi__toggle"]}>
                      <ToggleSwitch />
                    </div>
                  </div>
                </p>
              </div>
            </ProfileDropdownItem>
            <ProfileDropdownItem>
              <div className={style["profile__el__descr__item"]}>
                <p className={style["field-title"]}>
                  <button className={style["profile__el__button"]}>
                    {HEADER_USER_ORDERS_TEMPLATE.exit}
                  </button>
                </p>
              </div>
            </ProfileDropdownItem>
          </HeaderDropdown>
        )}
      </div>
    );
  }
);

export default HeaderUserInfo;
function clearSuggestions() {
  throw new Error("Function not implemented.");
}
