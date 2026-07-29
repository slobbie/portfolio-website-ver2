import type { Variants } from 'framer-motion';

import {
  MOTION_EASING,
  MOTION_SPRING,
} from '@/shared/lib/motion/motion.tokens';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

export type MaskRevealOptions = {
  delay?: number;
};

/**
 * 글자가 선 뒤에서 밀려 올라오는 마스크 리빌입니다.
 *
 * `mask`는 `overflow: hidden` 요소에, `inner`는 그 안의 텍스트 요소에 사용합니다.
 * 마스크가 글자를 자르지 않도록 아래쪽 여백을 확보한 스타일과 함께 써야 합니다.
 */
export function useMaskReveal({ delay = 0 }: MaskRevealOptions = {}) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  const innerVariants: Variants = {
    /** 마스크가 글자 하단을 자르지 않도록 확보한 여백만큼 더 내려둡니다. */
    hidden: { y: enabled ? '115%' : 0 },
    visible: {
      y: 0,
      transition: enabled
        ? { ...MOTION_SPRING, delay: delay + mountDelay }
        : { duration: 0, delay: 0, ease: MOTION_EASING },
    },
  };

  return {
    mask: {
      ref,
      initial: enabled ? 'hidden' : false,
      animate: isVisible ? 'visible' : 'hidden',
    },
    inner: { variants: innerVariants },
  } as const;
}
