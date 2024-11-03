import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import soundFile from './assets/sounds/thps-music.mp3';

function App() {
  const [animationOn, setAnimationOn] = useState(false);

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

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="ml-1/6 h-full bg-gray-100 flex flex-col relative z-0">
        <Header animationOn={animationOn} setAnimationOn={setAnimationOn} />
        <MainContent animationOn={animationOn} />
      </div>
    </div>
  );
}

export default App;
