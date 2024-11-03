import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/assets/thps-model-no-mirror-cleanup-blur-3.glb');
  const mixer = useRef(null);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations.find(anim => anim.name === 'Idle'));
      action.play();
    }

    return () => mixer.current?.stopAllAction(); // Clean up animation
  }, [animations, scene]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return (
    <primitive
      object={scene}
      position={[0, -1.2, 0]} // Adjust position to center the model
      scale={1.4}
    />
  );
};

const ModelSection = () => {
  return (
    <div className="bg-transparent md:ml-0 md:p-4 flex items-center justify-center w-3/5 md:w-1/4">
      <Canvas
        camera={{ position: [0, 1, 3], fov: 50 }} // Adjust camera position and field of view
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <Model />
          {/* Customizing OrbitControls to restrict rotation */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2} // Restrict to prevent rotation along the Y axis
            minPolarAngle={Math.PI / 2} // Lock rotation to the Z-axis only
            enableRotate={true}
            rotateSpeed={1.2} // Adjust speed if needed
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelSection;
