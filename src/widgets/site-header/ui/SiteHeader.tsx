import { useScroll, useSpring } from 'framer-motion';

import { useMotionEnabled, useScrollSpy } from '@/shared/lib/motion';

import {
  Availability,
  AvailabilityDot,
  Header,
  HeaderNav,
  HeaderProgress,
  NavIndicator,
} from '@/widgets/site-header/ui/SiteHeader.styles';

/** 메뉴가 가리키는 구간을 표시해 둔 속성. 섹션 쪽에서 같은 값을 답니다. */
const NAV_ATTRIBUTE = 'data-nav-section';

const NAV_ITEMS = [
  { id: 'career', label: 'Career', href: '#career' },
  { id: 'labs', label: 'Labs', href: '#labs' },
] as const;

/** 진행 선이 휠 입력을 그대로 따라가면 눈금처럼 튀어 보입니다. */
const PROGRESS_SPRING = { stiffness: 140, damping: 30, mass: 0.4 } as const;

export function SiteHeader() {
  const motionEnabled = useMotionEnabled();
  const activeId = useScrollSpy(NAV_ATTRIBUTE);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, PROGRESS_SPRING);

  return (
    <Header className="global-header">
      <Availability className="availability">
        <AvailabilityDot className="availability-dot" aria-hidden="true" />
        Available for work
      </Availability>
      <HeaderNav className="header-nav" aria-label="주요 메뉴">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              href={item.href}
              key={item.id}
              data-active={isActive}
              aria-current={isActive ? 'true' : undefined}
            >
              {item.label}
              {isActive && (
                <NavIndicator
                  className="nav-indicator"
                  aria-hidden="true"
                  layoutId={motionEnabled ? 'header-nav-indicator' : undefined}
                />
              )}
            </a>
          );
        })}
      </HeaderNav>
      <HeaderProgress
        className="header-progress"
        aria-hidden="true"
        style={{ scaleX: motionEnabled ? progress : scrollYProgress }}
      />
    </Header>
  );
}
