'use client';

import {Inter} from 'next/font/google';
import {SpeedInsights} from '@vercel/speed-insights/next';

import Providers from './providers';
import './globals.css';
import AppNav from './components/app-nav';

const inter = Inter({subsets: ['latin']});

export default function MyApp({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppNav />
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
