"use client";
import React from "react";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import ClientAuthHydrator from "@/components/ClientAuthHydrator";
import QueryClientComponent from "@/components/QueryClientComponent";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
     <QueryClientComponent> 
       <ClientAuthHydrator />
      {children}
     </QueryClientComponent>
    </Provider>
  );
}
