import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const Panel = styled(motion.div)`
  margin-top: var(--space-10);
  padding: var(--space-6) var(--space-7) var(--space-7);
  border: var(--border-hairline) solid var(--line-strong);
  background: var(--surface);
  overflow-x: auto;

  > p {
    color: var(--muted);
    font-size: var(--text-2xs);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  pre {
    margin-top: var(--space-5);
    color: var(--text-soft);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
    font-size: var(--text-2xs);
    line-height: 1.75;
  }

  ${media.mobile} {
    margin-right: -20px;
    margin-left: -20px;
    border-right: 0;
    border-left: 0;

    pre {
      font-size: var(--text-3xs);
    }
  }
`;

/** 다이어그램 한 줄. 빈 줄도 원래 높이를 유지하도록 최소 높이를 둡니다. */
export const FlowLine = styled(motion.span)`
  display: block;
  min-height: 1.75em;
`;
