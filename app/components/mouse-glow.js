'use client';

import {useEffect, useState, useRef} from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
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
      className="fixed top-0 left-0 pointer-events-none z-40"
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
            radial-gradient(circle at 40% 40%, rgba(0, 128, 255, 0.3), rgba(0, 128, 255, 0) 60%),
            radial-gradient(circle at 60% 60%, rgba(0, 128, 255, 0.2), rgba(0, 128, 255, 0) 70%),
            radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.5), rgba(0, 128, 255, 0) 50%)
          `,
          filter: 'blur(15px)',
        }}
      />
    </div>
  );
};

export default MouseGlow;
