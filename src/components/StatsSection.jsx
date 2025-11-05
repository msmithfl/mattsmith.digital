import React from 'react'
import { useEffect, useState } from 'react';
import data from '../data/info.json';
import AnimatedMeter from './AnimatedMeter';

const StatsSection = ({ animationOn }) => {
  return (
    <div className="md:h-1/2 bg-transparent md:pt-4 md:px-5 overflow-auto md:flex md:items-center md:justify-center">
      <ul className="space-y-2">
        {data.statItems.map((item) => (
          <li key={item.id} className="flex items-center">
            <div className="w-2/5 md:w-1/2 text-right md:text-left pr-2 md:pr-5">
              <p className="text-base sm:text-lg md:text-xl text-yellow-400 font-exo2 stats-text-shadow select-none">
                {item.text}
              </p>
            </div>
            <div className="w-3/5 md:w-1/2">
              <AnimatedMeter animationOn={animationOn} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsSection;
