import { funIsString } from "./funIsString";

export interface ITextIncertType {
  component: JSX.Element;
  order: number;
}

export const DEFAULT_LABEL = "$#%№_";

const getOrderFromStr = (str: string): string =>
  str.split("_")[1].replace(/\D/g, "");

const findByOrder = (
  arr: ITextIncertType[],
  founedOrder: number
): ITextIncertType => arr.filter((item) => item.order === founedOrder)[0];

export const funTextIncert = (
  str: string,
  ArrProp: ITextIncertType[],
  label?: string
) => {
  const ACTUAL_LABEL = label ? label : DEFAULT_LABEL;

  const formattedStr: (string | ITextIncertType)[] = str
    .split(" ")
    .map((strItem) =>
      strItem.includes(ACTUAL_LABEL)
        ? findByOrder(ArrProp, +getOrderFromStr(strItem))
        : strItem
    );

  return (
    formattedStr.map((item) =>
      funIsString(item) ? item : (item as ITextIncertType).component
    ) as (string | JSX.Element)[]
  ).map((item, index) => {
    if (funIsString(item)) {
      if (index === formattedStr.length - 1) return item;
      if (index !== 0 && !funIsString(formattedStr[index - 1]))
        return ` ${item} `;
      return item + " ";
    }
    return item;
  });
};
