import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected.",
  description: "Experience the Sony WH-1000XM6 noise cancelling headphones. Engineered for focus, crafted for comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-primary text-white overflow-x-hidden selection:bg-accent-blue/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
