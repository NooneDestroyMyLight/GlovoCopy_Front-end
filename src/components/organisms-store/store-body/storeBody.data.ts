import { FC } from "react";
import { ProductI } from "../../../types/ProductI";

export const STORE_BODY_TEMPLATE = {
  inputPlaceholder: "Шукати в ",
};

export interface CatalogueI {
  icon?: FC;
  title: string;
  link: string;
  productList: ProductI[];
}

export interface CatalogueIWithRef extends CatalogueI {
  ref: React.RefObject<HTMLElement>;
}

export const STORE_CATALOGUE_LIST_DATA: CatalogueI[] = [
  {
    title: "Найпопулярніші",
    link: "",
    productList: [
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
    ],
  },
  {
    title: "БУРГЕРИ",
    link: "",
    productList: [
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
    ],
  },
  {
    title: "САЛАТИ",
    link: "",
    productList: [
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
      {
        name: "Double(500/100/50g)",
        imgSmall:
          "https://images.deliveryhero.io/image/menus-glovo/products/da9f1c5b85149733288f0829f1e1956eb70b152ad06dde256bcf9b097047e250?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
        img: "",
        descr:
          "булка бріошь, соус журавлиний, соус часниковий, мiкс салата, подвійна котлета з яловичини, сир чеддер, бекон, томати, солоний огірок, цибуля",
        price: 349,
        discont: "",
      },
    ],
  },
];
