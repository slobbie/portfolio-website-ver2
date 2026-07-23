import { labs } from '@/entities/portfolio';
import { SectionHeading, TagList } from '@/shared/ui';

import {
  LabCard,
  LabCopy,
  LabImageWrap,
  LabIndex,
  LabLinks,
  LabsList,
  LabsSectionRoot,
} from '@/widgets/portfolio/ui/LabsSection.styles';

export function LabsSection() {
  return (
    <LabsSectionRoot className="page-section labs-section" id="labs">
      <SectionHeading
        title="Labs"
        description="실무 경력과 분리해, 인터페이스와 인터랙션을 실험한 작업만 모았습니다."
      />
      <LabsList className="labs-list">
        {labs.map((lab) => (
          <LabCard className="lab-card" key={lab.title}>
            <LabImageWrap className="lab-image-wrap">
              <img src={lab.image} alt={`${lab.title} 프로젝트 화면`} loading="lazy" />
            </LabImageWrap>
            <LabCopy className="lab-copy">
              <LabIndex className="chapter-index">{lab.index} / Lab</LabIndex>
              <h3>{lab.title}</h3>
              <strong>{lab.description}</strong>
              <p>{lab.detail}</p>
              <TagList items={lab.tech} />
              {lab.links.length > 0 && (
                <LabLinks className="lab-links">
                  {lab.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </LabLinks>
              )}
            </LabCopy>
          </LabCard>
        ))}
      </LabsList>
    </LabsSectionRoot>
  );
}
