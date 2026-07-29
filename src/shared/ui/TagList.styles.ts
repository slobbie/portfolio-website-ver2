import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
`;

export const Tag = styled(motion.li)`
  padding: var(--space-2) var(--space-3);
  border: var(--border-hairline) solid var(--line);
  border-radius: 999px;
  color: var(--text-soft);
  font-size: var(--text-2xs);
  line-height: 1;
  white-space: nowrap;

  ${media.hover} {
    transition:
      border-color var(--dur-hover) var(--ease),
      color var(--dur-hover) var(--ease);

    &:hover {
      border-color: var(--line-strong);
      color: var(--text);
    }
  }
`;
