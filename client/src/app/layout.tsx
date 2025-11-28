import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner"
const poppins = Raleway({
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
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        <Providers>
          <Toaster/>
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
