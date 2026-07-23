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
        <article>
          <h2>학력</h2>
          <AdditionalEntry className="additional-entry">
            <h3>
              경기기계공업고등학교 <span aria-hidden="true">|</span> 신소재 학과 졸업
            </h3>
            <time>2010.03 — 2013.02</time>
          </AdditionalEntry>
        </article>
        <article>
          <h2>병역</h2>
          <AdditionalEntry className="additional-entry">
            <h3>육군 병장 만기 전역</h3>
            <time>2015.04 — 2017.01</time>
          </AdditionalEntry>
        </article>
      </AdditionalGrid>
    </AdditionalSection>
  );
}
