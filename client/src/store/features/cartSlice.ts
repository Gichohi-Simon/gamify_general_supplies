import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItemInput } from "@/types/types";

interface cartState {
  items: OrderItemInput[];
}

const loadCartFromStorage = ():OrderItemInput[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: OrderItemInput[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState:cartState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<OrderItemInput>) => {
      const { productId, quantity = 1 } = action.payload;

      const existingItem = state.items.find(
        (item: OrderItemInput) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
        const productId = action.payload;

        state.items = state.items.filter((item) => item.productId !== productId);

        saveCartToStorage(state.items);
    },
    increaseQuantity: (state, action:PayloadAction<number>) => {
        const productId = action.payload;

        const item = state.items.find((i) => i.productId === productId);

        if(item) item.quantity += 1;

        saveCartToStorage(state.items);
    },
    decreaseQuantity:(state, action:PayloadAction<number>) => {
        const productId = action.payload;
        
        const item = state.items.find((i) => i.productId === productId);

        if(item && item.quantity > 1){
            item.quantity -= 1
        }else{
            state.items = state.items.filter((i) => i.productId !== productId)
        }

        saveCartToStorage(state.items);
    },
    clearCart:(state) => {
        state.items = [];
        saveCartToStorage([]);
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
