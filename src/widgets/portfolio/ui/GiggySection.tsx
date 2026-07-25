import { giggy } from '@/entities/portfolio';
import { ContentBlock, FlowPanel, SectionHeading, TagList } from '@/shared/ui';

import {
  ChapterIndex,
  GiggyChapter,
  GiggyGrid,
  GiggySectionRoot,
  ProjectCopy,
  StackCard,
} from '@/widgets/portfolio/ui/GiggySection.styles';

export function GiggySection() {
  return (
    <GiggySectionRoot className="page-section giggy-section" id="giggy">
      <SectionHeading title={giggy.title} description={giggy.subtitle} />

      <ProjectCopy className="giggy-intro project-copy">
        {giggy.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProjectCopy>

      <GiggyGrid className="giggy-grid">
        <ContentBlock title="담당 범위" items={giggy.scope} variant="card" />
        <StackCard className="detail-block">
          <h4>Backend Stack</h4>
          <TagList items={giggy.stack} />
        </StackCard>
      </GiggyGrid>

      <GiggyChapter className="giggy-chapter">
        <ChapterIndex className="chapter-index">01 / Architecture</ChapterIndex>
        <h3>백엔드 아키텍처</h3>
        <ContentBlock title="설계 배경" paragraphs={[giggy.architecture.background]} />
        <ContentBlock title="구조 설계" items={giggy.architecture.details} />
        <FlowPanel label="System structure">{giggy.architecture.flow}</FlowPanel>
      </GiggyChapter>

      <GiggyChapter className="giggy-chapter">
        <ChapterIndex className="chapter-index">02 / Data access</ChapterIndex>
        <h3>데이터 접근 경계와 트랜잭션 설계</h3>
        <ContentBlock title="설계 배경" paragraphs={[giggy.dataAccess.background]} />
        <ContentBlock title="구현 내용" items={giggy.dataAccess.details} />
        <FlowPanel label="Data access structure">{giggy.dataAccess.flow}</FlowPanel>
      </GiggyChapter>

      <GiggyChapter className="giggy-chapter">
        <ChapterIndex className="chapter-index">03 / Authentication</ChapterIndex>
        <h3>DB 기반 로그인 세션 관리</h3>
        <ContentBlock title="설계 배경" paragraphs={[giggy.auth.background]} />
        <ContentBlock title="구현 내용" items={giggy.auth.details} />
        <FlowPanel label="Authentication flow">{giggy.auth.flow}</FlowPanel>
      </GiggyChapter>

      <GiggyChapter className="giggy-chapter">
        <ChapterIndex className="chapter-index">04 / Realtime services</ChapterIndex>
        <h3>매칭·채팅·알림의 저장 및 전송 책임 분리</h3>
        <ContentBlock title="설계 배경" paragraphs={giggy.matching.background} />
        <ContentBlock title="구현 내용" items={giggy.matching.details} />
        <FlowPanel label="Service flow">{giggy.matching.flow}</FlowPanel>
      </GiggyChapter>

      <GiggyChapter className="giggy-chapter">
        <ChapterIndex className="chapter-index">05 / Deployment</ChapterIndex>
        <h3>검증부터 복구까지 연결한 배포 파이프라인</h3>
        <ContentBlock title="구성 배경" paragraphs={giggy.deployment.background} />
        <FlowPanel label="Deployment flow">{giggy.deployment.flow}</FlowPanel>
        <ContentBlock title="Deployment Stack" paragraphs={[giggy.deployment.stack.join(' · ')]} />
      </GiggyChapter>
    </GiggySectionRoot>
  );
}
