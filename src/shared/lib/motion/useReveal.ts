import type { Variants } from 'framer-motion';

import {
  MOTION_BLUR,
  MOTION_DURATION,
  MOTION_EASING,
  MOTION_SPRING,
  MOTION_TRAVEL,
  type MotionDuration,
  type MotionScale,
} from '@/shared/lib/motion/motion.tokens';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

export type RevealOptions = {
  /** 지속 시간 토큰. 기본값은 scale에 따라 결정됩니다. */
  duration?: MotionDuration;
  /** 블러 진입. 리페인트 비용이 커서 히어로처럼 요소가 적은 곳에만 사용합니다. */
  blur?: boolean;
  delay?: number;
};

const defaultDuration = (scale: MotionScale): MotionDuration =>
  scale === 'lg' ? 'slow' : 'base';

export function createRevealVariants(
  scale: MotionScale,
  enabled: boolean,
  { duration, blur = false, delay = 0 }: RevealOptions = {},
): Variants {
  const useBlur = blur && enabled;

  return {
    hidden: {
      opacity: 0,
      y: enabled ? MOTION_TRAVEL[scale] : 0,
      ...(useBlur ? { filter: `blur(${MOTION_BLUR})` } : null),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(useBlur ? { filter: 'blur(0px)' } : null),
      transition: {
        delay: enabled ? delay : 0,
        /* 위치는 스프링, 나머지는 시간 기반으로 나눠 투명도가 튀지 않게 합니다. */
        y: enabled ? MOTION_SPRING : { duration: 0 },
        default: {
          duration: enabled ? MOTION_DURATION[duration ?? defaultDuration(scale)] : 0,
          ease: MOTION_EASING,
        },
      },
    },
  };
}

/**
 * 단일 요소를 한 번 등장시킵니다.
 * 반환값을 `motion` 요소에 그대로 펼쳐 사용합니다.
 */
export function useReveal(scale: MotionScale = 'sm', options: RevealOptions = {}) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  return {
    ref,
    initial: enabled ? 'hidden' : false,
    animate: isVisible ? 'visible' : 'hidden',
    variants: createRevealVariants(scale, enabled, {
      ...options,
      delay: (options.delay ?? 0) + mountDelay,
    }),
  } as const;
}
