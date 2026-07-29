import type { Variants } from 'framer-motion';

import {
  MOTION_DURATION,
  MOTION_EASING,
  MOTION_SPRING,
  MOTION_STAGGER,
} from '@/shared/lib/motion/motion.tokens';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

export type CharRevealOptions = {
  /** 글자 하나가 올라오는 거리(px) */
  travel?: number;
  delayChildren?: number;
};

/**
 * 글자를 하나씩 순서대로 올려 보냅니다.
 *
 * 페이지에서 시선이 처음 닿는 한 곳에만 사용합니다. 여러 곳에 쓰면 읽는 흐름을
 * 방해합니다. 화면에 읽히는 원문은 호출부에서 `aria-label`로 유지해야 합니다.
 */
export function useCharReveal({ travel = 28, delayChildren = 0 }: CharRevealOptions = {}) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  const charVariants: Variants = {
    hidden: { opacity: 0, y: enabled ? travel : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: enabled ? MOTION_SPRING : { duration: 0 },
        default: {
          duration: enabled ? MOTION_DURATION.slow : 0,
          ease: MOTION_EASING,
        },
      },
    },
  };

  return {
    group: {
      ref,
      initial: enabled ? 'hidden' : false,
      animate: isVisible ? 'visible' : 'hidden',
      variants: {
        hidden: {},
        visible: {
          transition: {
            delayChildren: enabled ? delayChildren + mountDelay : 0,
            staggerChildren: enabled ? MOTION_STAGGER.char : 0,
          },
        },
      } satisfies Variants,
    },
    char: { variants: charVariants },
  } as const;
}
