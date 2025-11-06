import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItemInput } from "@/types/types";

interface cartState {
  items: OrderItemInput[];
  userId?:string | null;
}

const loadCartFromStorage = (userId?:string | null):OrderItemInput[] => {
  try {
    if(!userId) return [];
    const data = localStorage.getItem(`cart_${userId}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (userId:string | null | undefined, items: OrderItemInput[]) => {
  if(!userId) return;
  localStorage.setItem(`cart_${userId}`, JSON.stringify(items));
};

const initialState:cartState = {
  items: [],
  userId:null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartUser:(state, action:PayloadAction<string | null>) => {
      state.userId = action.payload;
      state.items = loadCartFromStorage(action.payload);
    },
    addToCart: (state, action: PayloadAction<OrderItemInput>) => {
      const { productId, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        (item: OrderItemInput) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      
      saveCartToStorage(state.userId, state.items);
    },
    removeFromCart: (state, action:PayloadAction<string>) => {
        const productId = action.payload;

        state.items = state.items.filter((item) => item.productId !== productId);

        saveCartToStorage(state.userId,state.items);
    },
    clearCart:(state) => {
        state.items = [];
        saveCartToStorage(state.userId,[]);
    }
  },
});

export const { addToCart, removeFromCart, clearCart, setCartUser } = cartSlice.actions;
export default cartSlice.reducer;
