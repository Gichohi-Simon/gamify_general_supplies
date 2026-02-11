import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/types/types";

type setCredentialsPayload = {
  userInfo: AuthState["userInfo"];
};

const initialState: AuthState = {
  userInfo: null,
  initialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<setCredentialsPayload>) => {
      state.userInfo = action.payload.userInfo ?? null;
      state.initialized = true;
    },
    setLogout: (state) => {
      state.userInfo = null;
      state.initialized = true;
    },
  },
});

export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;
