import React, { useRef, useState, useEffect } from 'react';
import Experience from './popup-layouts/Experience';
import Projects from './popup-layouts/Projects';
import Devlogs from './popup-layouts/Devlogs';
import Contact from './popup-layouts/Contact';
import Placeholder from './popup-layouts/Placeholder';
import Bio from './popup-layouts/Bio';
import backButton from '../assets/back-button-min.png';
import customScrollHandleImage from '../assets/popup/scroll-handle.png';
import customScrollTrackImage from '../assets/popup/scroll-track.png';
import playSound from '../utils/playSound';
import backClickSound from '../assets/sounds/thps-back.mp3';

const Popup = ({ content, background, mobileBackground, onClose, animationOn }) => {
  const contentRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const scrollHandleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScrollTop(contentRef.current.scrollTop);
  };

  const handleBackButtonClick = () => {
    if (animationOn)
    {
      playSound(backClickSound);
    }
    onClose();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - startY;
    const trackHeight = scrollTrackRef.current.clientHeight;
    const contentHeight = contentRef.current.scrollHeight;
    const visibleHeight = contentRef.current.clientHeight;

    const scrollRatio = (contentHeight - visibleHeight) / (trackHeight - scrollHandleRef.current.clientHeight);
    const newScrollTop = startScrollTop + deltaY * scrollRatio;
    
    contentRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, contentHeight - visibleHeight));
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY, startScrollTop]);

  const updateScrollHandlePosition = () => {
    if (contentRef.current && scrollHandleRef.current && scrollTrackRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const trackHeight = scrollTrackRef.current.clientHeight;
      const handleHeight = scrollHandleRef.current.clientHeight;
      const maxHandleTop = trackHeight - handleHeight;
      const handleTop = scrollPercentage * maxHandleTop;
      scrollHandleRef.current.style.top = `${handleTop}px`;
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', updateScrollHandlePosition);
    return () => contentElement.removeEventListener('scroll', updateScrollHandlePosition);
  }, []);

  const renderContent = () => {
    switch (content.layout) {
      case 'experience':
        return <Experience content={content} />
      case 'projects':
        return <Projects content={content} />
      case 'bio':
        return <Bio content={content}/>
      case 'contact':
        return <Contact content={content} />
      default:
        return <Contact content={content} />;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark overlay */}
      <div onClick={handleBackButtonClick} className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Background Area */}
      <div
        className="relative flex flex-col w-full md:w-2/5 h-full md:h-3/5"
        style={{
          backgroundImage: `url(${window.innerWidth <= 1024 ? mobileBackground : background})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Message Area */}
        <div className="flex flex-col bg-opacity-70 p-10 md:p-24 justify-center flex-grow overflow-hidden">
          <div
            ref={contentRef}
            className="overflow-y-auto max-h-[50vh] md:max-h-[40vh]"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {renderContent()}
          </div>
        </div>

        {/* Custom Scroll Track and Handle (optional) */}
        {/* <div
          ref={scrollTrackRef}
          className="absolute right-0 top-0 w-6 h-full hidden md:block"
          style={{
            backgroundImage: `url(${customScrollTrackImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            ref={scrollHandleRef}
            className="absolute right-0 w-6 cursor-pointer hidden md:block"
            style={{
              backgroundImage: `url(${customScrollHandleImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50px',
            }}
            onMouseDown={handleMouseDown}
          />
        </div> */}

        {/* Close Button Area */}
        <div className="absolute bottom-10 md:bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <button
            onClick={handleBackButtonClick}
            className="w-24 transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <img src={backButton} alt="Back" className="w-full h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
