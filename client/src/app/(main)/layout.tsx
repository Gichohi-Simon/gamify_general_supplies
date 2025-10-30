import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Mainlayout({ children }: LayoutProps) {
  return(
     <div>
        <Header />
        {children}
        <Footer />
    </div>
  );
}
