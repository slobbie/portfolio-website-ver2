import styled from '@emotion/styled';
import { MetaLabel, PageSection } from '@/shared/ui';

export const GiggySectionRoot = styled(PageSection)`
  scroll-margin-top: 108px;
`;

export const ProjectCopy = styled.div`
  max-width: 760px;

  p {
    color: var(--text-soft);
    font-size: 1.04rem;
    line-height: 1.8;
    word-break: keep-all;

    & + p {
      margin-top: 8px;
    }
  }
`;

export const GiggyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  margin-top: 70px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    margin-top: 52px;
  }
`;

export const StackCard = styled.div`
  display: block;
  padding: 30px;
  border: 1px solid var(--line-strong);
  background: var(--surface);

  h4 {
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const GiggyChapter = styled.article`
  margin-top: 96px;
  padding-top: 28px;
  border-top: 1px solid var(--line-strong);

  > h3 {
    max-width: 880px;
    margin-top: 14px;
    font-size: clamp(2rem, 3.4vw, 3.25rem);
    line-height: 1.08;
    letter-spacing: -0.055em;
    word-break: keep-all;
  }

  > section {
    max-width: 940px;
  }

  > h3 + section {
    margin-top: 28px;
  }

  @media (max-width: 640px) {
    margin-top: 72px;

    > h3 {
      font-size: clamp(2rem, 10vw, 3rem);
    }

    > h3 + section {
      margin-top: 20px;
    }
  }
`;

export const ChapterIndex = styled(MetaLabel)``;
