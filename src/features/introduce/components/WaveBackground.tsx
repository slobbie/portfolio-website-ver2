import { useRef, useMemo } from 'react';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

import {
  wavePointsVertexShader,
  wavePointsFragmentShader,
} from '../shaders/wave';

type TSectionType = 'full' | 'left' | 'center' | 'right';

// 섹션별 설정
const SECTION_CONFIG: Record<TSectionType, { offset: number; width: number }> =
  {
    full: { offset: 0, width: 1 },
    left: { offset: 0, width: 1 / 3 },
    center: { offset: 1 / 3, width: 1 / 3 },
    right: { offset: 2 / 3, width: 1 / 3 },
  };

// 웨이브 라인 설정
const LINE_COUNT = 80; // 라인 개수
const POINTS_PER_LINE = 200; // 라인당 점 개수

interface IWavePointsProps {
  scrollProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  section: TSectionType;
}

const WavePoints = ({ scrollProgress, opacity, section }: IWavePointsProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const sectionConfig = SECTION_CONFIG[section];

  // 점들의 위치와 라인 인덱스 생성
  const { positions, lineIndices } = useMemo(() => {
    const positions: number[] = [];
    const lineIndices: number[] = [];

    const width = viewport.width;
    const height = viewport.height;

    for (let lineIdx = 0; lineIdx < LINE_COUNT; lineIdx++) {
      // 라인의 y 위치 (위에서 아래로 균등 분포)
      const baseY = (lineIdx / (LINE_COUNT - 1) - 0.5) * height;

      for (let pointIdx = 0; pointIdx < POINTS_PER_LINE; pointIdx++) {
        // 점의 x 위치 (왼쪽에서 오른쪽으로)
        const x = (pointIdx / (POINTS_PER_LINE - 1) - 0.5) * width;

        positions.push(x, baseY, 0);
        lineIndices.push(lineIdx);
      }
    }

    return {
      positions: new Float32Array(positions),
      lineIndices: new Float32Array(lineIndices),
    };
  }, [viewport.width, viewport.height]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: 1.0 },
      uFrequency: { value: 1.0 },
      uOpacity: { value: 1.0 },
      uScrollProgress: { value: 0 },
      uViewportSize: {
        value: new THREE.Vector2(viewport.width, viewport.height),
      },
      uSectionOffset: { value: new THREE.Vector2(sectionConfig.offset, 0) },
      uSectionWidth: { value: sectionConfig.width },
      uColor: { value: new THREE.Color(0.9, 0.9, 0.9) }, // 밝은 회색
    }),
    [
      viewport.width,
      viewport.height,
      sectionConfig.offset,
      sectionConfig.width,
    ],
  );

  // 스크롤 값 업데이트
  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uScrollProgress.value = latest;
    }
  });

  // opacity 값 업데이트
  useMotionValueEvent(opacity, 'change', (latest) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uOpacity.value = latest;
    }
  });

  // 매 프레임 time 업데이트
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' args={[positions, 3]} />
        <bufferAttribute
          attach='attributes-lineIndex'
          args={[lineIndices, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={wavePointsVertexShader}
        fragmentShader={wavePointsFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
};

interface IWaveBackgroundProps {
  scrollProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  section?: TSectionType;
  className?: string;
  style?: React.CSSProperties;
}

const WaveBackground = ({
  scrollProgress,
  opacity,
  section = 'full',
  className,
  style,
}: IWaveBackgroundProps) => {
  return (
    <div className={className} style={{ ...style, background: '#101010' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <WavePoints
          scrollProgress={scrollProgress}
          opacity={opacity}
          section={section}
        />
      </Canvas>
    </div>
  );
};

export default WaveBackground;
export type { TSectionType };
