'use client';
import React, {useRef, useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useTexture, useProgress} from '@react-three/drei';

//TODO: extract
const usePreloader = () => {
  const { progress } = useProgress();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    }
  }, [progress]);

  return loaded;
};

//#TODO: extract
function RotatingImage({imageUrl, staticImageUrl, backgroundUrl, width = 3}) {
  const rotatingMeshRef = useRef();
  const staticMeshRef = useRef();
  const texture = useTexture(imageUrl);
  const staticTexture = useTexture(staticImageUrl);
  const backgroundTexture = useTexture(backgroundUrl);
  const [rotation, setRotation] = useState(true);

  // Load the sound
  const sound = new Audio("/stargate_lock_shevron_sound.mp3");

  // Toggle rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(false);
      setTimeout(() => setRotation(true), 2000); // Pause for 2 seconds
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Play the sound when rotation stops
  useEffect(() => {
    if (!rotation) {
      sound.play()
        .catch((error) => {
          console.log("Sound Play error, error")
          // #TODO: I think I should display a sound button, muted when this fails.
        });
    }
  }, [rotation]);

  // Rotate the image
  useFrame(() => {
    if (rotation && rotatingMeshRef.current) {
      rotatingMeshRef.current.rotation.z -= 0.01; // Rotate clockwise (negative value for clockwise rotation)
    }
  });

  // Calculate aspect ratio of the textures
  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const planeHeight = width / aspect;

  const staticAspect = staticTexture.image ? staticTexture.image.width / staticTexture.image.height : 1;
  const staticPlaneRadius = width / 2.75; // Make it smaller for demonstration

  return (
    <>
      {/* Background Image */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial map={backgroundTexture} />
      </mesh>

      {/* Rotating Image */}
      <mesh ref={rotatingMeshRef}>
        <circleGeometry args={[width/2, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Static Image */}
      <mesh ref={staticMeshRef} position={[0, 0, 0.2]}>
        <circleGeometry args={[staticPlaneRadius, 32]} />
        <meshBasicMaterial map={staticTexture} />
      </mesh>
    </>
  );
}


export default function ImageCanvas({
 imageUrl = '/stargate_outer_ring_original.png',
 staticImageUrl = '/initial_inner_wormhole.png',
 backgroundUrl = '/unknown_space_location.png',
 width = 3
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

  useEffect(() => {
    if (loaded) {
      //TODO: use transition with ship, extract
      router.push('/home'); // Navigate to the home page
      return;
    }
  }, [loaded, router]);

  //TODO: animation should go for at least 3 seconds before transitioning

 return (
  <div className="max-h-screen flex flex-col items-center justify-center">
   <main className="flex flex-col items-center justify-center w-full">
    <div className="w-full h-[100vh]">
     <Canvas camera={{position: [0, 0, 5], fov: 75}}>
      <ambientLight />
      <OrbitControls enableZoom={true} enablePan={true} />
      <RotatingImage imageUrl={imageUrl} staticImageUrl={staticImageUrl} backgroundUrl={backgroundUrl} width={width} />
     </Canvas>
    </div>
   </main>
  </div>
 );
}
