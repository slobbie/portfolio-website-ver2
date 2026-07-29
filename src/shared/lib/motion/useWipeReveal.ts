import type { Variants } from 'framer-motion';

import {
  MOTION_DURATION,
  MOTION_EASING,
  type MotionDuration,
} from '@/shared/lib/motion/motion.tokens';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

export type WipeRevealOptions = {
  duration?: MotionDuration;
  delay?: number;
};

/**
 * 좌에서 우로 열리는 와이프입니다.
 *
 * 자간이 넓은 대문자 메타 라벨에서 글자가 순서대로 찍히는 인상을 줍니다.
 * 레이아웃을 건드리지 않도록 `clipPath`만 사용합니다.
 */
export function useWipeReveal({ duration = 'base', delay = 0 }: WipeRevealOptions = {}) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  const variants: Variants = {
    hidden: {
      opacity: enabled ? 0 : 1,
      clipPath: enabled ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: enabled ? MOTION_DURATION[duration] : 0,
        delay: enabled ? delay + mountDelay : 0,
        ease: MOTION_EASING,
      },
    },
  };

  return {
    ref,
    initial: enabled ? 'hidden' : false,
    animate: isVisible ? 'visible' : 'hidden',
    variants,
  } as const;
}
