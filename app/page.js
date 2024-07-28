'use client';
import React, {useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {useRouter} from 'next/navigation';

import RotatingPortal from './components/rotating-portal';

export default function ImageCanvas({
  imageUrl = '/stargate_outer_ring_original.png',
  staticImageUrl = '/initial_inner_wormhole.png',
  backgroundUrl = '/unknown_space_location.png',  width = 3,
}) {
  const router = useRouter();

  //#TODO: change this back to use preloader when I'm not simulating load anymore
  // const loaded = usePreloader();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate loading delay
      setLoaded(true);
    };

    loadAssets();
  }, []);
  //ORIGINAL DONT MODIFY

  // useEffect(() => {
  //   if (loaded) {
  //     //TODO: use transition with ship, extract
  //     router.push('/home'); // Navigate to the home page
  //     return;
  //   }
  // }, [loaded, router]);

  //TODO: animation should go for at least 3 seconds before transitioning

  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-[100vh]">
          {/* <Canvas camera={{ position: [0, 0, 10], near: 0.1, far: 100 }}> */}
          <Canvas camera={{position: [0, 0, 10], fov: 75}}>
            <ambientLight />
            <OrbitControls enableZoom={true} enablePan={true} />
            <RotatingPortal
              imageUrl={imageUrl}
              staticImageUrl={staticImageUrl}
              backgroundUrl={backgroundUrl}
              width={width}
            />
          </Canvas>
        </div>
      </main>
    </div>
  );
}
