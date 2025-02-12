import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@styles/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafał Czajka'
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <html lang="en" className="scroll-smooth">
    <body className={inter.className}>
      <div id="bg"></div>
      <div id="page-content">{children}</div>
    </body>
  </html>
);

export default RootLayout;
