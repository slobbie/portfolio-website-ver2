import type { Variants } from 'framer-motion';

import { professionalSummary, type ProfessionalSummaryItem } from '@/entities/portfolio';
import { usePointerSpot } from '@/shared/lib/interaction';
import { useRevealGroup } from '@/shared/lib/motion';
import { PageSection, SectionHeading } from '@/shared/ui';

import { SummaryCard, SummaryGrid } from '@/widgets/portfolio/ui/SummarySection.styles';

type SummaryItemProps = {
  entry: ProfessionalSummaryItem;
  reveal: { variants: Variants };
};

/** 포인터 위치는 카드마다 따로 재야 하므로 항목을 컴포넌트로 분리합니다. */
function SummaryItem({ entry, reveal }: SummaryItemProps) {
  const spotRef = usePointerSpot();

  return (
    <SummaryCard className="summary-card" ref={spotRef} {...reveal}>
      <p className="card-index">{entry.label}</p>
      <h3>{entry.title}</h3>
      <p>{entry.description}</p>
    </SummaryCard>
  );
}

export function SummarySection() {
  /** 카드마다 판정하면 같은 행의 두 장이 동시에 올라옵니다. 한 장씩 이어지도록 묶습니다. */
  const { group, item } = useRevealGroup('sm', { stagger: 'block' });

  return (
    <PageSection className="page-section" id="summary">
      <SectionHeading title="Professional Summary" />
      <SummaryGrid className="summary-grid" {...group}>
        {professionalSummary.map((entry) => (
          <SummaryItem entry={entry} reveal={item} key={entry.title} />
        ))}
      </SummaryGrid>
    </PageSection>
  );
}
