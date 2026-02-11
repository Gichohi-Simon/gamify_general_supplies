import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItemInput } from "@/types/types";

interface cartState {
  items: OrderItemInput[];
  userId?: string | null;
}

const getCartKey = (userId?: string | null) => {
  return userId ? `cart_${userId}` : "cart_guest";
};

const loadCartFromStorage = (userId?: string | null): OrderItemInput[] => {
  try {
    if (typeof window === "undefined") return [];
    const key = getCartKey(userId);
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as OrderItemInput[]) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (
  userId: string | null | undefined,
  items: OrderItemInput[],
) => {
  try {
    if (typeof window === "undefined") return;
    const key = getCartKey(userId);
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    // ignore
  }
};

const mergeCartItems = (a: OrderItemInput[], b: OrderItemInput[]) => {
  const map = new Map<string, number>();

  for (const item of a) {
    map.set(item.productId, (map.get(item.productId) ?? 0) + item.quantity);
  }
  for (const item of b) {
    map.set(item.productId, (map.get(item.productId) ?? 0) + item.quantity);
  }

  return Array.from(map.entries()).map(([productId, quantity]) => ({
    productId,
    quantity,
  }));
};

const initialState: cartState = {
  items: [],
  userId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartUser: (state, action: PayloadAction<string | null>) => {
      const newUserId = action.payload;

      const guestItems = loadCartFromStorage(null);
      const userItems = loadCartFromStorage(newUserId);

      state.userId = newUserId;

      if (newUserId) {
        const merged = mergeCartItems(userItems, guestItems);
        state.items = merged;

        saveCartToStorage(newUserId, merged);

        if (typeof window !== "undefined") {
          localStorage.removeItem("cart_guest");
        }
      } else {
        state.items = guestItems;
        // saveCartToStorage(null, guestItems);
      }
    },
    addToCart: (state, action: PayloadAction<OrderItemInput>) => {
      const { productId, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId,
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      saveCartToStorage(state.userId, state.items);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      state.items = state.items.filter((item) => item.productId !== productId);

      saveCartToStorage(state.userId, state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.userId, []);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartUser } =
  cartSlice.actions;
export default cartSlice.reducer;
