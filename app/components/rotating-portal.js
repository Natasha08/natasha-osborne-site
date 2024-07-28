'use client';
import React, {useRef, useEffect, useState} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {useTexture, Torus} from '@react-three/drei';
import * as THREE from 'three';
import {useRouter} from 'next/navigation';

export default function RotatingPortal({
  imageUrl,
  staticImageUrl,
  transitionStaticUrl,
  setLoaded,
  defaultRotation = true,
  width = 3,
  loaded = false,
}) {
  const rotatingMeshRef = useRef();
  const staticMeshRef = useRef();
  const [staticTextureUrl, setstaticTextureUrl] = useState(staticImageUrl);
  const staticTexture = useTexture(staticTextureUrl);

  const updateTexture = (newTextureUrl) => {
    setstaticTextureUrl(newTextureUrl);
  };

  const portalTexture = useTexture(imageUrl);
  const [rotation, setRotation] = useState(defaultRotation);
  const router = useRouter();
  const {camera} = useThree();
  const intermediatePosition = new THREE.Vector3(-0.6, 0.58, 10); // Position in front of the portal
  const targetPosition = new THREE.Vector3(0, 0, -0.1); // Position at the portal
  const lookAtPosition = new THREE.Vector3(0, 0, -0.1); // Look at the portal
  const finalPosition = new THREE.Vector3(0, 0, -2); // Position past the portal

  //portal texture is warped due to torus shape, so add a repeating pattern for a better result
  useEffect(() => {
    portalTexture.repeat.set(60, 1);
    portalTexture.wrapS = portalTexture.wrapT = THREE.RepeatWrapping;
    portalTexture.needsUpdate = true;
  }, [portalTexture]);

  //Rotate the image
  useFrame(
    (_, delta) => {
      if (rotation && rotatingMeshRef.current) {
        rotatingMeshRef.current.rotation.z -= 0.01; // Rotate clockwise (negative value for clockwise rotation)
      }

      if (loaded) {
        const cameraPosition = new THREE.Vector3().copy(camera.position);
        const distanceToIntermediate =
          camera.position.distanceTo(intermediatePosition);
        const distanceToTarget = camera.position.distanceTo(targetPosition);

        if (distanceToTarget <= 0.2) {
          // Once the camera reaches the target position, move to the final position
          cameraPosition.lerp(finalPosition, 0.2 * delta);
          router.push('/home');
        } else if (distanceToIntermediate > 0.1 && distanceToTarget > 10) {
          // Move towards the intermediate position
          cameraPosition.lerp(intermediatePosition, 0.4 * delta);
        } else {
          setRotation(false);
          updateTexture(transitionStaticUrl);
          // Move towards the target position
          cameraPosition.lerp(targetPosition, 0.4 * delta);
        }

        camera.position.copy(cameraPosition);

        // Always look at the portal
        camera.lookAt(lookAtPosition);
      }
    },
    [loaded, camera.position],
  );

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate loading delay
      setLoaded(true);
    };
    loadAssets();
  }, [setLoaded]);

  return (
    <>
      {/*. Additional Lights */}
      <pointLight position={[5, 5, 5]} intensity={50} />
      <spotLight position={[-5, 5, 5]} intensity={50} angle={0.3} penumbra={1} />

      {/* Rotating Torus for Portal */}
      <mesh ref={rotatingMeshRef} position={[0, 0, 0]}>
        <Torus args={[width, width / 10, 16, 300]}>
          <meshStandardMaterial map={portalTexture} />
        </Torus>
      </mesh>

      {/* Static Circular Image */}
      <mesh
        ref={staticMeshRef}
        position={[0, 0, -0.1]}
        rotation={[0, Math.PI, 0]}
      >
        <circleGeometry args={[3, 32]} />
        <meshBasicMaterial map={staticTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
