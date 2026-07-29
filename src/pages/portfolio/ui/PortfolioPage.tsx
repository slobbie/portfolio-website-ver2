import {
  CareerSection,
  ExperienceSection,
  GiggySection,
  HeroSection,
  LabsSection,
  SummarySection,
  TechStackSection,
} from '@/widgets/portfolio';
import { SiteHeader } from '@/widgets/site-header';

import {
  ContentStage,
  PortfolioRoot,
  SiteShell,
  SkipLink,
} from '@/pages/portfolio/ui/PortfolioPage.styles';

const backgroundTexture = `${import.meta.env.BASE_URL}images/bg.png`;

export function PortfolioPage() {
  return (
    <PortfolioRoot backgroundTexture={backgroundTexture} className="portfolio-page" id="top">
      <SkipLink className="skip-link" href="#main-content">
        본문으로 바로가기
      </SkipLink>
      <ContentStage className="content-stage">
        <SiteShell className="site-shell">
          <SiteHeader />
          <main id="main-content">
            <HeroSection />
            <SummarySection />
            <TechStackSection />
            <ExperienceSection />
            <CareerSection />
            <GiggySection />
            <LabsSection />
          </main>
        </SiteShell>
      </ContentStage>
    </PortfolioRoot>
  );
}
