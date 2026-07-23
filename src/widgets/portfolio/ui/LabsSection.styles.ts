import styled from '@emotion/styled';
import { MetaLabel, PageSection } from '@/shared/ui';

export const LabsSectionRoot = styled(PageSection)``;

export const LabsList = styled.div`
  display: grid;
  gap: 112px;

  @media (max-width: 640px) {
    gap: 88px;
  }
`;

export const LabCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(320px, 5fr);
  gap: clamp(38px, 6vw, 80px);
  align-items: center;

  &:nth-of-type(even) .lab-image-wrap {
    order: 2;
  }

  &:hover .lab-image-wrap img {
    transform: scale(1.025);
    filter: saturate(0.9) brightness(0.9);
  }

  &:first-of-type .lab-image-wrap img {
    filter: saturate(0.95) brightness(0.96);
  }

  &:first-of-type:hover .lab-image-wrap img {
    filter: saturate(1) brightness(1);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    &:nth-of-type(even) .lab-image-wrap {
      order: 0;
    }
  }

  @media (max-width: 640px) {
    gap: 30px;
  }
`;

export const LabImageWrap = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.7) brightness(0.78);
    transition:
      transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1),
      filter 350ms ease;
  }
`;

export const LabCopy = styled.div`
  h3 {
    margin-top: 12px;
    font-size: clamp(2.2rem, 4.5vw, 4.6rem);
    line-height: 1;
    letter-spacing: -0.065em;
  }

  > strong {
    display: block;
    margin-top: 26px;
    color: var(--text-soft);
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.55;
    word-break: keep-all;
  }

  > p:not(.chapter-index) {
    margin-top: 14px;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.75;
    word-break: keep-all;
  }

  > ul {
    margin-top: 24px;
  }

  @media (max-width: 640px) {
    h3 {
      font-size: clamp(2.5rem, 13vw, 4rem);
    }
  }
`;

export const LabIndex = styled(MetaLabel)``;

export const LabLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 28px;

  a {
    padding-bottom: 5px;
    border-bottom: 1px solid var(--line-strong);
    color: var(--text-soft);
    font-size: 0.86rem;
    transition:
      color 180ms ease,
      border-color 180ms ease;

    &:hover {
      border-color: var(--text-soft);
      color: var(--text);
    }
  }
`;
