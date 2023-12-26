import { IStoreCustomProductCategory } from "../../molecules-store/store-custom-product-category/storeCustomProductCategory.data";

interface IStoreCustomProductListData {
  StoreCustomProductList: IStoreCustomProductCategory[];
}

export const STORE_CUSTOM_LIST_DATA: IStoreCustomProductListData = {
  StoreCustomProductList: [
    {
      id: 1,
      title: "Бажаєте додати Coca-Cola?",
      customizationsList: [
        { id: 1, name: "Сирний бортик (NEW)", price: 49 },
        { id: 2, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 3, name: "Сирний бортик (NEW)", price: 49 },
        { id: 4, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 5, name: "Сирний бортик (NEW)", price: 49 },
        { id: 6, name: "Сирний бортик (NEW)", price: 49 },
      ],
      maxCustomizations: 3,
    },
    {
      id: 2,
      title: "Бажаєте додати Coca-Cola?",
      customizationsList: [
        { id: 7, name: "Сирний бортик (NEW)", price: 49 },
        { id: 8, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 9, name: "Сирний бортик (NEW)", price: 49 },
        { id: 10, name: "Сирний бортик (NEW)", price: 49 },
      ],
      maxCustomizations: 4,
    },
    {
      id: 3,
      title: "Бажаєте додати Coca-Cola?",
      customizationsList: [
        { id: 11, name: "Сирний бортик (NEW)", price: 49 },
        { id: 12, name: "Сирний бортик (NEW)", price: 49 },
        //

        { id: 13, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 14, name: "Сирний бортик (NEW)", price: 49 },
        { id: 15, name: "Сирний бортик (NEW)", price: 49 },
      ],
      maxCustomizations: 2,
    },
    {
      id: 4,
      title: "Бажаєте додати Coca-Cola?",
      customizationsList: [
        { id: 16, name: "Сирний бортик (NEW)", price: 49 },
        { id: 17, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 18, name: "Сирний бортик (NEW)", price: 49 },
        { id: 19, name: "Сирний бортик (NEW)", price: 49 },
        //
        { id: 20, name: "Сирний бортик (NEW)", price: 49 },
        { id: 21, name: "Сирний бортик (NEW)", price: 49 },
      ],
      maxCustomizations: 1,
    },
  ],
};
