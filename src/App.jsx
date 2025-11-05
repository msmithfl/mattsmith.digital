import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import soundFile from './assets/sounds/thps-music.mp3';

function App() {
  const [animationOn, setAnimationOn] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio(soundFile);
    audio.loop = true;

    if (animationOn) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [animationOn]);

  const handleModelLoad = () => {
    setIsModelLoaded(true);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Full screen loading overlay - at the top level */}
      {!isModelLoaded && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400"></div>
        </div>
      )}
      
      <Sidebar />
      <div className="ml-1/6 h-full bg-gray-100 flex flex-col relative z-0">
        <Header animationOn={animationOn} setAnimationOn={setAnimationOn} />
        <MainContent animationOn={animationOn} onModelLoad={handleModelLoad} />
      </div>
    </div>
  );
}

export default App;