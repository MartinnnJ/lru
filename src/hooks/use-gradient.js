import { useState, useEffect } from 'react';

const BREAKPOINT_DESKTOP = 1275;
const mobileGradientString = 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)';
const desktopGradientString = 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)';

export default function useGradient() {
  const [gradientString, setGradientString] = useState(() => {
    return window.innerWidth >= BREAKPOINT_DESKTOP ? desktopGradientString : mobileGradientString;
  });

  useEffect(() => {
    // TODO: add throttling
    window.addEventListener('resize', () => {
      const vw = window.innerWidth;
      if (vw >= BREAKPOINT_DESKTOP) {
        setGradientString(desktopGradientString);
      }
      if (vw < BREAKPOINT_DESKTOP) {
        setGradientString(mobileGradientString);
      }
    });

    return () => {
      window.removeEventListener('resize', null);
    }
  }, [gradientString]);

  return gradientString;
}