import styled from '@emotion/styled';
import { PageSection } from '@/shared/ui';

export const CareerSectionRoot = styled(PageSection)`
  padding-bottom: 72px;
`;

export const CareerLayout = styled.div`
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: clamp(48px, 7vw, 96px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CareerIndex = styled.aside`
  position: sticky;
  top: 106px;
  display: grid;
  align-self: start;
  border-top: 1px solid var(--line-strong);

  > p {
    padding: 16px 0;
    color: var(--muted);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  a {
    display: grid;
    grid-template-columns: 26px 1fr;
    gap: 8px;
    padding: 15px 0;
    border-top: 1px solid var(--line);
    color: var(--text-soft);
    font-size: 0.8rem;
    line-height: 1.4;
    transition: color 180ms ease;

    &:last-child {
      border-bottom: 1px solid var(--line);
    }

    &:hover {
      color: var(--text);
    }
  }

  span {
    color: var(--muted);
  }

  @media (max-width: 900px) {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 24px;

    > p {
      grid-column: 1 / -1;
    }

    a {
      border-bottom: 1px solid var(--line);
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CareerContent = styled.div`
  min-width: 0;
`;

export const CareerArticleRoot = styled.article`
  scroll-margin-top: 108px;
  padding: 0 0 112px;

  @media (max-width: 640px) {
    padding-bottom: 92px;
  }
`;

export const CareerCompany = styled.p`
  margin-bottom: 22px;
  padding-top: 2px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

export const CareerProjectTitle = styled.header`
  padding-bottom: 30px;
  border-bottom: 1px solid var(--line-strong);

  > p {
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h3 {
    max-width: 800px;
    margin-top: 12px;
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 1.08;
    letter-spacing: -0.06em;
    word-break: keep-all;
  }

  time {
    display: block;
    margin-top: 18px;
    color: var(--muted);
    font-size: 0.8rem;
  }

  @media (max-width: 640px) {
    h3 {
      font-size: clamp(2.15rem, 11vw, 3.4rem);
    }
  }
`;

export const CareerProjectBody = styled.div`
  display: grid;
`;
