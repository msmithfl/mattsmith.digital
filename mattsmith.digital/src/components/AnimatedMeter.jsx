import React from 'react'
import { useEffect, useState } from 'react';
import stat1 from '../assets/stats/stat-1.png';
import stat2 from '../assets/stats/stat-2.png';
import stat3 from '../assets/stats/stat-3.png';
import stat4 from '../assets/stats/stat-4.png';
import stat5 from '../assets/stats/stat-5.png';
import stat6 from '../assets/stats/stat-6.png';
import stat7 from '../assets/stats/stat-7.png';
import stat8 from '../assets/stats/stat-8.png';
import stat9 from '../assets/stats/stat-9.png';
import stat10 from '../assets/stats/stat-10.png';

const dotImages = [ stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10 ];

function AnimatedMeter({ animationOn }) {
  const [currentDot, setCurrentDot] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalDots = dotImages.length;

  const speed = Math.floor(Math.random() * 2 + 1) * 10;

  useEffect(() => {
    if (!animationOn) {
      setCurrentDot(totalDots - 1);
      return;
    }

    const interval = setInterval(() => {
      setCurrentDot(prev => {
        if (prev === totalDots - 1) {
          setDirection(-1);
        } else if (prev === 0) {
          setDirection(1);
        }
        return prev + direction;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [animationOn, speed, direction]);

  return (
    <div className="flex space-x-1 justify-start">
      {dotImages.map((dot, index) => (
        <img
          key={index}
          src={dot}
          alt={`Dot ${index}`}
          className={`max-w-4 sm:max-w-6 transition-opacity select-none ${index <= currentDot ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}

export default AnimatedMeter