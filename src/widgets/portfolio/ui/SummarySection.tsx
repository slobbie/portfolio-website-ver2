import { professionalSummary } from '@/entities/portfolio';
import { PageSection, SectionHeading } from '@/shared/ui';

import { SummaryCard, SummaryGrid } from '@/widgets/portfolio/ui/SummarySection.styles';

export function SummarySection() {
  return (
    <PageSection className="page-section" id="summary">
      <SectionHeading
        title="Professional Summary"
        description="화면 구현에서 출발해 실시간 통신, 네이티브 연동, 백엔드 설계까지 확장해 왔습니다."
      />
      <SummaryGrid className="summary-grid">
        {professionalSummary.map((item) => (
          <SummaryCard className="summary-card" key={item.title}>
            <p className="card-index">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </SummaryCard>
        ))}
      </SummaryGrid>
    </PageSection>
  );
}
