import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;

  li {
    padding: 6px 11px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--text-soft);
    font-size: 0.74rem;
    line-height: 1;
    white-space: nowrap;
  }
`;
