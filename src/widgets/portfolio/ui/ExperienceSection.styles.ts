import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

/**
 * 읽는 중인 행과 포인터를 올린 행은 같은 모습을 갖습니다.
 * 두 상태가 달라 보이면 활성 표시가 무엇을 뜻하는지 알 수 없습니다.
 */
const activeRow = css`
  &::after {
    transform: scaleX(1);
  }

  .experience-number {
    color: var(--accent);
  }
`;

/* 테두리는 카드가 소유합니다. 컨테이너가 그리면 등장 전 영역까지 선이 먼저 보입니다. */
export const ExperienceList = styled(motion.div)``;

/**
 * 등장 모션이 `y`를 쓰고 있어, 호버는 이동이 아니라 색과 선으로 표현합니다.
 * 같은 속성을 두 곳에서 건드리면 등장 도중 호버가 들어올 때 서로 값을 덮습니다.
 */
export const ExperienceCard = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  align-items: start;
  gap: var(--space-8);
  padding: var(--space-12) 0 var(--space-14);
  border-bottom: var(--border-hairline) solid var(--line-strong);

  &:first-of-type {
    border-top: var(--border-hairline) solid var(--line-strong);
  }

  /* 아래 테두리 위에 겹쳐 두고, 호버할 때만 왼쪽에서 오른쪽으로 자랍니다. */
  &::after {
    position: absolute;
    right: 0;
    bottom: calc(-1 * var(--border-hairline));
    left: 0;
    height: var(--border-hairline);
    background: var(--accent);
    content: '';
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform var(--dur-state) var(--ease);
  }

  /* 스크롤로 정해지는 상태라 포인터가 없는 환경에서도 동작합니다. */
  &[data-focused='true'] {
    ${activeRow}
  }

  ${media.hover} {
    &:hover {
      ${activeRow}

      /*
       * 포인터를 올렸을 때만 제목을 밀어, 읽는 중인 행과 짚고 있는 행을 구분합니다.
       * 왼쪽으로 붙은 제목만 밀어냅니다. 오른쪽 끝의 기간까지 함께 밀면
       * 본문 폭을 넘어 가로 스크롤이 생깁니다.
       */
      .experience-title h3 {
        transform: translateX(var(--shift));
      }
    }
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;

/** 회사명 첫 줄과 같은 줄 높이를 곱해 두는 계수. 회사명 쪽 `line-height`와 같은 값입니다. */
const TITLE_LINE_HEIGHT = 1.2;

export const ExperienceNumber = styled.p`
  color: var(--muted);
  font-size: var(--text-xs);
  /*
   * 번호가 회사명 첫 줄의 한가운데 오도록 줄 높이를 회사명과 똑같이 맞춥니다.
   *
   * 두 칸의 위쪽 끝만 맞추면(기본값) 글자 크기 차이만큼 번호가 위로 떠 보이고,
   * baseline으로 맞추면 이번엔 회사명 아래쪽에 붙어 보입니다. 줄 상자를 같은
   * 높이로 만들면 두 글자가 각자 상자 가운데 놓여 눈높이가 맞습니다.
   */
  line-height: calc(var(--text-h5) * ${TITLE_LINE_HEIGHT});
  transition: color var(--dur-hover) var(--ease);

  /* 세로로 쌓이는 배치에서는 맞출 상대가 없어 줄 높이를 되돌립니다. */
  ${media.mobile} {
    line-height: 1.4;
  }
`;

export const ExperienceMain = styled.div`
  display: grid;
  gap: var(--space-7);
`;

export const ExperienceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-8);

  h3 {
    font-size: var(--text-h5);
    /* 번호가 이 값을 그대로 참조합니다. 바꿀 때는 ExperienceNumber도 함께 봅니다. */
    line-height: ${TITLE_LINE_HEIGHT};
    letter-spacing: -0.045em;
    transition: transform var(--dur-state) var(--ease);
  }

  p,
  time {
    margin-top: var(--space-2);
    color: var(--muted);
    font-size: var(--text-sm);
  }

  ${media.mobile} {
    display: grid;
  }
`;

export const ExperienceHighlights = styled.ul`
  display: grid;
  gap: var(--space-3);
  max-width: 900px;
  color: var(--text-soft);
  line-height: 1.75;
  list-style: none;

  li {
    position: relative;
    padding-left: var(--space-5);
    word-break: keep-all;

    &::before {
      position: absolute;
      top: 0.72em;
      left: 0;
      width: var(--space-1);
      height: var(--space-1);
      border-radius: 50%;
      background: var(--muted);
      content: '';
    }
  }
`;
