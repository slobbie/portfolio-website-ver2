/**
 * 사이트 전역 모션 토큰.
 * 이징은 하나만 두고, 이동 거리와 지속 시간의 조합으로 위계를 표현합니다.
 */
export const MOTION_EASING = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  /** 호버·액티브 등 즉각적인 상태 변화 */
  fast: 0.18,
  /** 섹션과 카드 등장 */
  base: 0.52,
  /** 히어로와 다이어그램 등 강조 지점 */
  slow: 0.68,
} as const;

/** 등장 시 아래에서 위로 이동하는 거리(px). 값이 클수록 상위 위계입니다. */
export const MOTION_TRAVEL = {
  lg: 40,
  md: 28,
  sm: 18,
} as const;

/**
 * 위치 이동은 스프링으로 처리해 페이지 전체가 같은 물성으로 움직이게 합니다.
 * 감쇠를 충분히 둬서 흔들리지 않고 한 번만 부드럽게 안착합니다.
 */
export const MOTION_SPRING = {
  type: 'spring',
  stiffness: 130,
  damping: 20,
  mass: 0.9,
} as const;

export const MOTION_STAGGER = {
  hero: 0.11,
  /** 카드처럼 덩치 큰 항목. 간격이 좁으면 한꺼번에 나온 것처럼 보입니다. */
  block: 0.14,
  list: 0.06,
  /** 다이어그램 줄 단위 */
  line: 0.04,
  /** 글자 단위 */
  char: 0.03,
} as const;

/**
 * 최초 렌더에서 화면에 이미 들어와 있는 요소들에 걸리는 지연의 전체 폭(초).
 *
 * 스크롤 중에는 요소가 판정선을 차례로 지나가며 순서가 생기지만, 첫 화면에는 그
 * 순서가 없어 한꺼번에 재생됩니다. 화면 위쪽 요소는 0, 아래쪽 요소는 이 값에
 * 가까운 지연을 받아 위에서 아래로 이어집니다.
 */
export const MOTION_MOUNT_STAGGER_SPAN = 0.4;

/**
 * 등장 판정선. 요소 상단이 화면 높이의 이 비율보다 위로 올라오면 재생합니다.
 *
 * 요소 높이 대비 비율로 판정하면 짧은 요소일수록 화면 최하단에서 재생되므로,
 * 뷰포트 위치 기준으로 통일합니다. 화면 하단에서 움직이면 주변시에 걸려 시선이
 * 분산되고, 중앙까지 올리면 화면 아래 절반이 비어 보입니다.
 */
export const MOTION_REVEAL_LINE_RATIO = 0.65;

export const MOTION_BLUR = '6px';

export type MotionScale = keyof typeof MOTION_TRAVEL;
export type MotionDuration = keyof typeof MOTION_DURATION;
export type MotionStagger = keyof typeof MOTION_STAGGER;
