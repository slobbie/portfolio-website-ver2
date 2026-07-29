import { techGroups } from '@/entities/portfolio';
import { useRevealGroup } from '@/shared/lib/motion';
import { SectionHeading, TagList } from '@/shared/ui';

import { TechList, TechRow, TechSection } from '@/widgets/portfolio/ui/TechStackSection.styles';

export function TechStackSection() {
  const { group, item } = useRevealGroup('sm');

  return (
    <TechSection className="page-section tech-section" id="stack">
      <SectionHeading title="Tech Stack" />
      <TechList className="tech-list" {...group}>
        {techGroups.map((techGroup) => (
          <TechRow className="tech-row" key={techGroup.label} {...item}>
            <h3>{techGroup.label}</h3>
            <TagList items={techGroup.items} />
          </TechRow>
        ))}
      </TechList>
    </TechSection>
  );
}
