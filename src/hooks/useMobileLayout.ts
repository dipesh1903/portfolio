import { useState, useEffect } from 'react';

export default function useMobileLayout() {
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : 0;
        const height = hasWindow ? window.innerHeight : 0;
        return {
            width,
            height,
        };
    }
  const hasWindow = typeof window !== 'undefined';

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);

  return windowDimensions;
}