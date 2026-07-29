import { useEffect, useMemo, useState } from 'react';

import { useMotionEnabled, useRevealTrigger } from '@/shared/lib/motion';

import { COUNT_UP_DURATION } from '@/shared/lib/interaction/interaction.tokens';

/**
 * 앞에 글자가 붙지 않은 숫자만 고릅니다.
 *
 * 단순히 `\d+`로 잡으면 `E2E`의 2까지 세면서 `E0E`가 됩니다. 뒤에 단위가 붙는
 * `18개`는 세야 하므로 앞쪽만 막습니다.
 */
const NUMBER_PATTERN = /(?<![\p{L}\d])\d+/gu;

/** 끝에서 감속. 마지막 한 자리가 천천히 멎어야 수치가 읽힙니다. */
const easeOut = (ratio: number) => 1 - (1 - ratio) ** 3;

/**
 * 문장에 섞인 숫자를 화면에 들어올 때 0부터 올립니다.
 *
 * 숫자만 따로 받지 않고 문장을 통째로 받는 이유는, 실제 문구가
 * `18개 Suite · 46개 통과`처럼 숫자와 단위가 섞여 있기 때문입니다. 호출부에서
 * 숫자를 분리해 두면 문구를 고칠 때마다 두 곳을 맞춰야 합니다.
 *
 * 자릿수는 목표값에 맞춰 0으로 채웁니다. 9에서 10으로 넘어갈 때 글자 폭이 변하면
 * 옆 문구가 밀립니다.
 */
export function useCountUp(text: string, duration = COUNT_UP_DURATION) {
  const enabled = useMotionEnabled();
  const { ref, isVisible } = useRevealTrigger();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible || !enabled) {
      return;
    }

    let frame = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (startedAt === 0) {
        startedAt = now;
      }

      const ratio = Math.min((now - startedAt) / duration, 1);
      setProgress(easeOut(ratio));

      if (ratio < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frame);
  }, [isVisible, enabled, duration]);

  /* 모션을 끈 사용자에게는 계산 없이 완성된 문장을 그대로 보여 줍니다. */
  const ratio = enabled ? progress : 1;

  const rendered = useMemo(
    () =>
      text.replace(NUMBER_PATTERN, (match) =>
        String(Math.round(Number(match) * ratio)).padStart(match.length, '0'),
      ),
    [text, ratio],
  );

  return { ref, text: rendered } as const;
}
