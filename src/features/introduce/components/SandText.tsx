import { useRef, useEffect, useMemo, useCallback } from 'react';

import { MotionValue, useMotionValueEvent } from 'framer-motion';
import gsap from 'gsap';

interface ISandTextProps {
  children: string;
  scrollProgress: MotionValue<number>;
  triggerAt: number;
  style?: React.CSSProperties;
  className?: string;
}

interface ICharState {
  el: HTMLSpanElement;
  targetX: number;
  targetY: number;
  targetRotation: number;
  delay: number;
}

const SandText = ({
  children,
  scrollProgress,
  triggerAt,
  style,
  className,
}: ISandTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const charStatesRef = useRef<ICharState[]>([]);
  const isInitializedRef = useRef(false);
  const hasTriggeredRef = useRef(false);

  const chars = useMemo(() => {
    return children.split('').map((char, i) => ({
      char: char === ' ' ? '\u00A0' : char,
      key: i,
    }));
  }, [children]);

  // 초기화
  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return;

    const charElements =
      containerRef.current.querySelectorAll<HTMLSpanElement>('.sand-char');

    charStatesRef.current = Array.from(charElements).map((el) => {
      const randomX = (Math.random() - 0.5) * 300; // 좌우로 넓게 흩어짐
      const randomRotation = (Math.random() - 0.5) * 180;
      const delay = Math.random() * 0.3;

      return {
        el,
        targetX: randomX,
        targetY: 120 + Math.random() * 20, // 바닥 기준 (120~140px) - 높이 차이 거의 없음
        targetRotation: randomRotation,
        delay,
      };
    });

    isInitializedRef.current = true;
  }, [chars]);

  // 떨어지는 애니메이션
  const triggerFall = useCallback(() => {
    if (!isInitializedRef.current) return;

    charStatesRef.current.forEach((state) => {
      // 초록색으로 변경
      gsap.to(state.el, {
        color: '#4ade80',
        duration: 0.15,
        delay: state.delay,
      });

      // 아래로 떨어지면서 사라짐
      gsap.to(state.el, {
        y: 500, // 화면 아래로
        rotation: state.targetRotation,
        opacity: 0,
        scale: 0.5,
        duration: 0.8 + Math.random() * 0.4,
        delay: state.delay,
        ease: 'power2.in',
      });
    });
  }, []);

  // 복원 애니메이션
  const triggerRestore = useCallback(() => {
    if (!isInitializedRef.current) return;

    charStatesRef.current.forEach((state) => {
      // 초록색 유지한 채로 위치만 복원
      gsap.to(state.el, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: state.delay * 0.3,
        ease: 'power2.out',
      });

      // 다 모인 후에 흰색으로 변경
      gsap.to(state.el, {
        color: 'inherit',
        duration: 0.3,
        delay: 0.5 + state.delay * 0.3,
        ease: 'power2.out',
      });
    });
  }, []);

  // 스크롤 트리거
  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    if (!isInitializedRef.current || charStatesRef.current.length === 0) return;

    // 떨어짐 트리거
    if (latest >= triggerAt && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      triggerFall();
    }

    // 복원
    if (latest < triggerAt - 0.02 && hasTriggeredRef.current) {
      hasTriggeredRef.current = false;
      triggerRestore();
    }
  });

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      {chars.map(({ char, key }) => (
        <span
          key={key}
          className='sand-char'
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default SandText;
