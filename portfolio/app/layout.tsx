import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '@styles/globals.css';
import '@styles/counters.css';
import '@styles/highlights.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafał Czajka"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
