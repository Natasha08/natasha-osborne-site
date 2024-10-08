'use client';

import {useEffect, useState, useRef} from 'react';

const BACKGROUNDS = [
  '.bg-surface-of-europa',
  '.bg-mobile-rocky-mountain-1',
  '.bg-deep-blue',
];

const DEFAULT_GLOW = [216, 220, 225];

const BACKGROUND_MOUSE_GLOW = {
  '.bg-surface-of-europa': [0, 128, 255],
  '.bg-mobile-rocky-mountain-1': [157, 105, 193],
  '.bg-deep-blue': [216, 220, 225],
};

const getBackgroundMouseGlow = (
  currentElement,
  background = BACKGROUNDS[0],
) => {
  const parent = currentElement.closest(background);

  if (parent) {
    return BACKGROUND_MOUSE_GLOW[background];
  } else {
    const newIndex = BACKGROUNDS.indexOf(background) + 1;

    if (newIndex >= BACKGROUNDS.length) return DEFAULT_GLOW;

    return getBackgroundMouseGlow(currentElement, BACKGROUNDS[newIndex]);
  }
};

const MouseGlow = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [currentGlowColor, setCurrentGlowColor] = useState([0, 128, 255]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCurrentGlowColor(getBackgroundMouseGlow(e.target));
      setPosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const mouseRef = useRef();

  return (
    <div
      ref={mouseRef}
      className="fixed top-0 left-0 pointer-events-none z-40 hidden md:block"
      style={{
        width: '100vw',
        height: '100vh',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: '200px',
          height: '200px',
          marginLeft: '-100px',
          marginTop: '-100px',
          background: `
            radial-gradient(circle at 40% 40%, rgba(${currentGlowColor}, 0.1), rgba(${currentGlowColor}, 0) 60%),
            radial-gradient(circle at 60% 60%, rgba(${currentGlowColor}, 0.2), rgba(${currentGlowColor}, 0) 70%),
            radial-gradient(circle at 50% 50%, rgba(${currentGlowColor}, 0.3), rgba(${currentGlowColor}, 0) 50%)
          `,
          filter: 'blur(15px)',
        }}
      />
    </div>
  );
};

export default MouseGlow;
