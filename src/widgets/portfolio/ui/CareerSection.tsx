import { careerProjects, type CareerProject } from '@/entities/portfolio';
import { ContentBlock, SectionHeading } from '@/shared/ui';

import {
  CareerArticleRoot,
  CareerCompany,
  CareerContent,
  CareerIndex,
  CareerLayout,
  CareerProjectBody,
  CareerProjectTitle,
  CareerSectionRoot,
} from '@/widgets/portfolio/ui/CareerSection.styles';

const CAREER_NAVIGATION = [
  { index: '01', label: '에스제이소프트텍', href: '#career-sjsofttech' },
  { index: '02', label: '미니레코드', href: '#career-minirecord' },
  { index: '03', label: '이로운소프트', href: '#career-erounsoft' },
  { index: '04', label: 'GiGGY', href: '#giggy' },
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
  return (
    <CareerArticleRoot
      className="career-article"
      id={isFirstCompanyProject ? `career-${project.companyId}` : undefined}
    >
      {isFirstCompanyProject && (
        <CareerCompany className="career-company">{project.company}</CareerCompany>
      )}
      <CareerProjectTitle className="career-project-title">
        <p>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <h3>{project.title}</h3>
        {project.duration && <time>{project.duration}</time>}
      </CareerProjectTitle>

      <CareerProjectBody className="career-project-body">
        <ContentBlock title="프로젝트 배경" paragraphs={project.background} />
        <ContentBlock title="당시 문제 상황" items={project.problems} />
        <ContentBlock title={project.roleHeading ?? '담당 역할'} items={project.roles} />
        <ContentBlock title="해결 접근 방식" paragraphs={project.approach} />
        <ContentBlock title="주요 수행 내용" items={project.keyWork} />
        <ContentBlock title="결과" paragraphs={project.results} tone="accent" />
        <ContentBlock title="토스플레이스 업무와의 연결" paragraphs={project.bridge} />
      </CareerProjectBody>
    </CareerArticleRoot>
  );
}

export function CareerSection() {
  return (
    <CareerSectionRoot className="page-section career-section" id="career">
      <SectionHeading title="문제에서 구조까지" />

      <CareerLayout className="career-layout">
        <CareerIndex className="career-index" aria-label="회사별 경력 바로가기">
          <p>Career index</p>
          {CAREER_NAVIGATION.map((item) => (
            <a href={item.href} key={item.href}>
              <span>{item.index}</span>
              {item.label}
            </a>
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
