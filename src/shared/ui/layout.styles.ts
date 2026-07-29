import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

/**
 * 섹션 경계선도 의사요소로 그립니다.
 *
 * `border`로 두면 섹션 안의 콘텐츠가 아직 등장하지 않았는데 선만 완성된 상태로
 * 먼저 보입니다. 색은 의사요소가 그리고 `border`는 기존 높이만 유지합니다.
 */
export const PageSectionRoot = styled(motion.section)`
  position: relative;
  padding: var(--space-36) 0;
  border-top: var(--border-hairline) solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    left: 0;
    height: var(--border-hairline);
    background: var(--line);
    transform: scaleX(var(--line-scale, 1));
    transform-origin: left center;
  }

  ${media.mobile} {
    padding: var(--space-26) 0;
  }
`;

export const MetaLabelRoot = styled(motion.p)`
  color: var(--muted);
  font-size: var(--text-2xs);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;
