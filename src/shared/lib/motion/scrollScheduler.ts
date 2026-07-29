type Subscriber = () => void;

const subscribers = new Set<Subscriber>();
let frame = 0;
let listening = false;

const flush = () => {
  frame = 0;
  for (const notify of subscribers) {
    notify();
  }
};

const schedule = () => {
  if (frame !== 0) {
    return;
  }
  frame = window.requestAnimationFrame(flush);
};

/**
 * 스크롤 위치로 하는 판정을 한곳에서 모아 실행합니다.
 *
 * 등장 시점과 현재 보고 있는 영역을 모두 이 방식으로 잽니다. 요소마다 스크롤
 * 리스너를 붙이면 페이지 전체에서 100개가 넘게 생기므로, 리스너와 프레임 예약은
 * 하나만 두고 구독자에게 나눠 알립니다.
 */
export function subscribeToScroll(notify: Subscriber) {
  subscribers.add(notify);

  if (!listening) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    listening = true;
  }

  return () => {
    subscribers.delete(notify);

    if (subscribers.size === 0 && listening) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      listening = false;

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    }
  };
}
