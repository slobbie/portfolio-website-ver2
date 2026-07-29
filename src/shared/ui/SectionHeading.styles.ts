import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const Heading = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  margin-bottom: var(--space-18);

  > div {
    max-width: 820px;
  }

  ${media.mobile} {
    margin-bottom: var(--space-12);
  }
`;

export const HeadingEyebrow = styled(motion.p)`
  margin-bottom: var(--space-5);
  color: var(--muted);
  font-size: var(--text-2xs);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

/**
 * 제목이 밀려 올라오는 마스크입니다.
 *
 * `em` 단위 여백이 제목 크기를 따르도록 글자 크기를 여기에 두고, 확보한 여백만큼
 * 음수 마진으로 되돌려 기존 레이아웃 높이를 유지합니다.
 */
export const HeadingMask = styled(motion.div)`
  overflow: hidden;
  padding-bottom: 0.12em;
  margin-bottom: -0.12em;
  font-size: var(--text-h1);

`;

export const HeadingTitle = styled(motion.h2)`
  font-size: inherit;
  line-height: 0.98;
  letter-spacing: -0.065em;
`;

export const HeadingDescription = styled(motion.p)`
  max-width: 680px;
  margin-top: var(--space-6);
  color: var(--text-soft);
  font-size: var(--text-md);
  line-height: 1.75;
  word-break: keep-all;
`;
