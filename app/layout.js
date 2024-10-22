'use client';

import {Inter} from 'next/font/google';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/react';

import './globals.css';

const inter = Inter({subsets: ['latin']});

export default function MyApp({children}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={`${inter.className}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
