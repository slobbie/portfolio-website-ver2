import { useCallback, useEffect, useState } from 'react';

import { canHover } from '@/shared/lib/interaction/pointer';

/** 요소 안에서 포인터의 가로 위치(0~100%). */
export const SPOT_X_VARIABLE = '--spot-x';
/** 포인터가 요소 위에 있는지(0 또는 1). 페이드용입니다. */
export const SPOT_VARIABLE = '--spot';

/**
 * 포인터의 가로 위치를 CSS 변수로 흘려보냅니다.
 *
 * 값을 상태로 두지 않고 요소의 인라인 스타일에 직접 씁니다. 포인터는 초당
 * 수십 번 움직이는데 그때마다 리렌더가 일어나면 다른 모션까지 끊깁니다.
 * 어떻게 보일지는 이 훅이 정하지 않고, 변수를 읽는 쪽 CSS가 정합니다.
 */
export function usePointerSpot() {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => setElement(node), []);

  useEffect(() => {
    /* 터치 기기는 포인터가 머무르지 않아 값이 마지막 탭 지점에 멈춰 남습니다. */
    if (!element || !canHover()) {
      return;
    }

    let frame = 0;
    let ratio = 0;

    const apply = () => {
      frame = 0;
      element.style.setProperty(SPOT_X_VARIABLE, `${ratio * 100}%`);
    };

    const move = (event: PointerEvent) => {
      const { left, width } = element.getBoundingClientRect();

      if (width === 0) {
        return;
      }

      ratio = Math.min(Math.max((event.clientX - left) / width, 0), 1);

      if (frame === 0) {
        frame = window.requestAnimationFrame(apply);
      }
    };

    const enter = () => element.style.setProperty(SPOT_VARIABLE, '1');
    const leave = () => element.style.setProperty(SPOT_VARIABLE, '0');

    element.addEventListener('pointermove', move);
    element.addEventListener('pointerenter', enter);
    element.addEventListener('pointerleave', leave);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerenter', enter);
      element.removeEventListener('pointerleave', leave);
    };
  }, [element]);

  return ref;
}
