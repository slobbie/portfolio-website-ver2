import { useCallback, type Ref } from 'react';

function assign<T>(ref: Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
}

/**
 * 두 훅이 같은 요소를 봐야 할 때 ref를 하나로 합칩니다.
 *
 * React는 요소마다 ref를 하나만 받습니다. 등장 판정과 활성 판정처럼 서로 다른
 * 훅이 같은 요소의 위치를 재야 하는 경우, 한쪽을 자식 요소로 옮기면 재는 범위가
 * 달라져 판정이 어긋납니다.
 *
 * 개수를 둘로 고정한 것은 의존성 배열을 그대로 두기 위해서입니다. 가변 인자로
 * 받으면 매 렌더 새 함수가 만들어져, React가 ref를 null로 비웠다 다시 넣는
 * 동안 훅들의 상태가 초기화됩니다.
 */
export function useMergedRefs<T>(first: Ref<T> | undefined, second: Ref<T> | undefined) {
  return useCallback(
    (node: T | null) => {
      assign(first, node);
      assign(second, node);
    },
    [first, second],
  );
}
