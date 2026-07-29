/**
 * 미디어 쿼리는 CSS 변수를 읽을 수 없어(`@media (max-width: var(--x))` 불가)
 * 브레이크포인트만 TypeScript 상수로 둡니다. 색·간격·타이포는 `global.css`의
 * CSS 변수를 사용합니다.
 */
export const BREAKPOINT = {
  tablet: 900,
  mobile: 640,
} as const;

export const media = {
  tablet: `@media (max-width: ${BREAKPOINT.tablet}px)`,
  mobile: `@media (max-width: ${BREAKPOINT.mobile}px)`,
  /**
   * 호버 상태는 이 안에서만 정의합니다.
   * 터치 기기는 탭한 요소에 호버가 걸린 채로 남아 눌린 것처럼 보입니다.
   */
  hover: '@media (hover: hover) and (pointer: fine)',
} as const;

export type Breakpoint = keyof typeof BREAKPOINT;
