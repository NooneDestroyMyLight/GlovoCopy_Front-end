import { FC } from "react";
import { IProduct } from "../../../types/IProduct";

export const STORE_BODY_TEMPLATE = {
  inputPlaceholder: "Шукати в ",
  searchResultTitle: "Результати пошуку",
  similarCategory: "Дивіться схожі заклади в цих категоріях:",
};

export interface ICatalogue {
  id: number;
  icon?: FC;
  title: string;
  link: string;

  productList: IProduct[];
}

export interface CatalogueIWithRef extends ICatalogue {
  ref: React.RefObject<HTMLElement>;
}

export const STORE_CATALOGUE_LIST_DATA: ICatalogue[] = [
  {
    id: 1,
    title: "Найпопулярніші",
    link: "",
    productList: [
      {
        id: 1,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
      },
      {
        id: 2,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
      },
      {
        id: 3,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
      },
    ],
  },
  {
    id: 2,
    title: "БУРГЕРИ",
    link: "",
    productList: [
      {
        id: 4,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
      {
        id: 5,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
      {
        id: 6,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
      {
        id: 7,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
      },
      {
        id: 8,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
      },
      {
        id: 9,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
    ],
  },
  {
    id: 3,
    title: "САЛАТИ",
    link: "",
    productList: [
      {
        id: 10,
        name: "Double (500/100/50g)1",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "20%",
        discountPrice: 279.2,
        customizations: [],
      },
      {
        id: 11,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
      {
        id: 12,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discount: "",
        customizations: [],
      },
      {
        id: 13,
        name: "Double (500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        imgBig:
          "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 37,
        discount: "",
        customizations: [],
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Какой-то текст",
  //   link: "",
  //   productList: [],
  // },
  // {
  //   id: 5,
  //   title: "Какой-то текст",
  //   link: "",
  //   productList: [],
  // },
  // {
  //   id: 6,
  //   title: "Какой-то текст",
  //   link: "",
  //   productList: [],
  // },
  // {
  //   id: 7,
  //   title: "Какой-то текст",
  //   link: "",
  //   productList: [],
  // },
  // {
  //   id: 8,
  //   title: "Какой-то текст",
  //   link: "",
  //   productList: [],
  // },
];

interface IStoreSearchResultResponse {
  searchingText: string;
  productList: IProduct[];
}

export const STORE_SEARCH_RESULT_RESPONSE_DATA: IStoreSearchResultResponse = {
  searchingText: "Піца",
  productList: [
    {
      id: 1,
      name: "Double (500/100/50g)",
      imgSmall:
        "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
      imgBig:
        "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
      descr:
        "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
      price: 349,
      discount: "",
    },
    {
      id: 2,
      name: "Double (500/100/50g)",
      imgSmall:
        "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
      imgBig:
        "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
      descr:
        "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
      price: 349,
      discount: "",
    },
    {
      id: 3,
      name: "Double (500/100/50g)",
      imgSmall:
        "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
      imgBig:
        "https://images.deliveryhero.io/image/menus-glovo/products/ef296b7922ae7b11082fe851aab92818d68ef4288404725d6c2bd12627bf1fce?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
      descr:
        "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
      price: 349,
      discount: "",
    },
  ],
};

interface IStoreCategory {
  link: string;
  text: string;
}

export const STORE_CATEGORY_DATA: IStoreCategory[] = [
  { link: "", text: "Международная" },
  { link: "", text: "Піца" },
  { link: "", text: "Бургер" },
];
