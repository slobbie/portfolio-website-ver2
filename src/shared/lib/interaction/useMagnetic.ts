import { useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import { useMotionEnabled } from '@/shared/lib/motion';

import {
  MAGNET_STRENGTH,
  POINTER_SPRING,
} from '@/shared/lib/interaction/interaction.tokens';
import { canHover } from '@/shared/lib/interaction/pointer';

const clamp = (value: number) => Math.min(Math.max(value, -1), 1);

/**
 * 포인터 쪽으로 요소를 조금 끌어당깁니다.
 *
 * 중심에서 얼마나 벗어났는지를 −1~1로 환산해 `strength`만큼만 이동시킵니다.
 * 요소 크기와 무관하게 이동량이 같아, 작은 링크와 큰 카드가 같은 물성을 갖습니다.
 *
 * 위치는 스프링을 통과시켜 포인터가 멈춘 뒤에도 한 박자 늦게 안착합니다.
 * 값은 MotionValue로만 흘러 리렌더가 없습니다.
 */
export function useMagnetic(strength = MAGNET_STRENGTH) {
  const enabled = useMotionEnabled();
  const [element, setElement] = useState<HTMLElement | null>(null);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, POINTER_SPRING);
  const y = useSpring(offsetY, POINTER_SPRING);

  const ref = useCallback((node: HTMLElement | null) => setElement(node), []);

  useEffect(() => {
    if (!element || !enabled || !canHover()) {
      return;
    }

    const move = (event: PointerEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();

      if (width === 0 || height === 0) {
        return;
      }

      offsetX.set(clamp((event.clientX - (left + width / 2)) / (width / 2)) * strength);
      offsetY.set(clamp((event.clientY - (top + height / 2)) / (height / 2)) * strength);
    };

    const reset = () => {
      offsetX.set(0);
      offsetY.set(0);
    };

    element.addEventListener('pointermove', move);
    element.addEventListener('pointerleave', reset);

    return () => {
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      reset();
    };
  }, [element, enabled, strength, offsetX, offsetY]);

  return { ref, style: { x, y } } as const;
}
