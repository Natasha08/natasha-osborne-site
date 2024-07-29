'use client'
import {useEffect} from 'react';
import {useProgress} from '@react-three/drei';
import { useAssetsLoadedContext } from "../../context/assets-loaded";

export default function AssetPreloader() {
  const [_, setLoaded] = useAssetsLoadedContext();
  const { progress } = useProgress();

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress === 100) {
        setTimeout(() => setLoaded(true), 500); // Small delay for smoother transition
      }
    }, 500);

    return () => clearInterval(interval);
  }, [progress]);

  return null;
}
