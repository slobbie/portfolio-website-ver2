import { careerProjects, type CareerProject } from '@/entities/portfolio';
import { useViewportFocus } from '@/shared/lib/interaction';
import { useMotionEnabled, useReveal, useScrollSpy } from '@/shared/lib/motion';
import { useMergedRefs } from '@/shared/lib/react';
import { ContentBlock, SectionHeading } from '@/shared/ui';

import {
  CareerActiveBar,
  CareerArticleRoot,
  CareerCompany,
  CareerContent,
  CareerIndex,
  CareerIndexGroup,
  CareerLayout,
  CareerProjectBody,
  CareerProjectTitle,
  CareerSectionRoot,
} from '@/widgets/portfolio/ui/CareerSection.styles';

const CAREER_ATTRIBUTE = 'data-career-id';

/**
 * 인덱스는 이 섹션 안에서만 고정되어 GIGGY 구간에서는 화면에 없습니다.
 * 볼 수 없는 항목은 두지 않고, 회사 경력만 다룹니다.
 */
const CAREER_NAVIGATION = [
  {
    group: 'Career',
    items: [
      { index: '01', id: 'sjsofttech', label: '에스제이소프트텍', href: '#career-sjsofttech' },
      { index: '02', id: 'minirecord', label: '미니레코드', href: '#career-minirecord' },
      { index: '03', id: 'erounsoft', label: '이로운소프트', href: '#career-erounsoft' },
    ],
  },
] as const;

type CareerArticleProps = {
  project: CareerProject;
  index: number;
  isFirstCompanyProject: boolean;
  total: number;
};

function CareerArticle({
  project,
  index,
  isFirstCompanyProject,
  total,
}: CareerArticleProps) {
  const reveal = useReveal('sm');
  const { ref: focusRef, focused } = useViewportFocus();
  const [titleName, titleDescription] = project.title.split(' | ');
  /* 등장 판정과 활성 판정이 같은 글 전체를 재야 해서 ref를 합칩니다. */
  const ref = useMergedRefs<HTMLElement>(reveal.ref, focusRef);

  return (
    <CareerArticleRoot
      className="career-article"
      id={isFirstCompanyProject ? `career-${project.companyId}` : undefined}
      data-career-id={project.companyId}
      data-focused={focused}
      {...reveal}
      ref={ref}
    >
      {isFirstCompanyProject && (
        <CareerCompany className="career-company">{project.company}</CareerCompany>
      )}
      <CareerProjectTitle className="career-project-title">
        <p>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <h3 data-compound={Boolean(titleDescription)}>
          {titleDescription ? (
            <>
              <span className="career-project-name">{titleName}</span>
              <span className="career-project-separator"> | </span>
              <span className="career-project-description">{titleDescription}</span>
            </>
          ) : (
            project.title
          )}
        </h3>
        {project.duration && <time>{project.duration}</time>}
      </CareerProjectTitle>

      <CareerProjectBody className="career-project-body">
        <ContentBlock title="배경" paragraphs={project.background} />
        <ContentBlock title="당시 문제 상황" items={project.problems} />
        <ContentBlock title={project.roleHeading ?? '담당 역할'} items={project.roles} />
        <ContentBlock title="해결 접근 방식" paragraphs={project.approach} />
        <ContentBlock title="주요 기여" items={project.keyWork} />
        <ContentBlock
          title={project.resultsHeading ?? '결과'}
          paragraphs={project.results}
          tone="accent"
        />
        <ContentBlock title="기술" paragraphs={[project.tech.join(' · ')]} />
      </CareerProjectBody>
    </CareerArticleRoot>
  );
}

export function CareerSection() {
  const activeCareerId = useScrollSpy(CAREER_ATTRIBUTE);
  const motionEnabled = useMotionEnabled();

  return (
    <CareerSectionRoot
      className="page-section career-section"
      id="career"
      data-nav-section="career"
    >
      <SectionHeading eyebrow="Career" title="경력 기술서" />

      <CareerLayout className="career-layout">
        <CareerIndex className="career-index" aria-label="회사별 경력 바로가기">
          {CAREER_NAVIGATION.map((section) => (
            <CareerIndexGroup className="career-index-group" key={section.group}>
              <p>{section.group}</p>
              {section.items.map((item) => {
                const isActive = item.id === activeCareerId;

                return (
                  <a
                    href={item.href}
                    key={item.href}
                    data-active={isActive}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {isActive && (
                      <CareerActiveBar
                        className="career-active-bar"
                        aria-hidden="true"
                        layoutId={motionEnabled ? 'career-active-bar' : undefined}
                      />
                    )}
                    <span>{item.index}</span>
                    {item.label}
                  </a>
                );
              })}
            </CareerIndexGroup>
          ))}
        </CareerIndex>

        <CareerContent className="career-content">
          {careerProjects.map((project, index) => (
            <CareerArticle
              project={project}
              index={index}
              isFirstCompanyProject={
                index === 0 || careerProjects[index - 1]?.companyId !== project.companyId
              }
              total={careerProjects.length}
              key={`${project.company}-${project.title}`}
            />
          ))}
        </CareerContent>
      </CareerLayout>
    </CareerSectionRoot>
  );
}
