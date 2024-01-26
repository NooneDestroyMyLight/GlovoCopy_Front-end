import { IProduct } from "./IProduct";

export interface ISearchingResult {
  input: string;
  productResultList: IProduct[];
}
