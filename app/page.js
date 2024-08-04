'use client';
import {memo} from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import {CubeTextureLoader} from 'three';
import {OrbitControls} from '@react-three/drei';
import Link from 'next/link';

import {useAssetsLoadedContext} from '@/context/assets-loaded';
import RotatingPortal from '@/components/rotating-portal';
import AssetsPreloader from '@/components/assets-preloader';

// Loads the skybox texture and applies it to the scene.
function SkyBox({imageName}) {
  const {scene} = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  loader.load(
    [
      `/${imageName}_reverse.jpg`, //right
      `/${imageName}_reverse.jpg`, //left
      `/${imageName}_reverse.jpg`, //top
      `/${imageName}_reverse.jpg`, //bottom
      `/${imageName}.jpg`, //front
      `/${imageName}.jpg`, //back
    ],
    function (result) {
      if (result.isTexture == true) {
        // Set the scene background property to the resulting texture.
        scene.background = result;
      } else {
        console.error('Texture not loaded', result);
      }
    },
  );

  return null;
}

const Main = memo(function Main() {
  const [assetsLoaded] = useAssetsLoadedContext();

  return (
    <>
      <Link href="/home" className="text-text hover:text-interactive absolute z-10 left-0 right-0 text-center top-48">Skip to Home </Link>
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} enablePan={true} />
        <ambientLight />
        <RotatingPortal assetsLoaded={assetsLoaded} />
        <SkyBox imageName="colorful_stars_and_nebulae" />
      </Canvas>
      <AssetsPreloader />
    </>
  );
});

export default Main;
