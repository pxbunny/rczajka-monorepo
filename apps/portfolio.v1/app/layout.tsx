import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SkipToContent } from '@ui';

import '@styles/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafał Czajka'
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <html lang="en" className="scroll-smooth">
    <body className={inter.className}>
      <div id="page-content">
        <SkipToContent />
        <div className="max-w-screen-xl min-h-screen mx-auto px-5 sm:px-12">
          {children}
        </div>
      </div>
      <div id="bg"></div>
    </body>
  </html>
);

export default RootLayout;
