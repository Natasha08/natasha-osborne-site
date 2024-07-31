'use client';

import {useState} from 'react';
import Image from 'next/image';

const StealthItem = ({src, alt, positionClasses, children}) => {
  const [isVisible, setIsVisible] = useState(false);

  const setCurrentVisiblity = (bool) => {
    return () => {
      setIsVisible(bool);
    };
  };

  return (
    <div
      className={`absolute stealth-item z-10 h-auto ${positionClasses}`}
      onMouseEnter={setCurrentVisiblity(true)}
      onMouseLeave={setCurrentVisiblity(false)}
    >
      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-80 visible' : 'opacity-0 invisible'}`}
      >
        <Image src={src} alt={alt} className="h-20 w-20" />
      </div>
      {children}
    </div>
  );
};

export default StealthItem;
