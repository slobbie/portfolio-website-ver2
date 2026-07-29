import { useEffect, useState } from 'react';

import { subscribeToScroll } from '@/shared/lib/motion/scrollScheduler';

/** 화면 상단에서 이 비율만큼 내려온 지점을 현재 구간 판정선으로 사용합니다. */
const DEFAULT_LINE_RATIO = 0.35;

/**
 * 지정한 속성을 가진 요소들을 훑어, 판정선을 지난 마지막 요소의 값을 반환합니다.
 *
 * @param attribute 감지 대상을 표시하는 속성 이름 (예: `data-career-id`)
 */
export function useScrollSpy(attribute: string, lineRatio = DEFAULT_LINE_RATIO) {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      /*
       * 대상을 매번 다시 찾습니다.
       *
       * 한 번만 찾아 두면 그 뒤 다시 그려진 요소를 계속 붙들게 됩니다. 문서에서
       * 떨어져 나간 요소는 좌표가 모두 0이라 판정선을 지난 것으로 계산되고,
       * 결국 마지막 항목이 늘 활성으로 남습니다.
       */
      const targets = document.querySelectorAll<HTMLElement>(`[${attribute}]`);
      const line = window.innerHeight * lineRatio;
      let current: string | null = null;

      for (const target of targets) {
        if (target.getBoundingClientRect().top <= line) {
          current = target.getAttribute(attribute);
        }
      }

      setActiveValue(current);
    };

    sync();

    return subscribeToScroll(sync);
  }, [attribute, lineRatio]);

  return activeValue;
}
