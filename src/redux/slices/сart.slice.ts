import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../types/IProductCart";

function isProductEquals(
  cartItem: ICartProduct,
  product: ICartProduct
): boolean | undefined {
  return (
    cartItem.id === product.id &&
    cartItem.customizations?.every((customItem) =>
      product.customizations?.some((inner) => inner.id === customItem.id)
    ) &&
    cartItem.customizations.length === product.customizations?.length
  );
}

export interface ICartState {
  cart: ICartProduct[];
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      { cart },
      { payload: product }: PayloadAction<ICartProduct>
    ) => {
      if (cart.some(({ id }) => id === product.id) && !product.customizations) {
        cart.map((cartItem) => {
          cartItem.id === product.id && (cartItem.count += product.count);
        });
        return;
      }

      if (
        product.customizations &&
        cart.some((cartItem) => isProductEquals(cartItem, product))
      ) {
        cart.map((cartItem) => {
          cartItem.id === product.id && (cartItem.count += product.count);
        });
        return;
      }
      cart.push(product);
    },
    //
    increase: ({ cart }, { payload: product }: PayloadAction<ICartProduct>) => {
      const { id } = product;
      cart.map((cartItem) => {
        if (cartItem.id === id && isProductEquals(cartItem, product))
          cartItem.count++;
        if (
          cartItem.id === id &&
          !!!cartItem.customizations &&
          !!!product.customizations
        )
          cartItem.count++;
        return cartItem;
      });
    },
    //first fix that, second fix increase
    decrease: (state, { payload: product }: PayloadAction<ICartProduct>) => {
      const { count, id } = product;

      if (count === 1) {
        state.cart = state.cart.filter((cartItem) => {
          if (cartItem.id === id) {
            if (!!!cartItem.customizations && !!!product.customizations) return;
            if (isProductEquals(cartItem, product)) return;
            return cartItem;
          }
          return cartItem;
        });
      } else
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id === id && isProductEquals(cartItem, product))
            cartItem.count--;
          if (
            cartItem.id === id &&
            !!!cartItem.customizations &&
            !!!product.customizations
          )
            cartItem.count--;
          return cartItem;
        });
    },
    //
    editCartItem: (
      state,
      {
        payload: product,
      }: PayloadAction<{
        editedProduct: ICartProduct;
        initialProduct: ICartProduct;
      }>
    ) => {
      const { editedProduct, initialProduct } = product;
      console.log(product);
      if (
        state.cart.some((cartItem) => isProductEquals(cartItem, editedProduct))
      ) {
        state.cart = state.cart
          .map((cartItem) =>
            isProductEquals(cartItem, editedProduct)
              ? ((cartItem.count += editedProduct.count), cartItem)
              : cartItem
          )
          .filter((cartItem) => {
            if (isProductEquals(cartItem, initialProduct)) return;
            return cartItem;
          });
      } else {
        state.cart = state.cart.map((cartItem) => {
          if (
            cartItem.id === initialProduct.id &&
            isProductEquals(cartItem, initialProduct)
          )
            cartItem = editedProduct;
          return cartItem;
        });
      }
    },
  },
});

export const { actions: cartActions, reducer: sliceReducer } = cartSlice;
