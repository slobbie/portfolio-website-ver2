import { techGroups } from '@/entities/portfolio';
import { SectionHeading, TagList } from '@/shared/ui';

import { TechList, TechRow, TechSection } from '@/widgets/portfolio/ui/TechStackSection.styles';

export function TechStackSection() {
  return (
    <TechSection className="page-section tech-section" id="stack">
      <SectionHeading title="Tech Stack" />
      <TechList className="tech-list">
        {techGroups.map((group) => (
          <TechRow className="tech-row" key={group.label}>
            <h3>{group.label}</h3>
            <TagList items={group.items} />
          </TechRow>
        ))}
      </TechList>
    </TechSection>
  );
}
