import { Environment, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Book from '@/features/experience/components/Book';

const ExperienceCanvas = () => {
  return (
    <>
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.2, -0.3, window.innerWidth > 800 ? 3 : 9],
          fov: 50,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <directionalLight
              position={[2, 5, 2]}
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <Environment files='/hdri/studio.hdr' background={false} />
            // TODO 책 오픈 하면 x 축 눞히기 // TODO: 책 펼칠때 가운데로 이동
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
