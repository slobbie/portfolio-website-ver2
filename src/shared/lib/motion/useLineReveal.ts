import type { Variants } from 'framer-motion';

import {
  MOTION_DURATION,
  MOTION_EASING,
  type MotionDuration,
} from '@/shared/lib/motion/motion.tokens';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

/** 구분선 스케일을 전달하는 CSS 변수 이름. 스타일에서 같은 이름을 사용해야 합니다. */
export const LINE_SCALE_VARIABLE = '--line-scale';

export type LineRevealOptions = {
  duration?: MotionDuration;
  delay?: number;
};

/**
 * 구분선을 왼쪽에서 오른쪽으로 그립니다.
 *
 * `border`는 애니메이션할 수 없어 CSS 변수만 전달하고, 실제 선은 스타일 쪽
 * 의사요소가 `scaleX(var(--line-scale, 1))`로 그립니다. 요소를 추가하지 않으므로
 * 레이아웃이 바뀌지 않고, 모션이 꺼지면 기본값 1로 처음부터 그려진 상태가 됩니다.
 */
export function useLineReveal({ duration = 'base', delay = 0 }: LineRevealOptions = {}) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  const variants = {
    hidden: { [LINE_SCALE_VARIABLE]: enabled ? 0 : 1 },
    visible: {
      [LINE_SCALE_VARIABLE]: 1,
      transition: {
        duration: enabled ? MOTION_DURATION[duration] : 0,
        delay: enabled ? delay + mountDelay : 0,
        ease: MOTION_EASING,
      },
    },
  } as Variants;

  return {
    ref,
    initial: enabled ? 'hidden' : false,
    animate: isVisible ? 'visible' : 'hidden',
    variants,
  } as const;
}
