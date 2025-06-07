import { createSlice } from "@reduxjs/toolkit";
import { postsInterface } from "@/types/types";

interface AllProducts {
  products: postsInterface[];
}

const initialState: AllProducts = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
