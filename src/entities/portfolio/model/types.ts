export type AdditionalInformationItem = {
  title: string;
  detail: string;
  duration: string;
};

export type ProfessionalSummaryItem = {
  label: string;
  title: string;
  description: string;
};

export type TechGroup = {
  label: string;
  items: readonly string[];
};

export type ExperienceOverviewItem = {
  company: string;
  role: string;
  duration: string;
  highlights: readonly string[];
  tech: readonly string[];
};

export type CareerProject = {
  company: string;
  companyId: string;
  title: string;
  duration?: string;
  background: readonly string[];
  problems: readonly string[];
  roleHeading?: string;
  roles: readonly string[];
  approach: readonly string[];
  keyWork: readonly string[];
  resultsHeading?: string;
  results: readonly string[];
  tech: readonly string[];
};

type GiggyFlowChapter = {
  background: string;
  details: readonly string[];
  flow: string;
  note?: string;
};

type GiggyTestStat = {
  label: string;
  value: string;
};

type GiggyTestingChapter = {
  summary: readonly string[];
  stats: readonly GiggyTestStat[];
};

type GiggyDeploymentChapter = {
  background: string;
  details: readonly string[];
  results: readonly string[];
  flow: string;
  stack: readonly string[];
};

export type GiggyContent = {
  title: string;
  subtitle: string;
  github: string;
  intro: readonly string[];
  scope: readonly string[];
  stack: readonly string[];
  architecture: GiggyFlowChapter;
  dataAccess: GiggyFlowChapter;
  realtime: GiggyFlowChapter;
  testing: GiggyTestingChapter;
  deployment: GiggyDeploymentChapter;
};

export type LabLink = {
  label: string;
  href: string;
};

export type LabProject = {
  title: string;
  index: string;
  description: string;
  detail: string;
  image: string;
  tech: readonly string[];
  links: readonly LabLink[];
};
