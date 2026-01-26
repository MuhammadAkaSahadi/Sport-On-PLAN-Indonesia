import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";

import Header from "./components/layouts/header";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap", // Fungsinya agar Teks langsung ditampilkan pakai font cadangan dulu, lalu “ditukar” ke font Poppins ketika font berhasil dimuat.
  weight: ["400", "500", "600", "700", "800",], // Light, Medium, SemiBold, Bold, dan ExtraBold
});

export const metadata: Metadata = {
  title: "SportOn",
  description:
    "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
