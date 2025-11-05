import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ onLoad }) => {
  const { scene, animations } = useGLTF('/assets/thps-model-no-mirror-cleanup-blur-20.glb');
  const mixer = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Only initialize if we haven't already loaded
    if (scene && !hasLoaded) {
      if (animations && animations.length > 0) {
        mixer.current = new THREE.AnimationMixer(scene);
        const action = mixer.current.clipAction(animations.find(anim => anim.name === 'Idle'));
        action.play();
      }

      setHasLoaded(true);
      if (onLoad) {
        setTimeout(() => {
          onLoad();
        }, 100);
      }
    }

    return () => {
      // Only clean up if we're actually unmounting
      if (hasLoaded) {
        mixer.current?.stopAllAction();
      }
    };
  }, [scene, animations]); // Removed hasLoaded and onLoad from dependencies

  useFrame((state, delta) => mixer.current?.update(delta));

  return (
    <primitive
      object={scene}
      position={[0, -1.2, 0]}
      rotation={[0, -0.15, 0]}
      scale={1.4}
    />
  );
};

const ModelSection = ({ onModelLoad }) => {
  const handleModelLoad = () => {
    if (onModelLoad) {
      onModelLoad();
    }
  };

  return (
    <div className="bg-transparent md:ml-0 md:p-4 flex items-center justify-center w-3/5 md:w-1/4">
      <Canvas
        camera={{ position: [0, 3.2, 0], fov: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <Model onLoad={handleModelLoad} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={true}
            rotateSpeed={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelSection;