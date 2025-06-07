import { createSlice } from "@reduxjs/toolkit";

interface userState {
    id?:number;
    email:string;
    password:string
}

interface tokenState {
    token:string;
}

const initialState = {
  userInfo:null as userState | null,
  token:null as tokenState | null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token
      if(typeof window !== "undefined"){
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      if(typeof window !== "undefined"){
        localStorage.clear();
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
