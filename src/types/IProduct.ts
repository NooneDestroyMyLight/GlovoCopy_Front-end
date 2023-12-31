export interface ICustomizationItem {
  id: number;
  name: string;
  price: number;
}

export interface IProduct {
  id: number;
  name: string;
  imgSmall: string;
  imgBig: string;
  descr: string;
  price: number;
  discount: string;
  discountPrice?: number;
  customizations?: ICustomizationItem[];
}
