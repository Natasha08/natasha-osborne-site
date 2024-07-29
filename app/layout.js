'use client';

import {Inter} from 'next/font/google';
import AssetsLoadedProvider from '../context/assets-loaded';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export default function MyApp({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AssetsLoadedProvider value={false}>{children}</AssetsLoadedProvider>
      </body>
    </html>
  );
}
