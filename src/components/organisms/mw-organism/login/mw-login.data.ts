import { FC } from "react";
import Google from "../../../../assets/icons/login/Google";
import Facebook from "../../../../assets/icons/login/Facebook";
import Email from "../../../../assets/icons/login/Email";

export interface SocialMediaI {
  label: string;
  Icon: FC;
}

export const LOGIN_SOCIAL_MEDIA: SocialMediaI[] = [
  {
    label: "Google",
    Icon: Google,
  },
  {
    label: "Facebook",
    Icon: Facebook,
  },
  {
    label: "Google",
    Icon: Email,
  },
];

export const MW_LOGIN_DATA = {
  title: "Ласкаво просимо",
  description: "Щоб продовжити, виберіть одну з опцій",
  socialMedia: LOGIN_SOCIAL_MEDIA,
  terms:
    "Створюючи обліковий запис, ви автоматично приймаєте наші Умови обслуговування, Політику конфіденційності і Політика використання файлів cookie",
};
