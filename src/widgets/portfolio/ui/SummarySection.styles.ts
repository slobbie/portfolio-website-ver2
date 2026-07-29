import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

/**
 * 테두리는 컨테이너가 아니라 카드가 소유합니다.
 * 컨테이너가 그리면 아직 등장하지 않은 카드 영역까지 선이 먼저 뻗어 나갑니다.
 */
export const SummaryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled(motion.article)`
  position: relative;
  min-height: 300px;
  padding: var(--space-9);
  border-right: var(--border-hairline) solid var(--line-strong);
  border-bottom: var(--border-hairline) solid var(--line-strong);
  background: var(--surface);

  /* 첫 행 위쪽과 첫 열 왼쪽만 채워 격자를 닫습니다. 나머지는 이웃 카드가 그립니다. */
  &:nth-of-type(-n + 2) {
    border-top: var(--border-hairline) solid var(--line-strong);
  }

  &:nth-of-type(2n + 1) {
    border-left: var(--border-hairline) solid var(--line-strong);
  }

  /*
   * 카드 위 테두리 위에 겹쳐, 포인터가 있는 지점만 밝아지는 선.
   *
   * 좌표는 usePointerSpot이 --spot-x로 넣어 주고, 보이는 형태는 여기서 정합니다.
   * 그림자나 번짐 대신 선 하나로 표현해 다른 요소와 같은 언어를 씁니다.
   */
  &::before {
    position: absolute;
    z-index: 1;
    top: calc(-1 * var(--border-hairline));
    right: 0;
    left: 0;
    height: var(--border-hairline);
    background: radial-gradient(
      120px circle at var(--spot-x, 50%) 50%,
      var(--accent),
      transparent 70%
    );
    content: '';
    opacity: var(--spot, 0);
  }

  ${media.hover} {
    transition: background var(--dur-state) var(--ease);

    &::before {
      transition: opacity var(--dur-state) var(--ease);
    }

    &:hover {
      background: var(--surface-strong);
    }

    /* 인덱스 라벨은 카드가 반응 중임을 알리는 가장 작은 신호입니다. */
    &:hover > p:first-of-type {
      color: var(--accent);
    }
  }

  > p:first-of-type {
    color: var(--muted);
    transition: color var(--dur-hover) var(--ease);
    font-size: var(--text-2xs);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h3 {
    margin-top: var(--space-14);
    font-size: var(--text-xl);
    line-height: 1.25;
    letter-spacing: -0.04em;
  }

  > p:last-child {
    max-width: 460px;
    margin-top: var(--space-5);
    color: var(--text-soft);
    font-size: var(--text-base);
    line-height: 1.75;
    word-break: keep-all;
  }

  ${media.mobile} {
    min-height: 260px;
    padding: var(--space-7);
    border-left: var(--border-hairline) solid var(--line-strong);

    &:nth-of-type(-n + 2) {
      border-top: 0;
    }

    &:first-of-type {
      border-top: var(--border-hairline) solid var(--line-strong);
    }
  }
`;
