'use client';
import React, {useRef, useEffect, useState} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {useTexture, Torus} from '@react-three/drei';
import * as THREE from 'three';
import {useRouter} from 'next/navigation';

const Camera = ({setDecelerating, updateTexture, transitionStaticUrl, stopped, decelerationStartTime, decelerating, assetsLoaded}) => {
  const { camera } = useThree();
  const [elapsedTime, setElapsedTime] = useState(0);
  const router = useRouter();
  const intermediatePosition = new THREE.Vector3(-0.6, 0.58, 10); // Position in front of the portal
  const targetPosition = new THREE.Vector3(0, 0, -0.1); // Position at the portal
  const lookAtPosition = new THREE.Vector3(0, 0, -0.1); // Look at the portal
  const finalPosition = new THREE.Vector3(0, 0, -2); // Position past the portal
  const [stage, setStage] = useState('lookLeft'); // Initial stage

  const startPos = useRef(new THREE.Vector3(0, 0, 500));

  const updateCameraVectors = (x, y, z) => {
    camera.position.lerpVectors(startPos.current, new THREE.Vector3(x, y, z), elapsedTime / 1);
    camera.lookAt(0, 0, 0);
  };

  const nextStagePreparation = (stageName) => {
    setStage(stageName);
    setElapsedTime(0);
    startPos.current.copy(camera.position);
  };

  useEffect(() => {
    // Set initial camera position further back along the z-axis
    camera.position.set(0, 0, 500);
    const timer = setTimeout(() => setStage('lookLeft'), 1000); // Start looking left after 1 second
    return () => clearTimeout(timer);
  }, [camera]);

  useFrame((_, delta) => {
    setElapsedTime((prev) => prev + delta);

    switch (stage) {
      case 'lookLeft':
        if (elapsedTime < 2) {
          updateCameraVectors(150, 0, 500);
        } else {
          nextStagePreparation('lookRight');
        }
        break;
      case 'lookRight':
        if (elapsedTime < 2) {
          updateCameraVectors(-150, 0, 500);
        } else {
          nextStagePreparation('lookDown');
        }
        break;
      case 'lookDown':
        if (elapsedTime < 2) {
          updateCameraVectors(0, -150, 500);
        } else {
          nextStagePreparation('travel');
        }
        break;
      case 'travel':
        const cameraPosition = new THREE.Vector3().copy(camera.position);
        const distanceToIntermediate =
          camera.position.distanceTo(intermediatePosition);
        const distanceToTarget = camera.position.distanceTo(targetPosition);

        if (distanceToTarget <= 0.2 && assetsLoaded) {
          // Once the camera reaches the target position, move to the final position
          cameraPosition.lerp(finalPosition, 0.2 * delta);
          router.push('/home');
        } else if (distanceToIntermediate > 0.1 && distanceToTarget > 10) {
          // Move towards the intermediate position
          cameraPosition.lerp(intermediatePosition, 0.4 * delta);
        } else if (stopped && assetsLoaded) {
          updateTexture(transitionStaticUrl);
          // Move towards the target position
          cameraPosition.lerp(targetPosition, 0.4 * delta);
        } else {
          if (!decelerating && !stopped) {
            setDecelerating(true);
            decelerationStartTime.current = performance.now() / 1000;
          }
        }

        camera.position.copy(cameraPosition);

        // Always look at the portal
        camera.lookAt(lookAtPosition);

        break;

      default:
        break;
    }
  });

  return null;
};

const PortalCamera = React.memo(Camera);

const RotatingPortal = ({
  imageUrl = '/stargate_outer_ring_original.png',
  staticImageUrl = '/initial_inner_wormhole.png',
  transitionStaticUrl = '/transition_static_image.png',
  width = 3,
  assetsLoaded = false,
}) => {
  const rotatingMeshRef = useRef();
  const staticMeshRef = useRef();
  const [staticTextureUrl, setstaticTextureUrl] = useState(staticImageUrl);
  const staticTexture = useTexture(staticTextureUrl);
  const [rotationSpeed, setRotationSpeed] = useState(-2); // Initial rotation speed
  const [decelerating, setDecelerating] = useState(false);
  const [stopped, setStopped] = useState(false);
  const decelerationStartTime = useRef(null);

  const updateTexture = (newTextureUrl) => {
    setstaticTextureUrl(newTextureUrl);
  };

  const portalTexture = useTexture(imageUrl);

  //portal texture is warped due to torus shape, so add a repeating pattern for a better result
  useEffect(() => {
    portalTexture.repeat.set(70, 1);
    portalTexture.wrapS = portalTexture.wrapT = THREE.RepeatWrapping;
    portalTexture.needsUpdate = true;
  }, [portalTexture]);

  //Rotate the image
  useFrame(
    ({clock}) => {
      if (rotatingMeshRef.current) {
        rotatingMeshRef.current.rotation.z -= rotationSpeed; // Rotate clockwise (negative value for clockwise rotation)
      }

      if (decelerating) {
        const elapsed = clock.elapsedTime - decelerationStartTime.current;
        const decelerationDuration = 3; // Duration of deceleration in seconds

        if (elapsed < decelerationDuration) {
          const t = elapsed / decelerationDuration;
          const easedSpeed = (t * (2 - t));

          if (easedSpeed >= 0) {
            setRotationSpeed(0);
            setDecelerating(false);
            setStopped(true);
          } else {
            setRotationSpeed(easedSpeed);
          }

        } else {
          setRotationSpeed(0);
          setDecelerating(false);
          setStopped(true);
        }
      }
  });

  return (
    <>
      {/*. Additional Lights */}
      <pointLight position={[5, 5, 5]} intensity={50} />
      <spotLight
        position={[-5, 5, 5]}
        intensity={50}
        angle={0.3}
        penumbra={1}
      />

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
      <PortalCamera updateTexture={updateTexture}
        setDecelerating={setDecelerating}
        transitionStaticUrl={transitionStaticUrl}
        decelerationStartTime={decelerationStartTime}
        decelerating={decelerating}
        assetsLoaded={assetsLoaded}
        stopped={stopped}
      />
    </>
  );
}

export default React.memo(RotatingPortal);
