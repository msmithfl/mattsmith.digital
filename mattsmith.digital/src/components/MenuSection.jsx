import React, { useState } from 'react';
import data from '../data/info.json';
import Popup from './Popup';
import sections from '../data/sections';
import playSound from '../utils/playSound';
import menuClickSound from '../assets/sounds/thps-select.mp3';

const MenuSection = ({ animationOn }) => {
  const [popupData, setPopupData] = useState({ message: '', background: '', content: {} });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
            className={`text-6xl font-exo2 menu-text-shadow cursor-pointer select-none text-slate-300 
              ${selectedItem === menuItem ? 'text-yellow-400' : ''}  
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
