import {
  Availability,
  AvailabilityDot,
  Header,
  HeaderNav,
} from '@/widgets/site-header/ui/SiteHeader.styles';

export function SiteHeader() {
  return (
    <Header className="global-header">
      <Availability className="availability">
        <AvailabilityDot className="availability-dot" aria-hidden="true" />
        Available for work
      </Availability>
      <HeaderNav className="header-nav" aria-label="주요 메뉴">
        <a href="#career">Career</a>
        <a href="#labs">Labs</a>
      </HeaderNav>
    </Header>
  );
}
