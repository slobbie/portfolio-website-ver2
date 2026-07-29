import { useCallback, useEffect, useRef, useState } from 'react';

import {
  MOTION_MOUNT_STAGGER_SPAN,
  MOTION_REVEAL_LINE_RATIO,
} from '@/shared/lib/motion/motion.tokens';
import { subscribeToScroll } from '@/shared/lib/motion/scrollScheduler';

type RevealState = {
  visible: boolean;
  /** 첫 화면에서 위에서 아래로 이어지도록 주는 지연(초) */
  delay: number;
};

const HIDDEN: RevealState = { visible: false, delay: 0 };

/**
 * 등장 시점과 첫 화면에서의 순서를 판정합니다.
 *
 * 판정 규칙은 두 가지입니다.
 *
 * 1. 마운트 시점에 화면 안이면 스크롤을 기다리지 않고 재생합니다. 스크롤 기준을
 *    그대로 쓰면 이미 화면에 들어와 있는 요소까지 숨은 채로 남아 첫 화면 아래쪽이
 *    비어 보입니다. 이때는 화면상 세로 위치를 지연으로 환산해 위에서 아래로
 *    이어지도록 합니다. 첫 화면에는 판정선을 지나는 순서가 없어 그냥 두면 여러
 *    요소가 한 덩어리로 나타납니다.
 * 2. 그 밖에는 요소 상단이 판정선을 지날 때 재생합니다. 이미 스크롤 순서가 곧
 *    재생 순서이므로 추가 지연을 주지 않습니다.
 *
 * 판정을 IntersectionObserver가 아니라 스크롤 위치 계산으로 처리하는 이유는,
 * 이 사이트의 스크롤 스파이와 같은 방식을 써서 동작을 한 가지로 통일하고 판정선을
 * 수치로 직접 검증할 수 있게 하기 위해서입니다.
 *
 * 반환하는 `ref`는 콜백 형태라 어떤 HTML 요소에도 그대로 펼쳐 쓸 수 있습니다.
 */
export function useRevealTrigger() {
  const elementRef = useRef<HTMLElement | null>(null);
  const [reveal, setReveal] = useState<RevealState>(HIDDEN);
  const revealedOnMount = useRef(false);

  const ref = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;

    if (!element || revealedOnMount.current) {
      return;
    }

    const { top } = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (top < viewportHeight) {
      const depth = Math.min(Math.max(top, 0) / viewportHeight, 1);
      revealedOnMount.current = true;
      setReveal({ visible: true, delay: depth * MOTION_MOUNT_STAGGER_SPAN });
    }
  }, []);

  const isVisible = reveal.visible;

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const check = () => {
      const element = elementRef.current;

      if (!element) {
        return;
      }

      const line = window.innerHeight * MOTION_REVEAL_LINE_RATIO;

      if (element.getBoundingClientRect().top < line) {
        setReveal({ visible: true, delay: 0 });
      }
    };

    /* 앵커로 진입하는 등 이미 스크롤된 상태로 열렸을 때를 위해 한 번 확인합니다. */
    check();

    return subscribeToScroll(check);
  }, [isVisible]);

  return { ref, isVisible, mountDelay: reveal.delay };
}
