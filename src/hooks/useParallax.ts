import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [starLeft, setStarLeft] = useState(0);
  const [moonTop, setMoonTop] = useState(0);
  const [mountainTop, setMountainTop] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let value = window.scrollY;
    setStarLeft(value * 0.25);
    setMoonTop(value * 1.05);
    setMountainTop(value * 0.5);
    setMarginRight(value * 2);
    setMarginTop(value * 1.2);
    setHeaderTop(value * 0.5);
  };

  return {
    starLeft,
    moonTop,
    mountainTop,
    marginRight,
    marginTop,
    headerTop,
  };
};
