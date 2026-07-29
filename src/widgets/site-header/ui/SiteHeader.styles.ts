import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const Header = styled.header`
  position: sticky;
  z-index: 40;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  /* 섹션 제목이 이 높이를 기준으로 붙으므로 토큰에서 가져옵니다. */
  min-height: var(--header-height);
  border-top: 2px solid var(--text);
  border-bottom: var(--border-hairline) solid var(--line-strong);
  background: rgba(9, 9, 9, 0.92);
  backdrop-filter: blur(18px);
`;

/**
 * 문서 전체 읽은 정도를 헤더 아래 선으로 표시합니다.
 *
 * 높이를 바꾸지 않는 방식으로 둔 이유는, 고정 헤더의 높이가 변하면 아래 본문이
 * 그만큼 밀려 스크롤 위치와 서로 밀고 당기기 때문입니다.
 */
export const HeaderProgress = styled(motion.span)`
  position: absolute;
  right: 0;
  bottom: calc(-1 * var(--border-hairline));
  left: 0;
  height: var(--border-hairline);
  background: var(--accent);
  transform-origin: left center;
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: var(--space-2);
  color: var(--text-soft);
  font-size: var(--text-sm);
  letter-spacing: -0.01em;

  ${media.tablet} {
    display: none;
  }
`;

export const AvailabilityDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(112, 225, 139, 0.08);
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-self: end;
  gap: var(--space-6);

  a {
    position: relative;
    padding-bottom: var(--space-1);
    color: var(--text-soft);
    font-size: var(--text-sm);
    letter-spacing: -0.01em;

    &[data-active='true'] {
      color: var(--text);
    }
  }

  ${media.hover} {
    a {
      transition: color var(--dur-hover) var(--ease);

      &:hover {
        color: var(--text);
      }
    }
  }

  ${media.mobile} {
    gap: var(--space-3);

    a {
      font-size: var(--text-3xs);
    }
  }
`;

/** 현재 구간 표시. layoutId로 메뉴 사이를 미끄러져 이동합니다. */
export const NavIndicator = styled(motion.span)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: var(--border-marker);
  background: var(--accent);
`;
