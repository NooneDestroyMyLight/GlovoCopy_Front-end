import { ICustomizationItem } from "../../../types/IProduct";

export interface IStoreCustomProductCategory {
  id: number;
  title: string;
  customizationsList: ICustomizationItem[];
  maxCustomizations: number;
}

export const Store_Custom_Product_Category_TEMPLATE = {
  subTitle: "Максимальна кількість опцій: ",
};
