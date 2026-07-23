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
  results: readonly string[];
  bridge?: readonly string[];
};

type GiggyChapter = {
  background: string;
  details: readonly string[];
  flow: string;
};

type GiggyMatchingChapter = Omit<GiggyChapter, 'background'> & {
  background: readonly string[];
};

export type GiggyContent = {
  title: string;
  subtitle: string;
  intro: readonly string[];
  scope: readonly string[];
  stack: readonly string[];
  architecture: GiggyChapter;
  auth: GiggyChapter;
  matching: GiggyMatchingChapter;
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
