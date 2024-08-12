'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import PortalImage from '@/public/stargate_outer_ring_original.png';

const LOADING_PATHS = [
  '/',
  '/space',
];

export default function Loading() {
  const [shouldPrioritize, setShouldPrioritize] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    setShouldPrioritize(LOADING_PATHS.includes(pathname));
  }, []);

  return (
    <main className="flex flex-col items-center">
      <div className="pt-36">
        <Image
          className="animate-spin"
          src={PortalImage}
          alt=""
          width="75"
          height="auto"
          priority={shouldPrioritize}
        >
        </Image>
        <span className="sr-only">Loading...</span>
      </div>
    </main>
  );
}
