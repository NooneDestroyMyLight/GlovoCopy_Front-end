import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sliceReducer } from "./slices/сart.slice";

const reducers = combineReducers({
  cart: sliceReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
