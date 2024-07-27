'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React from 'react';

const MyMesh = () => {
  const myMesh = React.useRef()
  useFrame(({clock}) => {
    myMesh.current.rotation.z = clock.getElapsedTime()
  })
  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  )
}

export default function Play () {
  return (
    <div>
      <p style={{textAlign: "center"}}>Play</p>
      <Canvas>
        <MyMesh />
      </Canvas>
    </div>
  )
}
