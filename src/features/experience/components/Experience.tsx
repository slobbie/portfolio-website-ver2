import { Suspense } from 'react';

import { Environment, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NoToneMapping } from 'three';

import Book from '@/features/experience/components/Book';

const ExperienceCanvas = () => {
  return (
    <>
      <Loader />
      <Canvas
        shadows
        gl={{ toneMapping: NoToneMapping }}
        camera={{
          position: [-0.2, -0.3, window.innerWidth > 800 ? 3 : 9],
          fov: 50,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <directionalLight
              position={[2, 5, 2]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <Environment
              files={`${import.meta.env.BASE_URL}hdri/studio.hdr`}
              background={false}
            />
            <Book rotation={[-0.26, 0, 0]} position={[-0.5, 0, 0]} />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
              <planeGeometry args={[100, 100]} />

              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Suspense>
        </group>
      </Canvas>
    </>
  );
};

export default ExperienceCanvas;
