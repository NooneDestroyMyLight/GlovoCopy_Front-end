import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../types/IProductCart";

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
      if (cart.some(({ id }) => id === product.id)) {
        cart.map((cartItem) => {
          cartItem.id === product.id && (cartItem.count += product.count);
        });
      } else cart.push(product);
    },
    increase: ({ cart }, { payload: id }: PayloadAction<number>) => {
      cart.map((cartItem) => cartItem.id === id && cartItem.count++);
    },
    decrease: (
      state,
      { payload: { id, count } }: PayloadAction<{ id: number; count: number }>
    ) => {
      if (count === 1) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
      } else
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id === id) cartItem.count--;

          return cartItem;
        });
    },
  },
});

export const { actions: cartActions, reducer: sliceReducer } = cartSlice;
