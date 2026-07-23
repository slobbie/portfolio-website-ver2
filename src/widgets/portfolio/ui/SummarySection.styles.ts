import styled from '@emotion/styled';

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line-strong);
  border-left: 1px solid var(--line-strong);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.article`
  min-height: 300px;
  padding: 34px;
  border-right: 1px solid var(--line-strong);
  border-bottom: 1px solid var(--line-strong);
  background: var(--surface);
  transition: background 220ms ease;

  &:hover {
    background: var(--surface-strong);
  }

  > p:first-of-type {
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 52px;
    font-size: 1.5rem;
    line-height: 1.25;
    letter-spacing: -0.04em;
  }

  > p:last-child {
    max-width: 460px;
    margin-top: 18px;
    color: var(--text-soft);
    font-size: 0.95rem;
    line-height: 1.75;
    word-break: keep-all;
  }

  @media (max-width: 640px) {
    min-height: 260px;
    padding: 26px;
  }
`;
