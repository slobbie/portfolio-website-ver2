import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { MetaLabel, PageSection } from '@/shared/ui';
import { media } from '@/shared/config/theme';

/**
 * 보고 있는 카드 표시. 활성 표시는 페이지 전체에서 초록 선 하나로 통일합니다.
 */
const activeCard = css`
  .lab-image-wrap {
    border-color: var(--accent);
  }

  .chapter-index {
    color: var(--accent);
  }
`;

/**
 * 포인터를 올렸을 때만 더해지는 표시.
 *
 * 활성과 같은 모습을 주면, 가운데 카드처럼 이미 활성인 카드에서는 호버가 아무
 * 반응도 없는 것처럼 보입니다. 사진은 포인터에만 반응하도록 갈라 둡니다.
 */
const hoveredCard = css`
  .lab-image-wrap img {
    transform: scale(1.025);
    filter: saturate(1) brightness(1);
  }
`;

/* 마지막 섹션이고 트랙이 스크롤 공간을 만들므로 아래 여백을 두지 않습니다. */
export const LabsSectionRoot = styled(PageSection)`
  padding-bottom: 0;
`;

/**
 * 세로 스크롤 길이를 확보하는 구간.
 *
 * 높이는 가로 이동 거리에 맞춰 런타임에 지정합니다. `100vh + 이동거리`여야
 * 스크롤 진행률 0~1이 이동 거리와 1:1로 대응합니다.
 */
export const LabsTrack = styled.div`
  position: relative;

  /*
   * 브라우저의 스크롤 앵커링을 끕니다. 고정 요소가 붙고 떨어지는 구간에서
   * 기준점을 다시 잡으며 scrollTop을 보정하면 사용자 스크롤과 충돌합니다.
   */
  overflow-anchor: none;
`;

/**
 * 구간을 지나는 동안 화면에 고정되는 무대.
 *
 * 높이를 화면 높이와 같게, `top`을 0으로 둬야 고정 구간과 스크롤 진행률 구간이
 * 정확히 같아집니다. 어긋나면 가로 이동이 끝난 뒤에도 스크롤이 남습니다.
 * 고정 헤더는 안쪽 패딩으로 피합니다.
 */
export const LabsStage = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding-top: var(--header-offset);
  padding-bottom: var(--space-12);

  /* 제목까지 함께 고정되므로 무대 안에서는 여백을 줄입니다. */
  .section-heading {
    flex: 0 0 auto;
    margin-bottom: var(--space-8);
  }
`;

/** 카드가 이동하며 잘리는 영역. */
export const LabsViewport = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
`;

export const LabsList = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: flex-start;
  gap: var(--space-10);
  will-change: transform;

  ${media.mobile} {
    gap: var(--space-6);
  }
`;

/**
 * 모션을 끈 사용자를 위한 대체 경로.
 * 고정과 변환을 걷어내고 브라우저 기본 가로 스크롤로 되돌립니다.
 */
export const LabsFallbackTrack = styled.div`
  position: relative;
`;

export const LabsScroller = styled.div`
  display: flex;
  gap: var(--space-10);
  padding-bottom: var(--space-6);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-color: var(--line-strong) var(--line);
  scrollbar-width: thin;

  > * {
    scroll-snap-align: start;
  }

  &:focus-visible {
    outline: var(--border-marker) solid var(--accent);
    outline-offset: var(--space-2);
  }
`;

export const LabsProgress = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
  margin-top: var(--space-6);
  color: var(--muted);
  font-size: var(--text-2xs);
  font-weight: 500;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const LabsProgressTrack = styled.div`
  position: relative;
  width: var(--space-24);
  height: var(--border-marker);
  background: var(--line);
  overflow: hidden;

  > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--accent);
    transform-origin: left center;
  }
`;

export const LabCard = styled(motion.article)`
  display: flex;
  flex: 0 0 clamp(280px, 46vw, 620px);
  flex-direction: column;
  gap: var(--space-6);
  min-height: 0;

  &:first-of-type .lab-image-wrap img {
    filter: saturate(0.95) brightness(0.96);
  }

  /* 가로로 넘기는 목록이라 화면 세로 중앙이 아니라 가로 중앙을 기준으로 잡습니다. */
  &[data-focused='true'] {
    ${activeCard}
  }

  ${media.hover} {
    &:hover {
      ${activeCard}
      ${hoveredCard}
    }
  }

  ${media.mobile} {
    flex-basis: 82vw;
    gap: var(--space-5);
  }
`;

/**
 * 이미지 높이는 본문 길이와 무관하게 고정합니다.
 *
 * 남은 높이를 채우게 두면 설명이 짧은 카드일수록 이미지가 커져 크기가 제각각이 됩니다.
 * 화면 높이에 비례하되 카드끼리는 항상 같은 크기를 갖도록 잡고, 잘림은
 * `object-fit: cover`가 처리합니다.
 */
export const LabImageWrap = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: clamp(180px, 34vh, 420px);
  border: var(--border-hairline) solid var(--line-strong);
  background: var(--surface);
  overflow: hidden;
  transition: border-color var(--dur-state) var(--ease);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.7) brightness(0.78);
    /* 이미지 확대만 예외로 길게 둡니다. 짧으면 확대가 튕기듯 보입니다. */
    transition:
      transform 500ms var(--ease),
      filter var(--dur-state) var(--ease);
  }
`;

export const LabCopy = styled.div`
  flex: 0 0 auto;

  h3 {
    margin-top: var(--space-3);
    font-size: var(--text-h5);
    line-height: 1.05;
    letter-spacing: -0.05em;
    word-break: keep-all;
  }

  > strong {
    display: block;
    margin-top: var(--space-7);
    color: var(--text-soft);
    font-size: var(--text-lg);
    font-weight: 500;
    line-height: 1.55;
    word-break: keep-all;
  }

  > p:not(.chapter-index) {
    margin-top: var(--space-4);
    color: var(--muted);
    font-size: var(--text-base);
    line-height: 1.75;
    word-break: keep-all;
  }

  > ul {
    margin-top: var(--space-6);
  }

`;

export const LabIndex = styled(MetaLabel)`
  transition: color var(--dur-hover) var(--ease);
`;

export const LabLinks = styled.div`
  display: flex;
  gap: var(--space-5);
  margin-top: var(--space-7);
`;

export const LabLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding-bottom: var(--space-1);
  border-bottom: var(--border-hairline) solid var(--line-strong);
  color: var(--text-soft);
  font-size: var(--text-sm);

  /* 화살표는 문구가 아니라 방향 신호라 콘텐츠가 아닌 장식으로 둡니다. */
  &::after {
    content: '→';
  }

  ${media.hover} {
    transition:
      color var(--dur-hover) var(--ease),
      border-color var(--dur-hover) var(--ease);

    &::after {
      transition: transform var(--dur-state) var(--ease);
    }

    &:hover {
      border-color: var(--text-soft);
      color: var(--text);

      &::after {
        transform: translateX(var(--shift));
      }
    }
  }
`;
