import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/features/authSlice";
import userReducer from '../store/features/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users:userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
