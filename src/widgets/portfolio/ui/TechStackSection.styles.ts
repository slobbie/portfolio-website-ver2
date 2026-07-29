import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { PageSection } from '@/shared/ui';
import { media } from '@/shared/config/theme';

export const TechSection = styled(PageSection)`
  padding-bottom: 0;
`;

/* 테두리는 항목이 소유합니다. 컨테이너가 그리면 등장 전 영역까지 선이 먼저 보입니다. */
export const TechList = styled(motion.div)``;

export const TechRow = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(0, 3fr);
  gap: var(--space-12);
  align-items: center;
  padding: var(--space-6) 0;
  border-bottom: var(--border-hairline) solid var(--line);

  &:first-of-type {
    border-top: var(--border-hairline) solid var(--line-strong);
  }

  h3 {
    color: var(--text-soft);
    font-size: var(--text-base);
    font-weight: 500;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;
