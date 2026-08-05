import styled from '@emotion/styled';

import { PageSection } from '@/shared/ui';

export const AdditionalSection = styled(PageSection)``;

export const AdditionalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(48px, 8vw, 112px);

  article {
    min-height: 220px;
    padding: 36px 0 52px;
    border-top: 1px solid var(--line-strong);
  }

  h2 {
    font-size: clamp(1.7rem, 2.1vw, 2rem);
    font-weight: 650;
    letter-spacing: -0.055em;
  }

  h3 {
    font-size: clamp(1.05rem, 1.55vw, 1.3rem);
    font-weight: 450;
    line-height: 1.55;
    letter-spacing: -0.035em;
    word-break: keep-all;
  }

  time {
    display: block;
    margin-top: 8px;
    color: var(--muted);
    font-size: clamp(1rem, 1.35vw, 1.12rem);
    line-height: 1.5;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const AdditionalEntry = styled.div`
  margin-top: 32px;
`;
