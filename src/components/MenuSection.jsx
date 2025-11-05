import React, { useState, useEffect } from 'react';
import data from '../data/info.json';
import Popup from './Popup';
import sections from '../data/sections';
import playSound from '../utils/playSound';
import menuClickSound from '../assets/sounds/thps-select.mp3';

const MenuSection = ({ animationOn }) => {
  const [popupData, setPopupData] = useState({ message: '', background: '', content: {} });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Preload videos and backgrounds when component mounts
  useEffect(() => {
    const preloadAssets = () => {
      // Preload videos
      if (sections.PROJECTS?.content?.projects) {
        sections.PROJECTS.content.projects.forEach(project => {
          if (project.video) {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.src = project.video;
            video.load();
          }
        });
      }

      // Preload popup backgrounds
      Object.values(sections).forEach(section => {
        if (section.background) {
          const img = new Image();
          img.src = section.background;
        }
        if (section.mobileBackground) {
          const img = new Image();
          img.src = section.mobileBackground;
        }
      });
    };

    preloadAssets();
  }, []);

  const handleItemClick = (item) => {
    if (animationOn) {
      playSound(menuClickSound);
    }
    
    setPopupData({ message: item, ...sections[item] });
    setIsPopupOpen(true);
    setSelectedItem(item);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="md:h-1/2 pb-24 md:pb-0 bg-transparent flex items-center justify-center">
      <ul className="space-y-2 text-center">
        {data.menuItems.map((menuItem, index) => (
          <li
            key={index}
            className={`md:transition-transform md:duration-200 md:ease-in-out md:hover:scale-110 text-6xl font-exo2 menu-text-shadow cursor-pointer select-none text-slate-300 
              ${selectedItem === menuItem ? 'text-yellow-400 scale-110' : ''}  
              md:hover:text-yellow-400`} 
            onClick={() => handleItemClick(menuItem)}
          >
            <h2>{menuItem}</h2>
          </li>
        ))}
      </ul>

      {isPopupOpen && (
        <Popup
          message={popupData.message}
          background={popupData.background}
          mobileBackground={popupData.mobileBackground}
          content={popupData.content}
          onClose={closePopup}
          animationOn={animationOn}
        />
      )}
    </div>
  );
};

export default MenuSection;
