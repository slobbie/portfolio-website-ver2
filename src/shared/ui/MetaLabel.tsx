import type { ReactNode } from 'react';

import { useWipeReveal } from '@/shared/lib/motion';
import { MetaLabelRoot } from '@/shared/ui/layout.styles';

type MetaLabelProps = {
  children: ReactNode;
  className?: string;
};

/** 자간이 넓은 대문자 라벨. 좌에서 우로 열리며 글자가 찍히는 인상을 줍니다. */
export function MetaLabel({ children, className }: MetaLabelProps) {
  const wipe = useWipeReveal();

  return (
    <MetaLabelRoot className={className} {...wipe}>
      {children}
    </MetaLabelRoot>
  );
}
