'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function RotatingPortal({imageUrl, staticImageUrl, width = 3}) {
  const rotatingMeshRef = useRef();
  const staticMeshRef = useRef();
  const staticTexture = useTexture(staticImageUrl);
  const portalTexture = useTexture(imageUrl);
  const [rotation, setRotation] = useState(true);

  //portal texture is warped due to torus shape, so add a repeating pattern for a better result
  useEffect(() => {
    portalTexture.repeat.set(60, 1);
    portalTexture.wrapS = portalTexture.wrapT = THREE.RepeatWrapping;
    portalTexture.needsUpdate = true;
  }, [Torus, portalTexture]);


  //Rotate the image
  useFrame(() => {
    if (rotation && rotatingMeshRef.current) {
      rotatingMeshRef.current.rotation.z -= 0.01; // Rotate clockwise (negative value for clockwise rotation)
    }
  });

  return (
    <>
      {/* Rotating Torus for Portal */}
      <mesh ref={rotatingMeshRef} position={[0, 0, 0]}>
        <Torus args={[width, width / 10, 16, 300]}>
          <meshStandardMaterial map={portalTexture} />
        </Torus>
      </mesh>

      {/* Static Circular Image */}
      <mesh ref={staticMeshRef} position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[3, 32]} />
        <meshBasicMaterial map={staticTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
