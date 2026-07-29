import { MOTION_EASING } from '@/shared/lib/motion';

/**
 * 상태 반응 토큰.
 *
 * `global.css`의 `--dur-*`, `--ease`와 같은 값입니다. Framer Motion은 초 단위를
 * 쓰고 CSS 변수를 읽지 못해 여기서 한 번 더 선언합니다. 값을 바꿀 때는 두 곳을
 * 함께 고칩니다.
 */
export const INTERACTION_DURATION = {
  tap: 0.09,
  hover: 0.16,
  state: 0.24,
} as const;

export const INTERACTION_EASING = MOTION_EASING;

/** 호버 시 떠오르는 거리(px). CSS의 `--lift`와 같은 값입니다. */
export const INTERACTION_LIFT = {
  sm: -2,
  md: -4,
} as const;

/** 눌린 느낌만 주는 정도. 이보다 작으면 글자가 뭉개져 보입니다. */
export const INTERACTION_PRESS_SCALE = 0.98;

/**
 * 포인터를 따라가는 값에 쓰는 스프링.
 *
 * 등장 모션보다 훨씬 단단하게 잡습니다. 포인터 추적이 느리면 손과 화면이
 * 어긋난 것처럼 느껴집니다.
 */
export const POINTER_SPRING = {
  stiffness: 260,
  damping: 26,
  mass: 0.35,
} as const;

/**
 * 자석 효과로 끌려가는 최대 거리(px).
 *
 * 글자 높이가 20px 안팎인 링크 기준입니다. 이보다 크면 글줄이 흔들려 읽기 어렵습니다.
 * 더 큰 대상에는 호출부에서 값을 올려 씁니다.
 */
export const MAGNET_STRENGTH = 4;

/** 숫자가 목표값까지 올라가는 데 걸리는 시간(ms). */
export const COUNT_UP_DURATION = 900;

export type InteractionLift = keyof typeof INTERACTION_LIFT;
