import styled from '@emotion/styled';

export const Panel = styled.div`
  margin-top: 38px;
  padding: 24px 28px 28px;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  overflow-x: auto;

  > p {
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  pre {
    margin-top: 20px;
    color: var(--text-soft);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
    font-size: 0.78rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    margin-right: -20px;
    margin-left: -20px;
    border-right: 0;
    border-left: 0;

    pre {
      font-size: 0.7rem;
    }
  }
`;
