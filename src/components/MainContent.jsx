import React from 'react'
import mainBackground from '../assets/main-background-min-3.jpg';
import DetailsSection from './DetailsSection';
import ModelSection from './ModelSection';
import MenuSection from './MenuSection';
import StatsSection from './StatsSection';

const MainContent = ({ animationOn, onModelLoad }) => {
  return (
    <>
      {/* Mobile Layout */}
      <div
        className="bg-white md:hidden flex flex-col overflow-auto"
        style={{ backgroundImage: `url(${mainBackground})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        {/* First Section: Model and Details */}
        <div className="flex w-full my-10">
          <ModelSection onModelLoad={onModelLoad} />
          <DetailsSection />
        </div>

        {/* Third Section: Full-width Stats Section */}
        <div className="bg-transparent mb-10 w-full">
          <StatsSection animationOn={animationOn} />
        </div>

        {/* Second Section: Full-width Menu Section */}
        <div className="bg-transparent w-full">
          <MenuSection animationOn={animationOn} />
        </div>

      </div>
      {/* Desktop Layout */}
      <div
          className="h-4/5 bg-white hidden md:flex overflow-auto"
          style={{ backgroundImage: `url(${mainBackground})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
          <div className="bg-transparent" style={{ width: '10%' }}></div>
          <div className="bg-transparent p-4 flex flex-col space-y-4 w-2/5">
              <StatsSection animationOn={animationOn} />
              <MenuSection animationOn={animationOn}/>
          </div>
          <ModelSection onModelLoad={onModelLoad} />
          <DetailsSection />
      </div>
    </>
  )
}

export default MainContent