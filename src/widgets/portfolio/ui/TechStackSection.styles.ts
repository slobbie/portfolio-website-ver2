import styled from '@emotion/styled';
import { PageSection } from '@/shared/ui';

export const TechSection = styled(PageSection)`
  padding-bottom: 0;
`;

export const TechList = styled.div`
  border-top: 1px solid var(--line-strong);
`;

export const TechRow = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(0, 3fr);
  gap: 48px;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);

  h3 {
    color: var(--text-soft);
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
