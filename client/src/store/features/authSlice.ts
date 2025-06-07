import { createSlice } from "@reduxjs/toolkit";
import { userState, tokenState } from "@/types/types";

const initialState = {
  userInfo: null as userState | null,
  token: null as tokenState | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
    },
    setLogout: (state) => {
      state.userInfo = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
    },
  },
});

export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;
