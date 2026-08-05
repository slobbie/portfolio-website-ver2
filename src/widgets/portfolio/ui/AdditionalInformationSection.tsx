import { additionalInformation } from '@/entities/portfolio';

import {
  AdditionalEntry,
  AdditionalGrid,
  AdditionalSection,
} from '@/widgets/portfolio/ui/AdditionalInformationSection.styles';

export function AdditionalInformationSection() {
  return (
    <AdditionalSection
      className="page-section additional-section"
      id="additional"
      aria-label="학력 및 병역"
    >
      <AdditionalGrid className="additional-grid">
        {additionalInformation.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <AdditionalEntry className="additional-entry">
              <h3>{item.detail}</h3>
              <time>{item.duration}</time>
            </AdditionalEntry>
          </article>
        ))}
      </AdditionalGrid>
    </AdditionalSection>
  );
}
