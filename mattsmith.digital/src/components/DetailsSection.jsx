import React, { useState } from 'react';
import tonyhawkPFP from '../assets/PFP.png';
import unityLogo from '../assets/unity-logo.png';
import goofyText from '../assets/foot.png';

const DetailsSection = () => {
  const [isWigglingUnity, setIsWigglingUnity] = useState(false);
  const [isWigglingGoofy, setIsWigglingGoofy] = useState(false);

  const handleMouseEnterUnity = () => {
    setIsWigglingUnity(true);
  };

  const handleMouseEnterGoofy = () => {
    setIsWigglingGoofy(true);
  };

  const handleAnimationEndUnity = () => {
    setIsWigglingUnity(false);
  };

  const handleAnimationEndGoofy = () => {
    setIsWigglingGoofy(false);
  };

  return (
    <div className="bg-transparent md:p-4 flex flex-col justify-between w-2/5 md:w-1/4">
      <div className="h-1/4 bg-transparent"></div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 bg-transparent p-2 flex flex-col items-center justify-center">
          <p className="text-lg md:text-2xl text-yellow-400 font-exo2-regular stats-text-shadow mt-2 text-right leading-[1.1]">
            PRO<br />
            GAMEDEV
          </p>
        </div>
        <div className="flex-1 bg-transparent pb-2 md:p-2 flex flex-col items-center justify-center">
          <img src={tonyhawkPFP} alt="Tony Hawk Profile" className="max-w-20 md:max-w-36 object-contain" />
        </div>
        <div className="flex-1 bg-transparent pb-2 md:p-2 flex flex-col items-center justify-center">
          <img
            src={unityLogo}
            alt="Vert Text"
            className={`max-w-16 md:max-w-20 pb-2 object-contain ${isWigglingUnity ? 'img-wiggle-active' : ''}`}
            onMouseEnter={handleMouseEnterUnity}
            onClick={handleMouseEnterUnity}
            onAnimationEnd={handleAnimationEndUnity}
          />
          <hr className="w-16 md:w-24 border-t-4 border-yellow-400 mt-1" />
          <p className="text-lg md:text-2xl text-yellow-400 font-exo2-regular stats-text-shadow">UNITY</p>
        </div>
        <div className="flex-1 bg-transparent md:p-2 flex flex-col items-center justify-center">
          <img
            src={goofyText}
            alt="Goofy Text"
            className={`max-w-16 md:max-w-24 object-contain ${isWigglingGoofy ? 'img-wiggle-active' : ''}`}
            onMouseEnter={handleMouseEnterGoofy}
            onClick={handleMouseEnterGoofy}
            onAnimationEnd={handleAnimationEndGoofy}
          />
          <p className="text-lg md:text-2xl text-yellow-400 font-exo2-regular stats-text-shadow">REGULAR</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
