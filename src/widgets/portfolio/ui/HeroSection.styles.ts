import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 760px);
  align-items: center;
  padding: 88px 0 72px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 76px 0 68px;
  }

  @media (max-width: 640px) {
    min-height: auto;
    padding: 60px 0 56px;
  }
`;

export const HeroCopy = styled(motion.div)``;

export const HeroTitle = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const HeroRole = styled(motion.span)`
  display: block;
  color: var(--text);
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.045em;

  @media (max-width: 640px) {
    font-size: clamp(1.75rem, 8vw, 2rem);
  }
`;

export const HeroName = styled(motion.span)`
  display: block;
  margin-top: 0;
  font-size: clamp(4.75rem, 8.6vw, 7.75rem);
  line-height: 0.92;
  letter-spacing: -0.08em;

  @media (max-width: 640px) {
    margin-top: 0;
    font-size: clamp(4.2rem, 24vw, 6.2rem);
  }
`;

export const HeroKicker = styled(motion.p)`
  margin-top: 36px;
  color: var(--muted);
  font-size: clamp(1.15rem, 1.8vw, 1.75rem);
  font-weight: 300;
  line-height: 1.35;
  letter-spacing: -0.04em;

  @media (max-width: 640px) {
    margin-top: 16px;
    font-size: 1.05rem;
    line-height: 1.45;
  }
`;

export const HeroIntro = styled(motion.p)`
  max-width: 640px;
  margin-top: 34px;
  color: var(--text-soft);
  font-size: clamp(1.08rem, 1.5vw, 1.3rem);
  line-height: 1.65;
  letter-spacing: -0.025em;
  word-break: keep-all;

  @media (max-width: 640px) {
    margin-top: 26px;
    font-size: 1rem;
  }
`;

export const HeroLinks = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: 28px;

  a {
    border-bottom: 1px solid var(--line-strong);
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.7;
    transition:
      color 180ms ease,
      border-color 180ms ease;

    &:hover {
      border-color: var(--text-soft);
      color: var(--text);
    }
  }

  @media (max-width: 640px) {
    display: grid;
    justify-items: start;
    gap: 7px;
    margin-top: 22px;
  }
`;
