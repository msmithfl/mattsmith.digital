import React from 'react'
import sidebarImage from '../assets/sidebar-min.png';

const Sidebar = () => {
  return (
    <div className="absolute left-0 top-0 w-1/6 h-full bg-transparent z-10 hidden md:block">
        <img 
          src={sidebarImage} 
          alt="Sidebar" 
          className="w-full h-full object-contain object-left-top"
        />
    </div>
  )
}

export default Sidebar