import type { ComponentPropsWithoutRef } from 'react';

import { useLineReveal } from '@/shared/lib/motion';
import { PageSectionRoot } from '@/shared/ui/layout.styles';

type PageSectionProps = ComponentPropsWithoutRef<typeof PageSectionRoot>;

/**
 * 섹션 경계선을 섹션이 등장하는 시점에 함께 그립니다.
 *
 * 선 그리기를 이 컴포넌트가 맡으므로 사용하는 쪽에서 따로 챙기지 않아도 됩니다.
 */
export function PageSection({ children, ...rest }: PageSectionProps) {
  const lineReveal = useLineReveal();

  return (
    <PageSectionRoot {...lineReveal} {...rest}>
      {children}
    </PageSectionRoot>
  );
}
