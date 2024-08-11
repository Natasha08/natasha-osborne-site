'use client';

import Image from 'next/image';
import PortalImage from '@/public/stargate_outer_ring_original.png';

export default function Loading() {
  return (
    <main className="flex flex-col items-center">
      <div className="pt-36">
        <Image
          className="animate-spin"
          src={PortalImage}
          alt=""
          width="75"
          height="auto"
          priority={true}
        >
        </Image>
        <span className="sr-only">Loading...</span>
      </div>
    </main>
  );
}
