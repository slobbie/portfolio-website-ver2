import { useState } from 'react';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import styled from '@emotion/styled';

import SandText from './components/SandText';

const imgPath = `url(${import.meta.env.BASE_URL}images/bg1.jpg)`;

const commonBackgroundStyle = {
  backgroundImage: imgPath,
  backgroundRepeat: 'no-repeat',
};

const IntroduceSection = () => {
  const { scrollYProgress } = useScroll();
  const [showTextSection, setShowTextSection] = useState(false);
  const [showHeroText, setShowHeroText] = useState(true);

  // bg가 완전히 올라간 후에만 텍스트 섹션 표시 + 히어로 텍스트 트리거
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.22 && !showTextSection) {
      setShowTextSection(true);
    }
    if (latest < 0.18 && showTextSection) {
      setShowTextSection(false);
    }
    // 0.60 도달 시 히어로 텍스트 트리거로 사라짐
    if (latest >= 0.6 && showHeroText) {
      setShowHeroText(false);
    }
    if (latest < 0.58 && !showHeroText) {
      setShowHeroText(true);
    }
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 30,
  });

  const rawWidth = useTransform(scrollYProgress, [0.03, 0.15], [0, 200]);
  const width = useSpring(rawWidth, {
    stiffness: 100,
    damping: 30,
  });

  // const height = useTransform(scrollYProgress, [0.05, 0.2], [0, 400]);

  const rawYPosition = useTransform(scrollYProgress, [0.15, 0.2], [0, -1000]);
  const yPosition = useSpring(rawYPosition, {
    stiffness: 100,
    damping: 30,
  });

  const backgroundColorChange = useTransform(
    scrollYProgress,
    [0.15, 0.22],
    ['transparent', 'rgb(16, 16, 16)'],
  );

  const textColorChange = useTransform(
    scrollYProgress,
    [0.15, 0.22],
    ['#fff', '#fff'],
  );

  const rawScale = useTransform(scrollYProgress, [0.18, 0.25], [1, 10]);
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
  });
  const sectionOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.22], [1, 0]);

  // 텍스트 스택 애니메이션
  // 각 텍스트가 중앙에서 등장 → 상단으로 이동하며 쌓임
  // 스크롤 구간: 0.22 ~ 0.45 (텍스트 쌓임) → 0.45 ~ 0.55 (전체 퇴장)

  // 라인 0: I'm Frontend Developer (강조 - 다른 텍스트 떨어진 후 홀로 남음)
  // 0.22~0.26: 등장, 0.48~0.52: 중앙으로 이동, 0.52~0.60: 두근두근 3번 (크게), 0.60: 트리거로 사라짐
  const rawLine0Y = useTransform(
    scrollYProgress,
    [0.22, 0.26, 0.48, 0.52],
    [100, -180, -180, 0],
  );
  const line0Y = useSpring(rawLine0Y, { stiffness: 100, damping: 30 });

  // 두근두근 3번 (크게 역동적으로)
  const rawLine0Scale = useTransform(
    scrollYProgress,
    [0.52, 0.535, 0.55, 0.565, 0.58, 0.595],
    [1, 1.4, 0.9, 1.5, 0.85, 1.6],
  );
  const line0Scale = useSpring(rawLine0Scale, { stiffness: 400, damping: 12 });

  // 라인 1: Fast delivery, pixel-perfect quality
  const rawLine1Y = useTransform(
    scrollYProgress,
    [0.26, 0.3, 0.45],
    [100, -130, -130],
  );
  const line1Y = useSpring(rawLine1Y, { stiffness: 100, damping: 30 });
  const line1Opacity = useTransform(scrollYProgress, [0.26, 0.28], [0, 1]);

  // 라인 2: Cross Platform
  const rawLine2Y = useTransform(
    scrollYProgress,
    [0.3, 0.34, 0.45],
    [100, -60, -60],
  );
  const line2Y = useSpring(rawLine2Y, { stiffness: 100, damping: 30 });
  const line2Opacity = useTransform(scrollYProgress, [0.3, 0.32], [0, 1]);

  // 라인 3: Web · Mobile · 3D Interactive
  const rawLine3Y = useTransform(
    scrollYProgress,
    [0.34, 0.38, 0.45],
    [100, -10, -10],
  );
  const line3Y = useSpring(rawLine3Y, { stiffness: 100, damping: 30 });
  const line3Opacity = useTransform(scrollYProgress, [0.34, 0.36], [0, 1]);

  // 라인 4: Real-time Data
  const rawLine4Y = useTransform(
    scrollYProgress,
    [0.38, 0.42, 0.45],
    [100, 40, 40],
  );
  const line4Y = useSpring(rawLine4Y, { stiffness: 100, damping: 30 });
  const line4Opacity = useTransform(scrollYProgress, [0.38, 0.4], [0, 1]);

  // 라인 5: WebSocket · STT
  const rawLine5Y = useTransform(scrollYProgress, [0.42, 0.45], [100, 90]);
  const line5Y = useSpring(rawLine5Y, { stiffness: 100, damping: 30 });
  const line5Opacity = useTransform(scrollYProgress, [0.42, 0.44], [0, 1]);

  // 텍스트 컨테이너 opacity (bg1 구간에서는 숨김)
  const textContainerOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.22],
    [0, 1],
  );

  const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${width}px, black ${width}px)`;

  return (
    <Container>
      <div
        style={{
          width: '100vw',
          height: '500vh',
          backgroundImage: `url(${import.meta.env.BASE_URL}images/bg.png)`,
        }}
      >
        <motion.div
          className='bg1'
          transition={{
            opacity: { duration: 0.3, ease: 'easeInOut' },
          }}
          style={{
            ...commonBackgroundStyle,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '89%',
            height: '78%',
            borderRadius: 15,
            opacity: opacity,
            pointerEvents: 'none',
            backgroundImage: imgPath,
          }}
        />
        <motion.div
          style={{
            width: '89%',
            height: '78%',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 2,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 15,
                display: 'flex',
                gap: '10px',
                justifyContent: 'space-between',
                backgroundColor: backgroundColorChange,
                scale: scale,
                opacity: sectionOpacity,
              }}
            >
              <motion.div
                className='bg2'
                style={{
                  ...commonBackgroundStyle,
                  backgroundSize: 'calc(300% + 20px) 100%',
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  y: yPosition,
                  backgroundImage: imgPath,
                  backgroundPosition: '0% center',
                }}
              />
              <motion.div
                className='bg3'
                style={{
                  ...commonBackgroundStyle,
                  backgroundSize: 'calc(300% + 20px) 100%',
                  backgroundPosition: '50% center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: imgPath,
                  position: 'relative',
                  WebkitMaskImage: maskImage,
                  maskImage: maskImage,
                }}
              />
              <motion.div
                className='bg4'
                style={{
                  ...commonBackgroundStyle,
                  backgroundSize: 'calc(300% + 20px) 100%',
                  backgroundPosition: '100% center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  y: yPosition,
                  backgroundImage: imgPath,
                }}
              />
            </motion.div>
          </div>
          <motion.div
            style={{
              position: 'fixed',
              zIndex: 3,
              bottom: 30,
              right: 30,
              display: 'flex',
              flexDirection: 'column',
              scale: scale,
              opacity: titleOpacity,
            }}
          >
            <motion.span
              style={{
                color: textColorChange,
                fontSize: '6em',
              }}
            >
              Organized
            </motion.span>
            <motion.span
              style={{
                color: textColorChange,
                fontSize: '2em',
                textAlign: 'right',
              }}
            >
              my work
            </motion.span>
          </motion.div>
        </motion.div>
        {/* 텍스트 스택 애니메이션 컨테이너 */}
        {showTextSection && (
          <motion.div
            style={{
              width: '100%',
              height: '100vh',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgb(16, 16, 16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              pointerEvents: 'none',
              opacity: textContainerOpacity,
              backgroundImage: `url(${import.meta.env.BASE_URL}images/bg.png)`,
            }}
          >
            {/* 라인 0: I'm Frontend Developer - 부서지지 않고 강조됨 */}
            <AnimatePresence>
              {showHeroText && (
                <motion.span
                  key='hero-text'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 3 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    fontSize: '3em',
                    fontWeight: 'bold',
                    color: '#fff',
                    y: line0Y,
                    scale: line0Scale,
                  }}
                >
                  I'm Frontend Developer
                </motion.span>
              )}
            </AnimatePresence>

            {/* 라인 1: Fast delivery, pixel-perfect quality */}
            <motion.span
              style={{
                position: 'absolute',
                fontSize: '1.5em',
                color: 'rgba(255, 255, 255, 0.7)',
                y: line1Y,
                opacity: line1Opacity,
              }}
            >
              <SandText scrollProgress={scrollYProgress} triggerAt={0.46}>
                Fast delivery, pixel-perfect quality
              </SandText>
            </motion.span>

            {/* 라인 2: Cross Platform */}
            <motion.span
              style={{
                position: 'absolute',
                fontSize: '3em',
                fontWeight: 'bold',
                color: '#fff',
                y: line2Y,
                opacity: line2Opacity,
              }}
            >
              <SandText scrollProgress={scrollYProgress} triggerAt={0.46}>
                Cross Platform
              </SandText>
            </motion.span>

            {/* 라인 3: Web · Mobile · 3D Interactive */}
            <motion.span
              style={{
                position: 'absolute',
                fontSize: '1.5em',
                color: 'rgba(255, 255, 255, 0.7)',
                y: line3Y,
                opacity: line3Opacity,
              }}
            >
              <SandText scrollProgress={scrollYProgress} triggerAt={0.46}>
                Web · Mobile · 3D Interactive
              </SandText>
            </motion.span>

            {/* 라인 4: Real-time Data */}
            <motion.span
              style={{
                position: 'absolute',
                fontSize: '3em',
                fontWeight: 'bold',
                color: '#fff',
                y: line4Y,
                opacity: line4Opacity,
              }}
            >
              <SandText scrollProgress={scrollYProgress} triggerAt={0.46}>
                Real-time Data
              </SandText>
            </motion.span>

            {/* 라인 5: WebSocket · STT */}
            <motion.span
              style={{
                position: 'absolute',
                fontSize: '1.5em',
                color: 'rgba(255, 255, 255, 0.7)',
                y: line5Y,
                opacity: line5Opacity,
              }}
            >
              <SandText scrollProgress={scrollYProgress} triggerAt={0.46}>
                WebSocket · STT
              </SandText>
            </motion.span>
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default IntroduceSection;

const Container = styled.section`
  flex: 1;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(16, 16, 16);
`;
