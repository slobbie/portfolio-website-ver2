import styled from '@emotion/styled';

export const ExperienceList = styled.div`
  border-top: 1px solid var(--line-strong);
`;

export const ExperienceCard = styled.article`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  gap: 30px;
  padding: 46px 0 54px;
  border-bottom: 1px solid var(--line-strong);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ExperienceNumber = styled.p`
  color: var(--muted);
  font-size: 0.8rem;
`;

export const ExperienceMain = styled.div`
  display: grid;
  gap: 28px;
`;

export const ExperienceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 2.3rem);
    letter-spacing: -0.045em;
  }

  p,
  time {
    margin-top: 9px;
    color: var(--muted);
    font-size: 0.86rem;
  }

  @media (max-width: 640px) {
    display: grid;
  }
`;

export const ExperienceHighlights = styled.ul`
  display: grid;
  gap: 10px;
  max-width: 900px;
  color: var(--text-soft);
  line-height: 1.75;
  list-style: none;

  li {
    position: relative;
    padding-left: 18px;
    word-break: keep-all;

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
`;
