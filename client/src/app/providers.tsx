"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import QueryClientComponent from "@/components/QueryClientComponent";
import CartUserSync from "@/components/cartUserSync";
import AuthProvider from "@/components/AuthProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
     <QueryClientComponent> 
      <AuthProvider />
      <CartUserSync />
      {children}
     </QueryClientComponent>
    </Provider>
  );
}
