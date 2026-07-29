/**
 * 상태 반응(마이크로 인터랙션) 모음.
 *
 * `shared/lib/motion`이 "요소가 어떻게 나타나는가"를 다룬다면, 여기서는
 * "사용자 입력에 어떻게 반응하는가"를 다룹니다. 둘을 나눈 이유는 한 요소에
 * 동시에 걸릴 수 있어서입니다. 같은 속성을 두 쪽에서 건드리면 서로 값을 덮으므로,
 * 등장이 걸린 요소에는 이동이 아니라 색과 선으로 반응시킵니다.
 *
 * 반응은 두 층으로 나뉩니다.
 *
 * - CSS 층: 상태만 있으면 되는 색·선·불투명도 전환. `--dur-*`, `--ease`, `--lift`,
 *   `--shift` 토큰과 `media.hover`를 씁니다. 자바스크립트가 필요 없습니다.
 * - 훅 층: 포인터 좌표나 시간이 필요한 반응. 여기 있는 훅들이며, 값은 MotionValue나
 *   CSS 변수로만 흘러 리렌더를 만들지 않습니다.
 */
export {
  COUNT_UP_DURATION,
  INTERACTION_DURATION,
  INTERACTION_EASING,
  INTERACTION_LIFT,
  INTERACTION_PRESS_SCALE,
  MAGNET_STRENGTH,
  POINTER_SPRING,
  type InteractionLift,
} from '@/shared/lib/interaction/interaction.tokens';
export { canHover } from '@/shared/lib/interaction/pointer';
export { useCountUp } from '@/shared/lib/interaction/useCountUp';
export { useMagnetic } from '@/shared/lib/interaction/useMagnetic';
export {
  SPOT_VARIABLE,
  SPOT_X_VARIABLE,
  usePointerSpot,
} from '@/shared/lib/interaction/usePointerSpot';
export { usePress, type PressOptions } from '@/shared/lib/interaction/usePress';
export { useViewportFocus } from '@/shared/lib/interaction/useViewportFocus';
