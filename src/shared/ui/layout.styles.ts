import styled from '@emotion/styled';

export const PageSection = styled.section`
  padding: 144px 0;
  border-top: 1px solid var(--line);

  @media (max-width: 640px) {
    padding: 100px 0;
  }
`;

export const MetaLabel = styled.p`
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;
