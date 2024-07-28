'use client';
import {useState, useEffect} from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import {CubeTextureLoader} from 'three';
import {OrbitControls, useProgress} from '@react-three/drei';

import RotatingPortal from './components/rotating-portal';

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

const usePreloader = () => {
  const {progress} = useProgress();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    }
  }, [progress]);

  return loaded;
};

function App() {
  const loaded = usePreloader();

  return (
    <Canvas className="canvas" camera={{position: [100, 100, 100], fov: 75}}>
      <OrbitControls enableZoom={true} enablePan={true} />
      <ambientLight />
      <RotatingPortal
        width={3}
        loaded={loaded}
      />
      <SkyBox imageName="colorful_stars_and_nebulae" />
    </Canvas>
  );
}

export default App;
