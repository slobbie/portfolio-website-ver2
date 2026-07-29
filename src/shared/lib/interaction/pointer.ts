/**
 * 포인터를 따라가는 반응을 붙여도 되는 환경인지 판단합니다.
 *
 * 터치 기기에는 포인터가 머무는 상태가 없어, 값이 마지막으로 탭한 지점에
 * 멈춘 채로 남습니다. `media.hover`가 CSS에서 하는 일과 같은 판정입니다.
 */
export const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;
