import { FC } from "react";
import style from "./PaymentMethod.module.scss";
import ProfileButton from "../../../atoms/profile/profile-button/ProfileButton";
import ProfileItem from "../../../atoms/profile/profile-item/ProfileItem";
import ProfileParagraphTitle from "../../../atoms/profile/profile-paragraph-title/ProfileParagraphTitle";
import ProfileParagraph from "../../../atoms/profile/profile-paragraph/ProfileParagraph";
//
import { PAYMENT_METHOD_TEMPLATE } from "./paymentMethod.data";
import CreditCard from "../../../../assets/icons/header-auth/CreditCard";
import CreditCardArrow from "../../../../assets/icons/header-auth/credit-card__arrow/CreditCardArrow";

interface PaymentMethodProps {}

const PaymentMethod: FC<PaymentMethodProps> = () => {
  return (
    <ProfileItem>
      <ProfileParagraph>
        <ProfileParagraphTitle
          text={PAYMENT_METHOD_TEMPLATE.paymentTitle}
        ></ProfileParagraphTitle>
        <button
          className={`${style["payment-options"]} ${style["payment-options_divide"]}`}
        >
          <CreditCard />
          <span>{PAYMENT_METHOD_TEMPLATE.addCard}</span>
          <CreditCardArrow />
        </button>
      </ProfileParagraph>
      <ProfileParagraph>
        <ProfileParagraphTitle text={PAYMENT_METHOD_TEMPLATE.componyTitle}>
          <ProfileButton text={PAYMENT_METHOD_TEMPLATE.buttonText} />
        </ProfileParagraphTitle>
        <p>{PAYMENT_METHOD_TEMPLATE.componyPlaceholder}</p>
      </ProfileParagraph>
    </ProfileItem>
  );
};
export default PaymentMethod;
