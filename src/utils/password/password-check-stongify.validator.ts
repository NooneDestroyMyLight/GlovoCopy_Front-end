import { TEMPLATE_MESSAGE_STRONGIFY_USER_PASSWORD_UA } from "../../components/organisms/mw-user-password-edit/mw-user-password-edit.data";
import { passwordStrength } from "check-password-strength";

const validateScore = (score: number, length: number) => {
  if (score > length - 1) return length - 1;
  return score;
};

const { very_low, medium, good, very_good } =
  TEMPLATE_MESSAGE_STRONGIFY_USER_PASSWORD_UA;

const passwordCustomOptions = [
  {
    id: 0,
    value: very_low,
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: medium,
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 2,
    value: good,
    minDiversity: 4,
    minLength: 8,
  },
  {
    id: 3,
    value: very_good,
    minDiversity: 4,
    minLength: 10,
  },
];

export const utilPasswordCheckStrogify = (password: string | undefined) => {
  // if (password) {
  //   const result = passwordStrength(password, passwordCustomOptions).value;
  //   console.log(result);
  //   return result;
  // }

  if (!password) return;
  const message = Object.values(TEMPLATE_MESSAGE_STRONGIFY_USER_PASSWORD_UA);
  let score: number = 0;
  if (password.length < 9) return message[score];
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) score++;
  if (password.match(/\d+/)) score++;
  if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) score++;
  if (password.length > 12) score++;
  return message[validateScore(score, message.length)];
};
