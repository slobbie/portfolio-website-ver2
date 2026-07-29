import styled from '@emotion/styled';
import { media } from '@/shared/config/theme';

export const PortfolioRoot = styled.div<{ backgroundTexture: string }>`
  min-height: 100vh;
  background-color: var(--background);
  /* 텍스처의 밝은 점이 본문 대비를 깎지 않도록, 실효 배경이 --surface-strong를 넘지 않게 덮습니다. */
  background-image: ${({ backgroundTexture }) =>
    `linear-gradient(rgba(9, 9, 9, 0.8), rgba(9, 9, 9, 0.8)), url(${backgroundTexture})`};
  background-position: center top;
  background-repeat: repeat-y;
  background-size: 100% auto;
`;

export const SkipLink = styled.a`
  position: fixed;
  z-index: 100;
  top: 12px;
  left: 12px;
  padding: var(--space-3) var(--space-4);
  color: #090909;
  background: var(--accent);
  transform: translateY(-160%);
  transition: transform var(--dur-state) var(--ease);

  &:focus {
    transform: translateY(0);
  }
`;

export const ContentStage = styled.div`
  position: relative;
  z-index: 2;
  background: transparent;
`;

export const SiteShell = styled.div`
  width: min(calc(100% - 112px), var(--content-width));
  margin: 0 auto;

  ${media.tablet} {
    width: min(calc(100% - 48px), var(--content-width));
  }

  ${media.mobile} {
    width: calc(100% - 40px);
  }
`;
