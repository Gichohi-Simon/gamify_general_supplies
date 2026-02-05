"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import QueryClientComponent from "@/components/QueryClientComponent";
import CartUserSync from "@/components/cartUserSync";
import AuthProvider from "@/components/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/components/ui/sonner";

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={googleClientId!}>
        <QueryClientComponent>
          <Toaster position="top-right" richColors closeButton />
          <AuthProvider />
          <CartUserSync />
          {children}
        </QueryClientComponent>
      </GoogleOAuthProvider>
    </Provider>
  );
}
