import { useCallback, useEffect, useState } from 'react';

import { subscribeToScroll } from '@/shared/lib/motion';

type FocusAxis = 'y' | 'x';

/**
 * 지금 읽고 있는 영역인지 판정합니다.
 *
 * 화면 한가운데를 가로지르는 선을 긋고, 그 선을 품고 있는 요소를 활성으로 봅니다.
 * 항목들이 서로 겹치지 않으므로 이 판정만으로 한 번에 하나만 활성이 되며,
 * 항목끼리 값을 주고받거나 부모가 목록 전체를 들고 있을 필요가 없습니다.
 *
 * 활성 상태를 호버에만 맡기지 않는 이유는, 호버가 포인터 있는 환경에서만 동작하고
 * 그마저도 손을 올린 동안에만 남기 때문입니다. 읽는 위치는 스크롤이 정합니다.
 *
 * @param axis 가로로 넘기는 목록은 `x`를 씁니다.
 */
export function useViewportFocus(axis: FocusAxis = 'y') {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [focused, setFocused] = useState(false);

  const ref = useCallback((node: HTMLElement | null) => setElement(node), []);

  useEffect(() => {
    if (!element) {
      return;
    }

    const check = () => {
      const rect = element.getBoundingClientRect();

      /*
       * 가로 판정에서도 화면 안에 있는지 먼저 확인합니다. 세로로 한참 떨어진
       * 요소가 가로 좌표만 맞아 활성으로 잡히는 것을 막습니다.
       */
      const onScreen =
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.left < window.innerWidth;

      const [start, end, viewport] =
        axis === 'y'
          ? [rect.top, rect.bottom, window.innerHeight]
          : [rect.left, rect.right, window.innerWidth];

      const line = viewport / 2;

      setFocused(onScreen && start <= line && end > line);
    };

    check();

    return subscribeToScroll(check);
  }, [element, axis]);

  return { ref, focused } as const;
}
