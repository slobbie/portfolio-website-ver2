import styled from '@emotion/styled';

export const Heading = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  margin-bottom: 72px;

  > div {
    max-width: 820px;
  }

  h2 {
    font-size: clamp(2.6rem, 5.2vw, 5.5rem);
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  p {
    max-width: 680px;
    margin-top: 24px;
    color: var(--text-soft);
    font-size: 1rem;
    line-height: 1.75;
    word-break: keep-all;
  }

  @media (max-width: 640px) {
    margin-bottom: 48px;

    h2 {
      font-size: clamp(2.75rem, 14vw, 4.4rem);
    }
  }
`;
