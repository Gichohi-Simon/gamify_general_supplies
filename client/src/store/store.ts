import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/features/authSlice";
import cartSlice from "../store/features/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
