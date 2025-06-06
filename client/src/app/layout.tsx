import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gamify General Supplies | General service",
  description: "Warehouse materials suppliers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.variable} antialiased overflow-x-hidden min-h-screen flex flex-col`}>
        <Header />
       <main className="flex-grow">
       {children}
       </main>
        <Footer />
      </body>
      </Providers>
    </html>
  );
}
