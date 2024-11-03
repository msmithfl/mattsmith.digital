import React from 'react';
import headerImage from '../assets/name-holder.png';
import headerBackground from '../assets/top-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const Header = ({ animationOn, setAnimationOn }) => {
  return (
    <div
      className="h-1/5 flex items-end justify-between relative"
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <img src={headerImage} alt="Header Image" className="w-full h-full object-cover object-right" />
      <h1 className="absolute bottom-0 left-0 mb-3 ml-6 md:ml-60 text-slate-300 text-4xl md:text-6xl font-exo2 menu-text-shadow z-20">
        MATT SMITH
      </h1>
      <div className="absolute bottom-4 right-4 flex items-center z-30">
        <FontAwesomeIcon
          icon={animationOn ? faVolumeHigh : faVolumeXmark}
          className="text-black cursor-pointer text-4xl md:text-6xl md:transition-transform md:duration-200 md:ease-in-out md:hover:scale-105"
          onClick={() => setAnimationOn(prev => !prev)}
        />
      </div>
    </div>
  );
};

export default Header;
