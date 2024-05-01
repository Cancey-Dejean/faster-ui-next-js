import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { queryGlobalSettings } from "@/api/hygraph";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className="bg-[#F5F8FF]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
