import { createSlice } from "@reduxjs/toolkit";
import { userInterface } from "@/types/types";

interface users {
  users: userInterface[];
}

const initialState: users = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
