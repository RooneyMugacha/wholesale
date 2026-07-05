import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TradeHub Wholesale | B2B Marketplace for Businesses",
  description:
    "Access thousands of wholesale products across electronics, FMCG, building materials, furniture, clothing, and food & beverage. Volume pricing, fast shipping, and dedicated account support.",
  keywords:
    "wholesale marketplace, B2B buying, bulk orders, wholesale supplier, trade account",
  openGraph: {
    title: "TradeHub Wholesale | B2B Marketplace for Businesses",
    description:
      "The all-in-one wholesale marketplace for modern businesses. Browse thousands of products at trade prices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
