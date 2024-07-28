'use client';
import {Canvas, useThree} from '@react-three/fiber';
import {CubeTextureLoader} from 'three';
import {OrbitControls} from '@react-three/drei';

import RotatingPortal from './components/rotating-portal';

// Loads the skybox texture and applies it to the scene.
function SkyBox({imageUrl}) {
  const {scene} = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

function App() {
  return (
    <Canvas className="canvas" camera={{position: [0, 0, 10], fov: 75}}>
      <OrbitControls enableZoom={true} enablePan={true} />
      <ambientLight />
      <RotatingPortal
        imageUrl="/stargate_outer_ring_original.png"
        staticImageUrl="/initial_inner_wormhole.png"
        width={3}
      />
      <SkyBox imageUrl="/colorful_stars_and_nebulae.jpg" />
    </Canvas>
  );
}

export default App;
