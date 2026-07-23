import styled from '@emotion/styled';

export const PortfolioRoot = styled.div<{ backgroundTexture: string }>`
  min-height: 100vh;
  background-color: var(--background);
  background-image: ${({ backgroundTexture }) =>
    `linear-gradient(rgba(9, 9, 9, 0.54), rgba(9, 9, 9, 0.54)), url(${backgroundTexture})`};
  background-position: center top;
  background-repeat: repeat-y;
  background-size: 100% auto;
`;

export const SkipLink = styled.a`
  position: fixed;
  z-index: 100;
  top: 12px;
  left: 12px;
  padding: 10px 14px;
  color: #090909;
  background: var(--accent);
  transform: translateY(-160%);
  transition: transform 180ms ease;

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

  @media (max-width: 900px) {
    width: min(calc(100% - 48px), var(--content-width));
  }

  @media (max-width: 640px) {
    width: calc(100% - 40px);
  }
`;
