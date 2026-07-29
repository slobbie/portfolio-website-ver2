import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 760px);
  align-items: center;
  padding: var(--space-22) 0 var(--space-18);

  ${media.tablet} {
    grid-template-columns: 1fr;
    padding: var(--space-20) 0 var(--space-18);
  }

  ${media.mobile} {
    min-height: auto;
    padding: var(--space-16) 0 var(--space-14);
  }
`;

export const HeroCopy = styled(motion.div)``;

export const HeroTitle = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6);
`;

export const HeroRole = styled(motion.span)`
  display: block;
  color: var(--text);
  font-size: var(--text-title);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.045em;

`;

export const HeroName = styled(motion.span)`
  display: block;
  margin-top: 0;
  font-size: var(--text-display);
  line-height: 0.92;
  letter-spacing: -0.08em;

  ${media.mobile} {
    margin-top: 0;
  }
`;

export const HeroKicker = styled(motion.p)`
  margin-top: var(--space-9);
  color: var(--text-soft);
  font-size: var(--text-lead);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.04em;

  ${media.mobile} {
    margin-top: var(--space-4);
    font-size: var(--text-lg);
    line-height: 1.45;
  }
`;

export const HeroLinks = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-6);
  margin-top: var(--space-7);

  ${media.mobile} {
    display: grid;
    justify-items: start;
    gap: var(--space-2);
    margin-top: var(--space-6);
  }
`;

/**
 * 밑줄은 `border-bottom`이 아니라 겹쳐 둔 선 두 개로 그립니다.
 * 아래쪽 흐린 선은 자리를 지키고, 위쪽 밝은 선만 좌우로 자라 호버를 표현합니다.
 */
export const HeroLink = styled(motion.a)`
  position: relative;
  border-bottom: var(--border-hairline) solid var(--line-strong);
  color: var(--muted);
  font-size: var(--text-base);
  line-height: 1.7;

  &::after {
    position: absolute;
    right: 0;
    bottom: calc(-1 * var(--border-hairline));
    left: 0;
    height: var(--border-hairline);
    background: var(--text);
    content: '';
    transform: scaleX(0);
    /* 들어올 때는 왼쪽에서 자라고, 나갈 때는 오른쪽으로 빠집니다. */
    transform-origin: right center;
  }

  ${media.hover} {
    transition: color var(--dur-hover) var(--ease);

    &::after {
      transition: transform var(--dur-state) var(--ease);
    }

    &:hover {
      color: var(--text);

      &::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }
`;
