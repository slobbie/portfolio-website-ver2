import type { ReactNode } from 'react';

import { giggy } from '@/entities/portfolio';
import { useReveal } from '@/shared/lib/motion';
import { ContentBlock, FlowPanel, SectionHeading, TagList } from '@/shared/ui';

import {
  ChapterIndex,
  GiggyChapter,
  GiggyGrid,
  GiggySectionRoot,
  ProjectCopy,
  StackCard,
} from '@/widgets/portfolio/ui/GiggySection.styles';

type ChapterProps = {
  index: string;
  title: string;
  children: ReactNode;
};

/**
 * 챕터는 서로 멀리 떨어져 있어 목록 단위로 묶을 수 없습니다.
 * 각 챕터가 자기 등장 시점을 판정하도록 컴포넌트로 분리합니다.
 */
function Chapter({ index, title, children }: ChapterProps) {
  const reveal = useReveal('sm');

  return (
    <GiggyChapter className="giggy-chapter" {...reveal}>
      <ChapterIndex className="chapter-index">{index}</ChapterIndex>
      <h3>{title}</h3>
      {children}
    </GiggyChapter>
  );
}

export function GiggySection() {
  const introReveal = useReveal('sm');
  const summaryReveal = useReveal('sm');

  return (
    <GiggySectionRoot className="page-section giggy-section" id="giggy">
      <SectionHeading eyebrow="Personal Project" title={giggy.title} />

      <ProjectCopy className="giggy-intro project-copy" {...introReveal}>
        <p className="project-lead">{giggy.subtitle}</p>
        {giggy.intro.map((paragraph) => (
          <p key={paragraph}>
            <strong>서비스 배경:</strong> {paragraph}
          </p>
        ))}
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={giggy.github} target="_blank" rel="noreferrer">
            {giggy.github}
          </a>
        </p>
      </ProjectCopy>

      <GiggyGrid className="giggy-grid" {...summaryReveal}>
        <ContentBlock title="역할" items={giggy.scope} variant="card" />
        <StackCard className="detail-block">
          <h4>기술</h4>
          <TagList items={giggy.stack} />
        </StackCard>
      </GiggyGrid>

      <Chapter index="01 / Architecture" title="백엔드 아키텍처">
        <ContentBlock title="설계 배경" paragraphs={[giggy.architecture.background]} />
        <ContentBlock title="구조 설계" items={giggy.architecture.details} />
        <FlowPanel label="백엔드 아키텍처">{giggy.architecture.flow}</FlowPanel>
        {giggy.architecture.note && (
          <ContentBlock paragraphs={[giggy.architecture.note]} />
        )}
      </Chapter>

      <Chapter index="02 / Data access" title="MikroORM 기반 공통 데이터 접근 구조">
        <ContentBlock title="설계 배경" paragraphs={[giggy.dataAccess.background]} />
        <ContentBlock title="구현 내용" items={giggy.dataAccess.details} />
        <FlowPanel label="MikroORM 기반 공통 데이터 접근 구조">{giggy.dataAccess.flow}</FlowPanel>
      </Chapter>

      <Chapter index="03 / Realtime services" title="매칭·채팅·알림 서비스 연결">
        <ContentBlock title="설계 배경" paragraphs={[giggy.realtime.background]} />
        <ContentBlock title="구현 내용" items={giggy.realtime.details} />
        <FlowPanel label="매칭·채팅·알림 서비스 연결">
          {giggy.realtime.flow}
        </FlowPanel>
      </Chapter>

      <Chapter index="04 / Testing" title="검증">
        <ContentBlock paragraphs={giggy.testing.summary} />
        <ContentBlock
          items={giggy.testing.stats.map((stat) => `${stat.label} ${stat.value}`)}
          tone="accent"
          count
        />
      </Chapter>

      <Chapter index="05 / Deployment" title="검증부터 복구까지 연결한 CI/CD 파이프라인">
        <ContentBlock title="구성 배경" paragraphs={[giggy.deployment.background]} />
        <ContentBlock title="구성 내용" items={giggy.deployment.details} />
        <FlowPanel label="검증부터 복구까지 연결한 CI/CD 파이프라인">
          {giggy.deployment.flow}
        </FlowPanel>
        <ContentBlock title="결과" paragraphs={giggy.deployment.results} tone="accent" />
      </Chapter>
    </GiggySectionRoot>
  );
}
