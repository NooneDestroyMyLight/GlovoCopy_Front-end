export const utilsFormatedPrice = (number: number): string => {
  return new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 2,
  }).format(number);
};
