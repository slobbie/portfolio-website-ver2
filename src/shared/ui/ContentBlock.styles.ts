import styled from '@emotion/styled';

export const Block = styled.section<{
  tone: 'default' | 'accent';
  variant: 'default' | 'card';
}>`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 34px;
  padding: 32px 0;
  border-bottom: 1px solid var(--line);

  ${({ tone }) =>
    tone === 'accent' &&
    `
      margin-top: 14px;
      padding: 32px 26px;
      border: 1px solid rgba(112, 225, 139, 0.23);
      background: rgba(112, 225, 139, 0.035);
    `}

  ${({ variant }) =>
    variant === 'card' &&
    `
      display: block;
      padding: 30px;
      border: 1px solid var(--line-strong);
      background: var(--surface);

      h4 {
        margin-bottom: 22px;
      }

      ul {
        display: grid;
        color: var(--text-soft);
      }
    `}

  h4 {
    color: ${({ tone }) => (tone === 'accent' ? 'var(--accent)' : 'var(--muted)')};
    font-size: 0.78rem;
    font-weight: 500;
    line-height: 1.5;
  }

  p,
  ul {
    grid-column: 2;
    color: var(--text-soft);
    font-size: 0.94rem;
    line-height: 1.82;
    word-break: keep-all;
  }

  h4 + p,
  h4 + ul {
    grid-row: 1;
  }

  p + p {
    margin-top: -22px;
  }

  ul {
    display: grid;
    gap: 8px;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 17px;

    &::before {
      position: absolute;
      top: 0.72em;
      left: 0;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--muted);
      content: '';
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: ${({ tone, variant }) =>
      variant === 'card' ? '30px' : tone === 'accent' ? '24px 20px' : '26px 0'};

    p,
    ul {
      grid-column: 1;
    }

    h4 + p,
    h4 + ul {
      grid-row: auto;
    }

    p + p {
      margin-top: -7px;
    }
  }
`;
