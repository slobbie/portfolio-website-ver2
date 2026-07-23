import { experienceOverview } from '@/entities/portfolio';
import { PageSection, SectionHeading, TagList } from '@/shared/ui';

import {
  ExperienceCard,
  ExperienceHighlights,
  ExperienceList,
  ExperienceMain,
  ExperienceNumber,
  ExperienceTitle,
} from '@/widgets/portfolio/ui/ExperienceSection.styles';

export function ExperienceSection() {
  return (
    <PageSection className="page-section experience-section" id="experience">
      <SectionHeading title="Work Experience" />
      <ExperienceList className="experience-list">
        {experienceOverview.map((item, index) => (
          <ExperienceCard className="experience-card" key={item.company}>
            <ExperienceNumber className="experience-number">
              {String(index + 1).padStart(2, '0')}
            </ExperienceNumber>
            <ExperienceMain className="experience-main">
              <ExperienceTitle className="experience-title">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <time>{item.duration}</time>
              </ExperienceTitle>
              <ExperienceHighlights className="experience-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ExperienceHighlights>
              <TagList items={item.tech} />
            </ExperienceMain>
          </ExperienceCard>
        ))}
      </ExperienceList>
    </PageSection>
  );
}
