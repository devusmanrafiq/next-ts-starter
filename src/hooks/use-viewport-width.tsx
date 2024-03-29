'use client';

import { useEffect, useState } from 'react';

// This is a custom hooks that will return the window width and height.

const useViewportWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleWindowResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { windowWidth, isMobile: windowWidth < 480, isTablet: windowWidth < 1024 };
};

export default useViewportWidth;
