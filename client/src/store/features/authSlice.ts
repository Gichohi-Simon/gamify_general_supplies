import { createSlice } from "@reduxjs/toolkit";
import { userState, userIdinterface } from "@/types/types";

const initialState = {
  userInfo: null as userState | null,
  userId: null as userIdinterface | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (action.payload.userInfo) {
        state.userInfo = action.payload.userInfo;
      }

      if (action.payload.userId) {
        state.userId = action.payload.userId;
      }
      
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
    },
    setLogout: (state) => {
      state.userInfo = null;
      state.userId = null;
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
    },
  },
});

export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;
