import { useReducedMotion } from 'framer-motion';

/**
 * 모션 재생 여부를 판단하는 단일 진입점입니다.
 *
 * 전역 CSS의 `prefers-reduced-motion` 처리는 Framer Motion이 만드는 인라인 스타일까지
 * 막지 못하므로, 모션 훅은 반드시 이 값을 거쳐 동작해야 합니다.
 */
export function useMotionEnabled() {
  return !(useReducedMotion() ?? false);
}
