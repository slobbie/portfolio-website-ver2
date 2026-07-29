import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { MetaLabel, PageSection } from '@/shared/ui';
import { media } from '@/shared/config/theme';

export const GiggySectionRoot = styled(PageSection)`
  scroll-margin-top: var(--space-28);

  /*
   * 섹션이 길어 읽는 도중 어느 프로젝트인지 놓치기 쉬워 제목을 화면에 붙여 둡니다.
   *
   * 붙어 있는 동안 아래 글이 뒤로 지나가므로 배경으로 덮어야 합니다. 전역 헤더와
   * 같은 방식을 써서 두 고정 요소가 한 가지로 보이게 합니다. 부제는 헤딩에서
   * 빼 본문 위로 내렸습니다. 붙는 블록이 클수록 읽을 수 있는 화면이 줄어듭니다.
   */
  .section-heading {
    position: sticky;
    z-index: 20;
    top: var(--header-height);
    margin-bottom: var(--space-10);
    padding: var(--space-6) 0;
    background: rgba(9, 9, 9, 0.92);
    backdrop-filter: blur(18px);
  }
`;

export const ProjectCopy = styled(motion.div)`
  max-width: 760px;

  p {
    color: var(--text-soft);
    font-size: var(--text-lg);
    line-height: 1.8;
    word-break: keep-all;

    & + p {
      margin-top: var(--space-2);
    }
  }

  /* 제목에서 내려온 부제. 뒤따르는 본문보다 한 단계 작고 흐리게 둡니다. */
  .project-lead {
    margin-bottom: var(--space-5);
    color: var(--muted);
    font-size: var(--text-md);
    line-height: 1.75;
  }
`;

export const GiggyGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-7);
  margin-top: var(--space-18);

  ${media.tablet} {
    grid-template-columns: 1fr;
  }

  ${media.mobile} {
    margin-top: var(--space-14);
  }
`;

export const StackCard = styled(motion.div)`
  display: block;
  padding: var(--space-8);
  border: var(--border-hairline) solid var(--line-strong);
  background: var(--surface);

  h4 {
    margin-bottom: var(--space-6);
    color: var(--muted);
    font-size: var(--text-2xs);
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const GiggyChapter = styled(motion.article)`
  margin-top: var(--space-24);
  padding-top: var(--space-7);
  border-top: var(--border-hairline) solid var(--line-strong);

  > h3 {
    max-width: 880px;
    margin-top: var(--space-4);
    font-size: var(--text-h4);
    line-height: 1.08;
    letter-spacing: -0.055em;
    word-break: keep-all;
  }

  /* 구분선과 결과 박스는 콘텐츠 전체 폭을 쓰고, 본문만 읽기 좋은 길이로 제한합니다. */
  > section {
    p,
    ul {
      max-width: 756px;
    }
  }

  > h3 + section {
    margin-top: var(--space-7);
  }

  ${media.mobile} {
    margin-top: var(--space-18);


    > h3 + section {
      margin-top: var(--space-5);
    }
  }
`;

export const ChapterIndex = styled(MetaLabel)``;
