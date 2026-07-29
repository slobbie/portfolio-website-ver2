import type { Variants } from 'framer-motion';

import {
  MOTION_STAGGER,
  type MotionScale,
  type MotionStagger,
} from '@/shared/lib/motion/motion.tokens';
import { createRevealVariants, type RevealOptions } from '@/shared/lib/motion/useReveal';
import { useMotionEnabled } from '@/shared/lib/motion/useMotionEnabled';
import { useRevealTrigger } from '@/shared/lib/motion/useRevealTrigger';

export type RevealGroupOptions = RevealOptions & {
  stagger?: MotionStagger;
  delayChildren?: number;
};

/**
 * 한 화면에 함께 들어오는 목록을 차례로 등장시킵니다.
 *
 * 서로 멀리 떨어진 블록에는 사용하지 않습니다. 부모가 화면에 들어오는 순간
 * 아직 보이지 않는 자식까지 모두 재생되기 때문입니다. 그 경우에는 `useReveal`을
 * 각 블록에 개별로 붙입니다.
 */
export function useRevealGroup(
  scale: MotionScale = 'sm',
  { stagger = 'list', delayChildren = 0, ...revealOptions }: RevealGroupOptions = {},
) {
  const enabled = useMotionEnabled();
  const { ref, isVisible, mountDelay } = useRevealTrigger();

  const groupVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: enabled ? delayChildren + mountDelay : 0,
        staggerChildren: enabled ? MOTION_STAGGER[stagger] : 0,
      },
    },
  };

  return {
    group: {
      ref,
      initial: enabled ? 'hidden' : false,
      animate: isVisible ? 'visible' : 'hidden',
      variants: groupVariants,
    },
    /** 중첩 컨테이너용. 자체 트리거 없이 부모의 재생 순서만 이어받습니다. */
    nested: { variants: groupVariants },
    item: { variants: createRevealVariants(scale, enabled, revealOptions) },
  } as const;
}
