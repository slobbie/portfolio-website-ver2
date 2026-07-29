import { useMotionEnabled } from '@/shared/lib/motion';

import {
  INTERACTION_DURATION,
  INTERACTION_EASING,
  INTERACTION_LIFT,
  INTERACTION_PRESS_SCALE,
  type InteractionLift,
} from '@/shared/lib/interaction/interaction.tokens';

export type PressOptions = {
  /** 호버 시 떠오르는 정도. `none`은 눌림만 남깁니다. */
  lift?: InteractionLift | 'none';
  /** 클릭 순간의 눌림. 링크처럼 이동이 목적인 요소는 꺼도 됩니다. */
  press?: boolean;
};

/**
 * 호버로 떠오르고 클릭에 눌리는 반응을 붙입니다.
 *
 * 반환값에 상태와 ref가 없어 하나를 만들어 여러 요소에 나눠 써도 됩니다.
 *
 * 등장 모션(`useReveal`)이 걸린 요소에는 쓰지 않습니다. 둘 다 `y`를 다뤄
 * 등장 도중 호버가 들어오면 서로 값을 덮습니다. 그런 요소는 색과 선으로
 * 반응시키고, 이 훅은 태그·링크처럼 등장 대상이 아닌 말단 요소에 씁니다.
 */
export function usePress({ lift = 'sm', press = true }: PressOptions = {}) {
  const enabled = useMotionEnabled();

  if (!enabled) {
    return {} as const;
  }

  return {
    whileHover: lift === 'none' ? undefined : { y: INTERACTION_LIFT[lift] },
    whileTap: press ? { scale: INTERACTION_PRESS_SCALE } : undefined,
    transition: { duration: INTERACTION_DURATION.hover, ease: INTERACTION_EASING },
  } as const;
}
