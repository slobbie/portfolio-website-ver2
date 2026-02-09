import { useRef } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  let result = (((v - min) % range) + range) % range;
  result += min;
  return result;
};

const ParallaxText = ({ children, baseVelocity = 5 }: ParallaxProps) => {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const xValue = useRef(0);

  const rawX = useSpring(0, { stiffness: 100, damping: 30 });

  // 스크롤 변화량에 따라 x 이동
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const delta = latest - lastScrollY.current;
    lastScrollY.current = latest;

    // 스크롤 방향에 따라 이동
    xValue.current += delta * baseVelocity * 0.01;
    rawX.set(wrap(-25, 0, xValue.current));
  });

  const x = useTransform(rawX, (v) => `${v}%`);

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          x,
          display: 'inline-flex',
          gap: '2rem',
          fontSize: '2.5rem',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

export default ParallaxText;
