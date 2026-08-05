import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { PageSection } from '@/shared/ui';
import { media } from '@/shared/config/theme';

export const CareerSectionRoot = styled(PageSection)`
  padding-bottom: var(--space-18);
`;

export const CareerLayout = styled.div`
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: clamp(var(--space-12), 7vw, var(--space-24));

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const CareerIndex = styled.aside`
  position: sticky;
  top: var(--header-offset);
  display: grid;
  align-self: start;
  border-top: var(--border-hairline) solid var(--line-strong);

  p {
    padding: var(--space-4) 0;
    color: var(--muted);
    font-size: var(--text-2xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  a {
    position: relative;
    display: grid;
    grid-template-columns: 26px 1fr;
    gap: var(--space-2);
    padding: var(--space-4) 0;
    border-top: var(--border-hairline) solid var(--line);
    color: var(--text-soft);
    font-size: var(--text-xs);
    line-height: 1.4;
    transition:
      color var(--dur-hover) var(--ease),
      transform var(--dur-state) var(--ease);

    &:last-child {
      border-bottom: var(--border-hairline) solid var(--line);
    }

    ${media.hover} {
      &:hover {
        color: var(--text);
        /* 목록에서 손가락으로 짚은 듯한 신호. 활성 표시와 방향을 맞춥니다. */
        transform: translateX(var(--shift));

        span {
          color: var(--text-soft);
        }
      }
    }

    &[data-active='true'] {
      color: var(--text);
      font-weight: 600;

      span {
        color: var(--accent);
      }
    }
  }

  span {
    color: var(--muted);
    transition: color var(--dur-hover) var(--ease);
  }

  ${media.tablet} {
    position: static;
    margin-bottom: var(--space-6);

    a {
      border-bottom: var(--border-hairline) solid var(--line);
    }

    .career-active-bar {
      display: none;
    }
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const CareerIndexGroup = styled.div`
  display: grid;

  /* 그룹 라벨이 헤더 역할을 하므로 첫 그룹만 위쪽 여백을 줄입니다. */
  &:first-of-type > p {
    padding-top: var(--space-4);
  }

  &:not(:first-of-type) > p {
    padding-top: var(--space-8);
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > p {
      grid-column: 1 / -1;
    }
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

/** 활성 회사 표시. layoutId로 항목 사이를 이어서 이동합니다. */
export const CareerActiveBar = styled(motion.span)`
  position: absolute;
  top: 14px;
  bottom: 14px;
  left: -14px;
  width: var(--border-marker);
  background: var(--accent);
`;

export const CareerContent = styled.div`
  min-width: 0;
`;

export const CareerArticleRoot = styled(motion.article)`
  scroll-margin-top: var(--space-28);
  padding: 0 0 var(--space-28);

  ${media.mobile} {
    padding-bottom: var(--space-24);
  }
`;

export const CareerCompany = styled.p`
  margin-bottom: var(--space-6);
  padding-top: var(--space-1);
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
`;

export const CareerProjectTitle = styled.header`
  position: relative;
  padding-bottom: var(--space-8);
  border-bottom: var(--border-hairline) solid var(--line-strong);

  /* 아래 테두리 위에 겹쳐 두고, 읽는 중인 프로젝트에서만 왼쪽부터 자랍니다. */
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

  /*
   * 판정은 글 전체를 기준으로 하고 표시만 제목 줄에 남깁니다.
   * 제목 줄만 재면 그 줄이 화면 가운데를 지나는 짧은 동안에만 켜집니다.
   */
  .career-article[data-focused='true'] & {
    &::after {
      transform: scaleX(1);
    }

    > p {
      color: var(--text-soft);
    }
  }

  > p {
    color: var(--muted);
    font-size: var(--text-2xs);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    transition: color var(--dur-hover) var(--ease);
  }

  h3 {
    max-width: none;
    margin-top: var(--space-3);
    font-size: clamp(1.9rem, 3vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.06em;
    white-space: nowrap;
    word-break: keep-all;
  }

  h3[data-compound='true'] {
    display: flex;
    align-items: center;

    span {
      display: block;
      line-height: 1;
    }

    .career-project-separator {
      white-space: pre;
    }

    .career-project-description {
      transform: translateY(0.06em);
    }
  }

  time {
    display: block;
    margin-top: var(--space-5);
    color: var(--muted);
    font-size: var(--text-xs);
  }

  ${media.mobile} {
    h3 {
      font-size: clamp(2rem, 10vw, 2.75rem);
      white-space: normal;
    }

    h3[data-compound='true'] {
      display: block;

      span {
        display: inline;
      }
    }
  }
`;

export const CareerProjectBody = styled.div`
  display: grid;
`;
