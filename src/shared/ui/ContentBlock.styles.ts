import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { media } from '@/shared/config/theme';

export const Block = styled(motion.section)<{
  tone: 'default' | 'accent';
  variant: 'default' | 'card';
  $hasTitle: boolean;
}>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $hasTitle }) =>
    $hasTitle ? '150px minmax(0, 1fr)' : 'minmax(0, 1fr)'};
  gap: var(--space-9);
  padding: var(--space-8) 0;
  /* 색은 의사요소가 그리고, border는 기존 박스 높이만 유지합니다. */
  border-bottom: var(--border-hairline) solid transparent;

  /* 구분선을 의사요소로 그려 좌에서 우로 뻗어 나가게 합니다. */
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: var(--border-hairline);
    background: var(--line);
    transform: scaleX(var(--line-scale, 1));
    transform-origin: left center;
  }

  /* 테두리를 가진 블록 앞에서는 구분선이 그 블록의 선처럼 보여서 제거합니다. */
  &:has(+ .detail-block--accent)::after {
    display: none;
  }

  /* 마지막 블록의 구분선은 다음 섹션의 경계선과 겹쳐 두 줄로 보이므로 제거합니다. */
  &:last-child::after {
    display: none;
  }

  ${({ tone }) =>
    tone === 'accent' &&
    `
      margin-top: var(--space-4);
      padding: var(--space-8) var(--space-7);
      border: var(--border-hairline) solid rgba(112, 225, 139, 0.23);
      background: rgba(112, 225, 139, 0.035);

      &::after {
        display: none;
      }
    `}

  ${({ variant }) =>
    variant === 'card' &&
    `
      display: block;
      padding: var(--space-8);
      border: var(--border-hairline) solid var(--line-strong);
      background: var(--surface);

      &::after {
        display: none;
      }

      h4 {
        margin-bottom: var(--space-6);
      }

      ul {
        display: grid;
        color: var(--text-soft);
      }
    `}

  h4 {
    color: ${({ tone }) => (tone === 'accent' ? 'var(--accent)' : 'var(--muted)')};
    font-size: var(--text-2xs);
    font-weight: 500;
    line-height: 1.5;
  }

  p,
  ul {
    grid-column: ${({ $hasTitle }) => ($hasTitle ? '2' : '1')};
    color: var(--text-soft);
    font-size: var(--text-base);
    line-height: 1.82;
    word-break: keep-all;
  }

  h4 + p,
  h4 + ul {
    grid-row: 1;
  }

  p + p {
    margin-top: -22px;
  }

  ul {
    display: grid;
    gap: var(--space-2);
    list-style: none;
  }

  li {
    position: relative;
    padding-left: var(--space-4);

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

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: var(--space-4);
    padding: ${({ tone, variant }) =>
      variant === 'card' ? '30px' : tone === 'accent' ? '24px 20px' : '26px 0'};

    p,
    ul {
      grid-column: 1;
    }

    h4 + p,
    h4 + ul {
      grid-row: auto;
    }

    p + p {
      margin-top: -7px;
    }
  }
`;
